import moment from 'moment-timezone';

const TZ = 'Asia/Vientiane';

// Matches UTC ISO strings produced by JSON.stringify on a Date, e.g. "2026-05-13T03:00:00.000Z".
// Does NOT match already-converted Vientiane strings like "2026-05-13T10:00:00+07:00".
const UTC_ISO_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/;

/**
 * All timestamps leave the API in Asia/Vientiane (UTC+7). TimezoneInterceptor
 * runs convertDates() over every response so clients never see raw UTC.
 */
export class DateConverter {
  static convertDates<T>(data: T, toDateObject = false): T {
    if (data instanceof Date) {
      return (toDateObject
        ? moment(data).tz(TZ).toDate()
        : moment(data).tz(TZ).format()) as unknown as T;
    }

    // Convert UTC ISO strings from Redis cache (JSON.stringify turns Date → "...Z" string)
    if (typeof data === 'string' && UTC_ISO_RE.test(data)) {
      const d = new Date(data);
      if (!isNaN(d.getTime())) {
        return (toDateObject
          ? moment(d).tz(TZ).toDate()
          : moment(d).tz(TZ).format()) as unknown as T;
      }
    }

    if (Array.isArray(data)) {
      return (data as unknown[]).map((item) =>
        this.convertDates(item, toDateObject),
      ) as unknown as T;
    }

    if (typeof data === 'object' && data !== null) {
      // Only recurse into plain objects. Class instances (Prisma Decimal, Buffer,
      // etc.) must be left intact — deep-cloning them strips their toJSON and
      // corrupts serialization (e.g. Decimal → { s, e, d }).
      const proto = Object.getPrototypeOf(data) as object | null;
      if (proto !== Object.prototype && proto !== null) {
        return data;
      }

      const result: Record<string, unknown> = {};
      const objData = data as Record<string, unknown>;
      for (const key in objData) {
        if (Object.prototype.hasOwnProperty.call(objData, key)) {
          result[key] = this.convertDates(objData[key], toDateObject);
        }
      }
      return result as T;
    }

    return data;
  }

  static toVientianeDateObject(
    date: Date | string | number = new Date(),
  ): Date {
    return moment(date).tz(TZ).toDate();
  }

  static formatToVientianeString(
    date: Date | string | number = new Date(),
  ): string {
    return moment(date).tz(TZ).format();
  }

  static formatToDateString(date: Date | string | number = new Date()): string {
    return moment(date).tz(TZ).format('YYYY-MM-DD');
  }

  /** Converts MM/DD/YYYY → YYYY-MM-DD; other formats pass through. */
  private static convertToYYYYMMDD(date: string): string {
    if (/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(date)) {
      const [month, day, year] = date.split('/');
      return `${year}-${month}-${day}`;
    }
    return date;
  }

  /** Parses a date flexibly (handles MM/DD/YYYY) into a Vientiane Date object. */
  static parseFlexibleDate(date: Date | string | number = new Date()): Date {
    if (typeof date === 'string') {
      date = this.convertToYYYYMMDD(date);
    }
    return this.toVientianeDateObject(date);
  }
}
