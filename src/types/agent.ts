import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusAiAgentForm {
  id?: string | number;
  name?: string;
  description?: string;
  type?: string;
  model?: string;
  systemPrompt?: string;
  tools?: string[];
  knowledgeBaseIds?: (string | number)[];
  metadata?: Record<string, unknown>;
}

export interface PlusAiAgentVO extends BasePlusVO {
  name: string;
  description?: string;
  type: string;
  model: string;
  systemPrompt?: string;
  tools: string[];
  knowledgeBaseIds: (string | number)[];
  metadata?: Record<string, unknown>;
}

export interface AgentChatForm {
  agentId: string | number;
  message: string;
  conversationId?: string | number;
  stream?: boolean;
}

export interface AgentChatVO {
  response: string;
  conversationId: string | number;
  messageId: string | number;
  toolCalls?: Array<{
    tool: string;
    args: Record<string, unknown>;
    result?: unknown;
  }>;
}

export interface AgentModule {
  create(form: PlusAiAgentForm): Promise<PlusAiAgentVO>;
  update(form: PlusAiAgentForm): Promise<PlusAiAgentVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiAgentVO>;
  listAll(form?: QueryListForm): Promise<PlusAiAgentVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiAgentVO>>;
  chat(form: AgentChatForm): Promise<AgentChatVO>;
}
