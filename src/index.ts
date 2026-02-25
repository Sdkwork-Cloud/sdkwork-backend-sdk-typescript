export { SdkworkClient, createClient } from './sdk';
export { HttpClient, createHttpClient } from './http/client';

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
  Interceptors,
  DeepPartial,
  PickByType,
  RequiredByKeys,
  OptionalByKeys,
} from './types/core';

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
  BusinessError,
  isSdkworkError,
  isNetworkError,
  isAuthError,
  isRetryableError,
} from './types/errors';

export type { ErrorCode, ErrorDetail } from './types/errors';

export type { BasePlusVO, BasePlusEntity, QueryListForm } from './types/common';

export type {
  LoginType,
  LoginForm,
  RegisterForm,
  RefreshTokenForm,
  ChangePasswordForm,
  PasswordResetRequestForm,
  PasswordResetForm,
  AuthUserVO,
  LoginResultVO,
  RegisterResultVO,
  PasswordResetResultVO,
  OAuthAuthorizeUrlVO,
  OAuthCallbackForm,
  VerificationCodeForm,
  VerificationCodeResultVO,
  AuthModule,
  OAuthModule,
  VerificationModule,
} from './types/auth';

export type {
  PlusUserForm,
  PlusUserVO,
  PlusUserProfileVO,
  PlusUserAddressForm,
  PlusUserAddressVO,
  PlusUserOAuthAccountForm,
  PlusUserOAuthAccountVO,
  UserModule,
  UserAddressModule,
  UserOAuthModule,
} from './types/user';

export type {
  ChatMessageRole,
  ChatCompletionMessage,
  ChatCompletionCreateForm,
  ChatCompletionChoice,
  ChatCompletionUsage,
  ChatCompletion,
  ChatCompletionChunk,
  PlusConversationForm,
  PlusConversationVO,
  PlusChatMessageForm,
  PlusChatMessageVO,
  PlusChatMessageContentForm,
  PlusChatMessageContentVO,
  ChatMessageQueryListForm,
  ChatModule,
  ConversationModule,
  ChatMessageModule,
  ChatMessageContentModule,
} from './types/chat';

export type {
  GenerationType,
  PlusAiGenerationForm,
  PlusAiGenerationVO,
  PlusAiGenerationContentForm,
  PlusAiGenerationContentVO,
  GenerateImageForm,
  GenerateImageVO,
  GenerateVideoForm,
  GenerateVideoVO,
  GenerateMusicForm,
  GenerateMusicVO,
  GenerateAudioForm,
  GenerateAudioVO,
  GenerateCharacterForm,
  GenerateCharacterVO,
  GenerateAudioEffectForm,
  GenerateAudioEffectVO,
  GenerateVoiceSpeakerForm,
  GenerateVoiceSpeakerVO,
  GenerationModule,
  ImageGenerationModule,
  VideoGenerationModule,
  MusicGenerationModule,
  AudioGenerationModule,
  CharacterGenerationModule,
  AudioEffectGenerationModule,
  VoiceSpeakerGenerationModule,
} from './types/generation';

export type {
  OrderType,
  OrderStatus,
  PlusOrderForm,
  PlusOrderVO,
  CreateGoodsOrderForm,
  CreateVirtualOrderForm,
  CreateVipOrderForm,
  CreatePointsOrderForm,
  CreateImGroupOrderForm,
  GoodsOrderVO,
  VirtualOrderVO,
  VipOrderVO,
  PointsOrderVO,
  ImGroupOrderVO,
  OrderCancelVO,
  OrderConfirmVO,
  OrderShipVO,
  OrderCompleteVO,
  OrderCloseVO,
  PlusOrderItemForm,
  PlusOrderItemVO,
  PlusPaymentForm,
  PlusPaymentVO,
  PlusPaymentCancelForm,
  PlusPaymentStatusQueryForm,
  PlusRefundForm,
  PlusRefundVO,
  PlusShoppingCartForm,
  PlusShoppingCartVO,
  PlusShoppingCartItemForm,
  PlusShoppingCartItemVO,
  PlusShoppingCartItemListForm,
  OrderModule,
  PaymentModule,
  RefundModule,
  ShoppingCartModule,
} from './types/trade';

export type {
  PlusAiModelInfoForm,
  PlusAiModelInfoVO,
  PlusAiModelPriceForm,
  PlusAiModelPriceVO,
  ModelModule,
} from './types/model';

