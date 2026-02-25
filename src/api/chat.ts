import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  ChatCompletionCreateForm,
  ChatCompletion,
  PlusConversationForm,
  PlusConversationVO,
  PlusChatMessageForm,
  PlusChatMessageVO,
  ChatModule,
  ConversationModule,
  ChatMessageModule,
} from '../types/chat';

export class ChatApi extends BaseApi implements ChatModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/chat' });
  }

  async create(form: ChatCompletionCreateForm, conversationId: string): Promise<ChatCompletion> {
    return this.client.request<ChatCompletion>(this.buildPath('/completions'), {
      method: 'POST',
      body: form,
      headers: { 'conversationId': conversationId }
    });
  }

  async stop(conversationId: string): Promise<boolean> {
    return this.postRequest<boolean>('/stop', null, { conversationId });
  }
}

export class ConversationApi extends BaseApi implements ConversationModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/conversation' });
  }

  async create(form: PlusConversationForm): Promise<PlusConversationVO> {
    return this.postRequest<PlusConversationVO>('', form);
  }

  async update(form: PlusConversationForm): Promise<PlusConversationVO> {
    return this.putRequest<PlusConversationVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusConversationVO> {
    return this.getRequest<PlusConversationVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusConversationVO[]> {
    return this.postRequest<PlusConversationVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusConversationVO>> {
    return this.paginate<PlusConversationVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class ChatMessageApi extends BaseApi implements ChatMessageModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/message' });
  }

  async create(form: PlusChatMessageForm): Promise<PlusChatMessageVO> {
    return this.postRequest<PlusChatMessageVO>('', form);
  }

  async update(form: PlusChatMessageForm): Promise<PlusChatMessageVO> {
    return this.putRequest<PlusChatMessageVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusChatMessageVO> {
    return this.getRequest<PlusChatMessageVO>(`/${id}`);
  }

  async listByConversation(conversationId: string | number, page: number = 0, size: number = 20): Promise<Page<PlusChatMessageVO>> {
    return this.paginate<PlusChatMessageVO>('/list', page, size, { conversationId: String(conversationId) });
  }
}

export function createChatApi(client: HttpClient): ChatModule {
  return new ChatApi(client);
}

export function createConversationApi(client: HttpClient): ConversationModule {
  return new ConversationApi(client);
}

export function createChatMessageApi(client: HttpClient): ChatMessageModule {
  return new ChatMessageApi(client);
}
