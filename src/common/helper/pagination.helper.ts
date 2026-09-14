import { PaginationQueryDto } from '../dto/pagination-query.dto';
import { PaginatedResult } from '../interfaces/paginated-result.interface';

export function getSkipTake({ page, limit }: PaginationQueryDto) {
  return { skip: (page - 1) * limit, take: limit };
}

export function buildPaginatedResult<T>(
  data: T[],
  total: number,
  { page, limit }: PaginationQueryDto,
): PaginatedResult<T> {
  return {
    data,
    meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
  };
}
