import type { SdkworkConfig, RequestInterceptor, ResponseInterceptor, ErrorInterceptor } from './types/core';
import { HttpClient, createHttpClient } from './http/client';
import type { AuthTokenManager, AuthMode, AuthTokens } from './auth';
import type { AuthModule } from './types/auth';
import type { UserModule, UserAddressModule } from './types/user';
import type { ChatModule, ConversationModule, ChatMessageModule } from './types/chat';
import type { GenerationModule, ImageGenerationModule, VideoGenerationModule, MusicGenerationModule, AudioGenerationModule, CharacterGenerationModule, AudioEffectGenerationModule, VoiceSpeakerGenerationModule } from './types/generation';
import type { OrderModule, PaymentModule, RefundModule, ShoppingCartModule } from './types/trade';
import type { ModelModule } from './types/model';
import type { FileModule, DiskModule, OssBucketModule } from './types/file';
import type { KnowledgeBaseModule } from './types/knowledge';
import type { AgentModule } from './types/agent';
import type { ToolModule } from './types/tool';
import type { PromptModule } from './types/prompt';
import type { WorkspaceModule, ProjectModule } from './types/workspace';
import type { VipModule, VipLevelModule, VipUserModule, VipBenefitModule, VipPackModule } from './types/vip';
import { createAuthApi } from './api/auth';
import { createUserApi, createUserAddressApi } from './api/user';
import { createChatApi, createConversationApi, createChatMessageApi } from './api/chat';
import { createGenerationApi, createImageGenerationApi, createVideoGenerationApi, createMusicGenerationApi, createAudioGenerationApi, createCharacterGenerationApi, createAudioEffectGenerationApi, createVoiceSpeakerGenerationApi } from './api/generation';
import { createOrderApi, createPaymentApi, createRefundApi, createShoppingCartApi } from './api/trade';
import { createModelApi } from './api/model';
import { createFileApi, createDiskApi, createOssBucketApi } from './api/file';
import { createKnowledgeBaseApi } from './api/knowledge';
import { createAgentApi } from './api/agent';
import { createToolApi } from './api/tool';
import { createPromptApi } from './api/prompt';
import { createWorkspaceApi, createProjectApi } from './api/workspace';
import { createVipApi, createVipLevelApi, createVipUserApi, createVipBenefitApi, createVipPackApi } from './api/vip';

export class SdkworkClient {
  private httpClient: HttpClient;
  private modules: {
    auth: AuthModule;
    user: UserModule;
    userAddress: UserAddressModule;
    chat: ChatModule;
    conversation: ConversationModule;
    chatMessage: ChatMessageModule;
    generation: GenerationModule;
    imageGeneration: ImageGenerationModule;
    videoGeneration: VideoGenerationModule;
    musicGeneration: MusicGenerationModule;
    audioGeneration: AudioGenerationModule;
    characterGeneration: CharacterGenerationModule;
    audioEffectGeneration: AudioEffectGenerationModule;
    voiceSpeakerGeneration: VoiceSpeakerGenerationModule;
    order: OrderModule;
    payment: PaymentModule;
    refund: RefundModule;
    shoppingCart: ShoppingCartModule;
    model: ModelModule;
    file: FileModule;
    disk: DiskModule;
    ossBucket: OssBucketModule;
    knowledge: KnowledgeBaseModule;
    agent: AgentModule;
    tool: ToolModule;
    prompt: PromptModule;
    workspace: WorkspaceModule;
    project: ProjectModule;
    vip: VipModule;
    vipLevel: VipLevelModule;
    vipUser: VipUserModule;
    vipBenefit: VipBenefitModule;
    vipPack: VipPackModule;
  };

  constructor(config: SdkworkConfig) {
    this.httpClient = createHttpClient(config);
    this.modules = {
      auth: createAuthApi(this.httpClient),
      user: createUserApi(this.httpClient),
      userAddress: createUserAddressApi(this.httpClient),
      chat: createChatApi(this.httpClient),
      conversation: createConversationApi(this.httpClient),
      chatMessage: createChatMessageApi(this.httpClient),
      generation: createGenerationApi(this.httpClient),
      imageGeneration: createImageGenerationApi(this.httpClient),
      videoGeneration: createVideoGenerationApi(this.httpClient),
      musicGeneration: createMusicGenerationApi(this.httpClient),
      audioGeneration: createAudioGenerationApi(this.httpClient),
      characterGeneration: createCharacterGenerationApi(this.httpClient),
      audioEffectGeneration: createAudioEffectGenerationApi(this.httpClient),
      voiceSpeakerGeneration: createVoiceSpeakerGenerationApi(this.httpClient),
      order: createOrderApi(this.httpClient),
      payment: createPaymentApi(this.httpClient),
      refund: createRefundApi(this.httpClient),
      shoppingCart: createShoppingCartApi(this.httpClient),
      model: createModelApi(this.httpClient),
      file: createFileApi(this.httpClient),
      disk: createDiskApi(this.httpClient),
      ossBucket: createOssBucketApi(this.httpClient),
      knowledge: createKnowledgeBaseApi(this.httpClient),
      agent: createAgentApi(this.httpClient),
      tool: createToolApi(this.httpClient),
      prompt: createPromptApi(this.httpClient),
      workspace: createWorkspaceApi(this.httpClient),
      project: createProjectApi(this.httpClient),
      vip: createVipApi(this.httpClient),
      vipLevel: createVipLevelApi(this.httpClient),
      vipUser: createVipUserApi(this.httpClient),
      vipBenefit: createVipBenefitApi(this.httpClient),
      vipPack: createVipPackApi(this.httpClient),
    };
  }

