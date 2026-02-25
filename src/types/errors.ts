export type ErrorCode = 
  | 'UNKNOWN'
  | 'NETWORK_ERROR'
  | 'TIMEOUT'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'VALIDATION_ERROR'
  | 'RATE_LIMITED'
  | 'SERVER_ERROR'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_INVALID'
  | 'CANCELLED'
  | 'NOT_LOGIN'
  | 'FAIL'
  | 'BUSINESS_ERROR';

export interface ErrorDetail {
  field?: string;
  message: string;
  code?: string;
  value?: unknown;
}

export class SdkworkError extends Error {
  public readonly code: number | string;
  public readonly errorCode: ErrorCode;
  public readonly data?: unknown;
  public readonly details?: ErrorDetail[];
  public readonly timestamp: Date;
  public readonly requestId?: string;

  constructor(
    message: string,
    code: number | string = 0,
    errorCode: ErrorCode = 'UNKNOWN',
    data?: unknown,
    details?: ErrorDetail[],
    requestId?: string
  ) {
    super(message);
    this.name = 'SdkworkError';
    this.code = code;
    this.errorCode = errorCode;
    this.data = data;
    this.details = details;
    this.timestamp = new Date();
    this.requestId = requestId;
    
    Object.setPrototypeOf(this, SdkworkError.prototype);
  }

  static fromApiResult(result: { code: number | string; msg?: string; message?: string; data?: unknown; traceId?: string; requestId?: string; errorName?: string }): SdkworkError {
    const errorCode = mapCodeToErrorCode(result.code, result.errorName);
    return new SdkworkError(
      result.msg || result.message || 'Request failed',
      result.code,
      errorCode,
      result.data,
      undefined,
      result.traceId || result.requestId
    );
  }

  isNetworkError(): boolean {
    return this.errorCode === 'NETWORK_ERROR' || this.errorCode === 'TIMEOUT';
  }

  isAuthError(): boolean {
    return this.errorCode === 'UNAUTHORIZED' || this.errorCode === 'TOKEN_EXPIRED' || this.errorCode === 'TOKEN_INVALID' || this.errorCode === 'NOT_LOGIN';
  }

  isClientError(): boolean {
    const numCode = typeof this.code === 'string' ? parseInt(this.code, 10) : this.code;
    return numCode >= 400 && numCode < 500;
  }

  isServerError(): boolean {
    const numCode = typeof this.code === 'string' ? parseInt(this.code, 10) : this.code;
    return numCode >= 500;
  }

  isRetryable(): boolean {
    return this.errorCode === 'NETWORK_ERROR' || 
           this.errorCode === 'TIMEOUT' || 
           this.errorCode === 'RATE_LIMITED' ||
           this.isServerError();
  }

  toJSON(): object {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      errorCode: this.errorCode,
      data: this.data,
      details: this.details,
      timestamp: this.timestamp.toISOString(),
      requestId: this.requestId,
    };
  }
}

export class NetworkError extends SdkworkError {
  constructor(message: string = 'Network request failed') {
    super(message, 0, 'NETWORK_ERROR');
    this.name = 'NetworkError';
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export class TimeoutError extends SdkworkError {
  constructor(message: string = 'Request timeout') {
    super(message, 0, 'TIMEOUT');
    this.name = 'TimeoutError';
    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}

export class AuthenticationError extends SdkworkError {
  constructor(message: string = 'Authentication failed', code: number | string = 401) {
    super(message, code, 'UNAUTHORIZED');
    this.name = 'AuthenticationError';
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

export class TokenExpiredError extends SdkworkError {
  constructor(message: string = 'Token has expired') {
    super(message, '4003', 'TOKEN_EXPIRED');
    this.name = 'TokenExpiredError';
    Object.setPrototypeOf(this, TokenExpiredError.prototype);
  }
}

export class ForbiddenError extends SdkworkError {
  constructor(message: string = 'Access denied') {
    super(message, 403, 'FORBIDDEN');
    this.name = 'ForbiddenError';
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}

export class NotFoundError extends SdkworkError {
  constructor(message: string = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ValidationError extends SdkworkError {
  constructor(message: string = 'Validation failed', details?: ErrorDetail[]) {
    super(message, '4007', 'VALIDATION_ERROR', undefined, details);
    this.name = 'ValidationError';
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class RateLimitError extends SdkworkError {
  public readonly retryAfter?: number;

  constructor(message: string = 'Rate limit exceeded', retryAfter?: number) {
    super(message, 429, 'RATE_LIMITED');
    this.name = 'RateLimitError';
    this.retryAfter = retryAfter;
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

export class ServerError extends SdkworkError {
  constructor(message: string = 'Internal server error', code: number | string = 500) {
    super(message, code, 'SERVER_ERROR');
    this.name = 'ServerError';
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}

export class CancelledError extends SdkworkError {
  constructor(message: string = 'Request was cancelled') {
    super(message, 0, 'CANCELLED');
    this.name = 'CancelledError';
    Object.setPrototypeOf(this, CancelledError.prototype);
  }
}

export class BusinessError extends SdkworkError {
  constructor(message: string = 'Business error', code: number | string = '4005') {
    super(message, code, 'BUSINESS_ERROR');
    this.name = 'BusinessError';
    Object.setPrototypeOf(this, BusinessError.prototype);
  }
}

function mapCodeToErrorCode(code: number | string, errorName?: string): ErrorCode {
  if (errorName) {
    switch (errorName) {
      case 'NOT_LOGIN':
        return 'NOT_LOGIN';
      case 'TOKEN_EXPIRED':
        return 'TOKEN_EXPIRED';
      case 'TOKEN_INVALID':
        return 'TOKEN_INVALID';
      case 'FAIL':
        return 'FAIL';
      case 'SUCCESS':
        return 'UNKNOWN';
    }
  }
  
  const numCode = typeof code === 'string' ? parseInt(code, 10) : code;
  
  if (numCode === 401 || numCode === 4001) return 'UNAUTHORIZED';
  if (numCode === 403 || numCode === 4003) return 'FORBIDDEN';
  if (numCode === 404 || numCode === 4004) return 'NOT_FOUND';
  if (numCode === 400 || numCode === 4007) return 'VALIDATION_ERROR';
  if (numCode === 429) return 'RATE_LIMITED';
  if (numCode >= 500 || numCode === 5000) return 'SERVER_ERROR';
  
  return 'UNKNOWN';
}

export function isSdkworkError(error: unknown): error is SdkworkError {
  return error instanceof SdkworkError;
}

export function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof NetworkError;
}

export function isAuthError(error: unknown): error is AuthenticationError | TokenExpiredError {
  return error instanceof AuthenticationError || error instanceof TokenExpiredError;
}

export function isRetryableError(error: unknown): boolean {
  if (error instanceof SdkworkError) {
    return error.isRetryable();
  }
  return false;
}