export type {
  PlusFileForm,
  PlusFileVO,
  PlusDiskForm,
  PlusDiskVO,
  PlusOssBucketForm,
  PlusOssBucketVO,
  PlusUploadForm,
  UploadResultVO,
  PresignedUrlForm,
  PresignedUrlVO,
  FileModule,
  DiskModule,
  OssBucketModule,
} from './types/file';

export type {
  PlusKnowledgeBaseForm,
  PlusKnowledgeBaseVO,
  KnowledgeBaseFileForm,
  KnowledgeBaseFileVO,
  KnowledgeSearchForm,
  KnowledgeSearchResultVO,
  KnowledgeBaseModule,
} from './types/knowledge';

export type {
  PlusAiAgentForm,
  PlusAiAgentVO,
  AgentChatForm,
  AgentChatVO,
  AgentModule,
} from './types/agent';

export type {
  PlusAiToolForm,
  PlusAiToolVO,
  ToolExecuteForm,
  ToolExecuteVO,
  ToolModule,
} from './types/tool';

export type {
  PlusAiPromptForm,
  PlusAiPromptVO,
  PromptRenderForm,
  PromptRenderVO,
  PromptModule,
} from './types/prompt';

export type {
  PlusWorkspaceForm,
  PlusWorkspaceVO,
  PlusProjectForm,
  PlusProjectVO,
  WorkspaceModule,
  ProjectModule,
} from './types/workspace';

export type {
  PlusVipLevelForm,
  PlusVipLevelVO,
  PlusVipUserForm,
  PlusVipUserVO,
  PlusVipBenefitForm,
  PlusVipBenefitVO,
  PlusVipPackForm,
  PlusVipPackVO,
  PlusVipRechargeForm,
  PlusVipRechargeVO,
  VipModule,
  VipLevelModule,
  VipUserModule,
  VipBenefitModule,
  VipPackModule,
} from './types/vip';

export { createAuthApi, AuthApi } from './api/auth';
export { createUserApi, UserApi, createUserAddressApi, UserAddressApi } from './api/user';
export { createChatApi, ChatApi, createConversationApi, ConversationApi, createChatMessageApi, ChatMessageApi } from './api/chat';
export { createGenerationApi, GenerationApi, createImageGenerationApi, ImageGenerationApi, createVideoGenerationApi, VideoGenerationApi, createMusicGenerationApi, MusicGenerationApi, createAudioGenerationApi, AudioGenerationApi, createCharacterGenerationApi, CharacterGenerationApi, createAudioEffectGenerationApi, AudioEffectGenerationApi, createVoiceSpeakerGenerationApi, VoiceSpeakerGenerationApi } from './api/generation';
export { createOrderApi, OrderApi, createPaymentApi, PaymentApi, createRefundApi, RefundApi, createShoppingCartApi, ShoppingCartApi } from './api/trade';
export { createModelApi, ModelApi } from './api/model';
export { createFileApi, FileApi, createDiskApi, DiskApi, createOssBucketApi, OssBucketApi } from './api/file';
export { createKnowledgeBaseApi, KnowledgeBaseApi } from './api/knowledge';
export { createAgentApi, AgentApi } from './api/agent';
export { createToolApi, ToolApi } from './api/tool';
export { createPromptApi, PromptApi } from './api/prompt';
export { createWorkspaceApi, WorkspaceApi, createProjectApi, ProjectApi } from './api/workspace';
export { createVipApi, VipApi, createVipLevelApi, VipLevelApi, createVipUserApi, VipUserApi, createVipBenefitApi, VipBenefitApi, createVipPackApi, VipPackApi } from './api/vip';
export { BaseApi, createApiConfig } from './api/base';
export type { BaseApiConfig } from './api/base';

export { 
  createLogger, 
  noopLogger, 
  createCacheStore, 
  generateCacheKey,
  withRetry, 
  sleep, 
  calculateDelay, 
  createRetryConfig, 
  DEFAULT_RETRY_CONFIG,
  type Logger,
  type CacheStore,
} from '@sdkwork/sdk-common';

export {
  DefaultAuthTokenManager,
  createTokenManager,
} from './auth';

export type {
  AuthTokenManager,
  AuthTokens,
  TokenManagerEvents,
  AuthMode,
  AuthConfig,
} from './auth';

import { SdkworkClient } from './sdk';
export { SdkworkClient as default };