  get auth(): AuthModule {
    return this.modules.auth;
  }

  get user(): UserModule {
    return this.modules.user;
  }

  get userAddress(): UserAddressModule {
    return this.modules.userAddress;
  }

  get chat(): ChatModule {
    return this.modules.chat;
  }

  get conversation(): ConversationModule {
    return this.modules.conversation;
  }

  get chatMessage(): ChatMessageModule {
    return this.modules.chatMessage;
  }

  get generation(): GenerationModule {
    return this.modules.generation;
  }

  get imageGeneration(): ImageGenerationModule {
    return this.modules.imageGeneration;
  }

  get videoGeneration(): VideoGenerationModule {
    return this.modules.videoGeneration;
  }

  get musicGeneration(): MusicGenerationModule {
    return this.modules.musicGeneration;
  }

  get audioGeneration(): AudioGenerationModule {
    return this.modules.audioGeneration;
  }

  get characterGeneration(): CharacterGenerationModule {
    return this.modules.characterGeneration;
  }

  get audioEffectGeneration(): AudioEffectGenerationModule {
    return this.modules.audioEffectGeneration;
  }

  get voiceSpeakerGeneration(): VoiceSpeakerGenerationModule {
    return this.modules.voiceSpeakerGeneration;
  }

  get order(): OrderModule {
    return this.modules.order;
  }

  get payment(): PaymentModule {
    return this.modules.payment;
  }

  get refund(): RefundModule {
    return this.modules.refund;
  }

  get shoppingCart(): ShoppingCartModule {
    return this.modules.shoppingCart;
  }

  get model(): ModelModule {
    return this.modules.model;
  }

  get file(): FileModule {
    return this.modules.file;
  }

  get disk(): DiskModule {
    return this.modules.disk;
  }

  get ossBucket(): OssBucketModule {
    return this.modules.ossBucket;
  }

  get knowledge(): KnowledgeBaseModule {
    return this.modules.knowledge;
  }

  get agent(): AgentModule {
    return this.modules.agent;
  }

  get tool(): ToolModule {
    return this.modules.tool;
  }

  get prompt(): PromptModule {
    return this.modules.prompt;
  }

  get workspace(): WorkspaceModule {
    return this.modules.workspace;
  }

  get project(): ProjectModule {
    return this.modules.project;
  }

  get vip(): VipModule {
    return this.modules.vip;
  }

  get vipLevel(): VipLevelModule {
    return this.modules.vipLevel;
  }

  get vipUser(): VipUserModule {
    return this.modules.vipUser;
  }

  get vipBenefit(): VipBenefitModule {
    return this.modules.vipBenefit;
  }

  get vipPack(): VipPackModule {
    return this.modules.vipPack;
  }

  getAuthMode(): AuthMode {
    return this.httpClient.getAuthMode();
  }

  setAuthMode(mode: AuthMode): this {
    this.httpClient.setAuthMode(mode);
    return this;
  }

  setApiKey(apiKey: string): this {
    this.httpClient.setApiKey(apiKey);
    return this;
  }

  setAuthToken(token: string): this {
    this.httpClient.setAuthToken(token);
    return this;
  }

  setAccessToken(token: string): this {
    this.httpClient.setAccessToken(token);
    return this;
  }

  setTokens(tokens: AuthTokens): this {
    const tokenManager = this.httpClient.getTokenManager();
    if (tokenManager) {
      tokenManager.setTokens(tokens);
    }
    return this;
  }

  getTokens(): AuthTokens {
    const tokenManager = this.httpClient.getTokenManager();
    return tokenManager?.getTokens() ?? {};
  }

  getTokenManager(): AuthTokenManager | undefined {
    return this.httpClient.getTokenManager();
  }

  setTokenManager(manager: AuthTokenManager): this {
    this.httpClient.setTokenManager(manager);
    return this;
  }

  setTenantId(tenantId: string): this {
    this.httpClient.setTenantId(tenantId);
    return this;
  }

  setOrganizationId(organizationId: string): this {
    this.httpClient.setOrganizationId(organizationId);
    return this;
  }

  setPlatform(platform: string): this {
    this.httpClient.setPlatform(platform);
    return this;
  }

  clearAuthToken(): this {
    this.httpClient.clearAuthToken();
    return this;
  }

  clearCache(): this {
    this.httpClient.clearCache();
    return this;
  }

  addRequestInterceptor(interceptor: RequestInterceptor): () => void {
    return this.httpClient.addRequestInterceptor(interceptor);
  }

  addResponseInterceptor(interceptor: ResponseInterceptor): () => void {
    return this.httpClient.addResponseInterceptor(interceptor);
  }

  addErrorInterceptor(interceptor: ErrorInterceptor): () => void {
    return this.httpClient.addErrorInterceptor(interceptor);
  }

  get http(): HttpClient {
    return this.httpClient;
  }

  getConfig() {
    return this.httpClient.getConfig();
  }

  isAuthenticated(): boolean {
    const tokenManager = this.httpClient.getTokenManager();
    if (!tokenManager) {
      return false;
    }
    return tokenManager.isValid();
  }

  hasAuthToken(): boolean {
    const tokenManager = this.httpClient.getTokenManager();
    if (!tokenManager) {
      return false;
    }
    return !!tokenManager.getAuthToken();
  }

  hasAccessToken(): boolean {
    const tokenManager = this.httpClient.getTokenManager();
    if (!tokenManager) {
      return false;
    }
    return !!tokenManager.getAccessToken();
  }
}

export function createClient(config: SdkworkConfig): SdkworkClient {
  return new SdkworkClient(config);
}

export default SdkworkClient;
