export type ApiStatus = 'success' | 'error';

export interface ApiResponse<T> {
  status: ApiStatus;
  data: T | null;
  message: string;
  error?: {
    code: string;
    details: string;
  };
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(args: { message: string; statusCode?: number; code?: string }) {
    super(args.message);
    this.statusCode = args.statusCode ?? 500;
    this.code = args.code ?? 'INTERNAL_ERROR';
  }
}
