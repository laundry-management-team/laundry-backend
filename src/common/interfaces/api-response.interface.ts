export interface ApiSuccessResponse<T = unknown> {
  success: true;
  statusCode: number;
  data: T;
  message: string;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  statusCode: number;
  data: null;
  message: string;
  errors?: string[];
  timestamp: string;
}
