import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusAiAgentForm,
  PlusAiAgentVO,
  AgentChatForm,
  AgentChatVO,
  AgentModule,
} from '../types/agent';

export class AgentApi extends BaseApi implements AgentModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/agent' });
  }

  async create(form: PlusAiAgentForm): Promise<PlusAiAgentVO> {
    return this.postRequest<PlusAiAgentVO>('', form);
  }

  async update(form: PlusAiAgentForm): Promise<PlusAiAgentVO> {
    return this.putRequest<PlusAiAgentVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiAgentVO> {
    return this.getRequest<PlusAiAgentVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiAgentVO[]> {
    return this.postRequest<PlusAiAgentVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiAgentVO>> {
    return this.paginate<PlusAiAgentVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async chat(form: AgentChatForm): Promise<AgentChatVO> {
    return this.postRequest<AgentChatVO>(`/${form.agentId}/chat`, form);
  }
}

export function createAgentApi(client: HttpClient): AgentModule {
  return new AgentApi(client);
}
