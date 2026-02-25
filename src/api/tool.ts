import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusAiToolForm,
  PlusAiToolVO,
  ToolExecuteForm,
  ToolExecuteVO,
  ToolModule,
} from '../types/tool';

export class ToolApi extends BaseApi implements ToolModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/tool' });
  }

  async create(form: PlusAiToolForm): Promise<PlusAiToolVO> {
    return this.postRequest<PlusAiToolVO>('', form);
  }

  async update(form: PlusAiToolForm): Promise<PlusAiToolVO> {
    return this.putRequest<PlusAiToolVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiToolVO> {
    return this.getRequest<PlusAiToolVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiToolVO[]> {
    return this.postRequest<PlusAiToolVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiToolVO>> {
    return this.paginate<PlusAiToolVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async execute(form: ToolExecuteForm): Promise<ToolExecuteVO> {
    return this.postRequest<ToolExecuteVO>(`/${form.toolId}/execute`, form);
  }
}

export function createToolApi(client: HttpClient): ToolModule {
  return new ToolApi(client);
}
