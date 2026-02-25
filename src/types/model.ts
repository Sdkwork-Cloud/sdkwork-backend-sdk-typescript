import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusAiModelInfoForm {
  id?: string | number;
  name?: string;
  displayName?: string;
  provider?: string;
  type?: string;
  description?: string;
  contextWindow?: number;
  maxOutputTokens?: number;
  status?: string;
  capabilities?: string[];
  metadata?: Record<string, unknown>;
}

export interface PlusAiModelInfoVO extends BasePlusVO {
  name: string;
  displayName: string;
  provider: string;
  type: string;
  description?: string;
  contextWindow: number;
  maxOutputTokens: number;
  status: string;
  capabilities: string[];
  metadata?: Record<string, unknown>;
}

export interface PlusAiModelPriceForm {
  id?: string | number;
  modelId?: string | number;
  inputPrice?: number;
  outputPrice?: number;
  unit?: string;
  currency?: string;
}

export interface PlusAiModelPriceVO extends BasePlusVO {
  modelId: string | number;
  inputPrice: number;
  outputPrice: number;
  unit: string;
  currency: string;
}

export interface ModelModule {
  create(form: PlusAiModelInfoForm): Promise<PlusAiModelInfoVO>;
  update(form: PlusAiModelInfoForm): Promise<PlusAiModelInfoVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiModelInfoVO>;
  listAll(form?: QueryListForm): Promise<PlusAiModelInfoVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiModelInfoVO>>;
  getByName(name: string): Promise<PlusAiModelInfoVO>;
  getPrice(modelId: string | number): Promise<PlusAiModelPriceVO>;
}
