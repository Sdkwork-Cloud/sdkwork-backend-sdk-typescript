export interface BasePlusVO {
  id?: string | number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface BasePlusEntity {
  id?: string | number;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
  deleted?: boolean;
}

export interface QueryListForm {
  keyword?: string;
  status?: string | number;
  startTime?: string;
  endTime?: string;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
}

export type {
  SdkworkConfig,
  ApiResult,
  PageResult,
  Page,
  Pageable,
  RequestOptions,
  HttpMethod,
  LogLevel,
  RequestInterceptor,
  ResponseInterceptor,
  ErrorInterceptor,
  RequestConfig,
  RetryConfig,
  CacheConfig,
  LoggerConfig,
  Logger,
  Interceptors,
  DeepPartial,
  PickByType,
  RequiredByKeys,
  OptionalByKeys,
} from './core';

export {
  SdkworkError,
  NetworkError,
  TimeoutError,
  AuthenticationError,
  TokenExpiredError,
  ForbiddenError,
  NotFoundError,
  ValidationError,
  RateLimitError,
  ServerError,
  CancelledError,
  isSdkworkError,
  isNetworkError,
  isAuthError,
  isRetryableError,
} from './errors';

export type { ErrorCode, ErrorDetail } from './errors';
