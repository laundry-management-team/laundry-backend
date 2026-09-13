/**
 * Lao mobile phone number validation and formatting.
 *
 * Accepted local formats → all normalise to 10-digit local number:
 *   20XXXXXXXX          (10 digits, bare local)
 *   020XXXXXXXX         (11 digits, leading zero)
 *   +85620XXXXXXXX      (international, with +)
 *   85620XXXXXXXX       (international, without +)
 *   +8560XXXXXXXXXX     (international, kept the local leading zero — common typo)
 *   8560XXXXXXXXXX      (same, without +)
 *
 * Valid mobile prefixes (20X): 202, 205, 207, 208, 209
 *
 * Stored format in DB:  +85620XXXXXXXX  → split into countryCode="+856" + local="20XXXXXXXX"
 */
export class PhoneNumberValidator {
  static readonly COUNTRY_CODE = '+856';

  private static readonly VALID_PREFIXES = [
    '202',
    '205',
    '207',
    '208',
    '209',
  ] as const;

  /** Returns true only for valid Lao mobile numbers (accepts all input formats above). */
  static isValid(input: string | undefined): boolean {
    return this.toLocalDigits(input) !== null;
  }

  /** Converts any accepted format to DB storage format: +85620XXXXXXXX. Throws if invalid. */
  static toInternational(input: string): string {
    const local = this.toLocalDigits(input);
    if (!local) {
      throw new Error(`Invalid Lao mobile number: ${input}`);
    }
    return `${this.COUNTRY_CODE}${local}`;
  }

  /** Splits "+85620XXXXXXXX" → { countryCode: "+856", localNumber: "20XXXXXXXX" }. */
  static split(internationalNumber: string): {
    countryCode: string;
    localNumber: string;
  } {
    if (!internationalNumber.startsWith(this.COUNTRY_CODE)) {
      throw new Error(
        `Expected international format (+856…), got: ${internationalNumber}`,
      );
    }
    return {
      countryCode: this.COUNTRY_CODE,
      localNumber: internationalNumber.slice(this.COUNTRY_CODE.length),
    };
  }

  private static toLocalDigits(input: string | undefined): string | null {
    if (typeof input !== 'string' || !input) return null;

    const digits = input.replace(/\D/g, '');
    let local: string;

    if (digits.startsWith('85620') && digits.length === 13) {
      local = digits.slice(3); // 85620XXXXXXXX → 20XXXXXXXX
    } else if (digits.startsWith('8560') && digits.length === 14) {
      local = digits.slice(4); // 8560 + 20XXXXXXXX (kept the local leading zero) → 20XXXXXXXX
    } else if (digits.startsWith('020') && digits.length === 11) {
      local = digits.slice(1); // 020XXXXXXXX → 20XXXXXXXX
    } else if (digits.startsWith('20') && digits.length === 10) {
      local = digits; // 20XXXXXXXX
    } else {
      return null;
    }

    return this.isValidPrefix(local) ? local : null;
  }

  private static isValidPrefix(localNumber: string): boolean {
    const prefix = localNumber.substring(0, 3);
    return (this.VALID_PREFIXES as readonly string[]).includes(prefix);
  }
}
