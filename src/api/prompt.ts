import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusAiPromptForm,
  PlusAiPromptVO,
  PromptRenderForm,
  PromptRenderVO,
  PromptModule,
} from '../types/prompt';

export class PromptApi extends BaseApi implements PromptModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/prompt' });
  }

  async create(form: PlusAiPromptForm): Promise<PlusAiPromptVO> {
    return this.postRequest<PlusAiPromptVO>('', form);
  }

  async update(form: PlusAiPromptForm): Promise<PlusAiPromptVO> {
    return this.putRequest<PlusAiPromptVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiPromptVO> {
    return this.getRequest<PlusAiPromptVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiPromptVO[]> {
    return this.postRequest<PlusAiPromptVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiPromptVO>> {
    return this.paginate<PlusAiPromptVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async render(form: PromptRenderForm): Promise<PromptRenderVO> {
    return this.postRequest<PromptRenderVO>(`/${form.promptId}/render`, form);
  }
}

export function createPromptApi(client: HttpClient): PromptModule {
  return new PromptApi(client);
}
