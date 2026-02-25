import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusAiModelInfoForm,
  PlusAiModelInfoVO,
  PlusAiModelPriceVO,
  ModelModule,
} from '../types/model';

export class ModelApi extends BaseApi implements ModelModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/model' });
  }

  async create(form: PlusAiModelInfoForm): Promise<PlusAiModelInfoVO> {
    return this.postRequest<PlusAiModelInfoVO>('', form);
  }

  async update(form: PlusAiModelInfoForm): Promise<PlusAiModelInfoVO> {
    return this.putRequest<PlusAiModelInfoVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusAiModelInfoVO> {
    return this.getRequest<PlusAiModelInfoVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusAiModelInfoVO[]> {
    return this.postRequest<PlusAiModelInfoVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusAiModelInfoVO>> {
    return this.paginate<PlusAiModelInfoVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async getByName(name: string): Promise<PlusAiModelInfoVO> {
    return this.getRequest<PlusAiModelInfoVO>(`/name/${name}`);
  }

  async getPrice(modelId: string | number): Promise<PlusAiModelPriceVO> {
    return this.getRequest<PlusAiModelPriceVO>(`/${modelId}/price`);
  }
}

export function createModelApi(client: HttpClient): ModelModule {
  return new ModelApi(client);
}
