import type { BasePlusVO, Page, QueryListForm } from './common';

export type ChatMessageRole = 'system' | 'user' | 'assistant' | 'function' | 'tool';

export interface ChatCompletionMessage {
  role: ChatMessageRole;
  content: string;
  name?: string;
  functionCall?: {
    name: string;
    arguments: string;
  };
  toolCalls?: Array<{
    id: string;
    type: string;
    function: {
      name: string;
      arguments: string;
    };
  }>;
}

export interface ChatCompletionCreateForm {
  model?: string;
  messages: ChatCompletionMessage[];
  temperature?: number;
  topP?: number;
  n?: number;
  stream?: boolean;
  stop?: string | string[];
  maxTokens?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  logitBias?: Record<string, number>;
  user?: string;
}

export interface ChatCompletionChoice {
  index: number;
  message: ChatCompletionMessage;
  finishReason: string;
}

export interface ChatCompletionUsage {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
}

export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChatCompletionChoice[];
  usage?: ChatCompletionUsage;
}

export interface ChatCompletionChunk {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    delta: Partial<ChatCompletionMessage>;
    finishReason?: string;
  }>;
}

export interface PlusConversationForm {
  id?: string | number;
  title?: string;
  type?: string;
  model?: string;
  systemPrompt?: string;
  context?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusConversationVO extends BasePlusVO {
  title: string;
  type: string;
  model: string;
  systemPrompt?: string;
  context?: string;
  messageCount: number;
  lastMessageAt?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusChatMessageForm {
  id?: string | number;
  conversationId: string | number;
  role: ChatMessageRole;
  content: string;
  name?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusChatMessageVO extends BasePlusVO {
  conversationId: string | number;
  role: ChatMessageRole;
  content: string;
  name?: string;
  tokenCount?: number;
  metadata?: Record<string, unknown>;
}

export interface PlusChatMessageContentForm {
  id?: string | number;
  messageId: string | number;
  type: string;
  content: string;
  metadata?: Record<string, unknown>;
}

export interface PlusChatMessageContentVO extends BasePlusVO {
  messageId: string | number;
  type: string;
  content: string;
  metadata?: Record<string, unknown>;
}

export interface ChatMessageQueryListForm extends QueryListForm {
  conversationId: string | number;
}

export interface ChatModule {
  create(form: ChatCompletionCreateForm, conversationId: string): Promise<ChatCompletion>;
  stop(conversationId: string): Promise<boolean>;
}

export interface ConversationModule {
  create(form: PlusConversationForm): Promise<PlusConversationVO>;
  update(form: PlusConversationForm): Promise<PlusConversationVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusConversationVO>;
  listAll(form?: QueryListForm): Promise<PlusConversationVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusConversationVO>>;
}

export interface ChatMessageModule {
  create(form: PlusChatMessageForm): Promise<PlusChatMessageVO>;
  update(form: PlusChatMessageForm): Promise<PlusChatMessageVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusChatMessageVO>;
  listByConversation(conversationId: string | number, page?: number, size?: number): Promise<Page<PlusChatMessageVO>>;
}

export interface ChatMessageContentModule {
  create(form: PlusChatMessageContentForm): Promise<PlusChatMessageContentVO>;
  update(form: PlusChatMessageContentForm): Promise<PlusChatMessageContentVO>;
  delete(id: string | number): Promise<boolean>;
  listByMessage(messageId: string | number): Promise<PlusChatMessageContentVO[]>;
}
