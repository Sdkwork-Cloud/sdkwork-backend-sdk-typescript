import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusAiPromptForm {
  id?: string | number;
  name?: string;
  content?: string;
  type?: string;
  bizType?: string;
  tags?: string[];
  variables?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export interface PlusAiPromptVO extends BasePlusVO {
  name: string;
  content: string;
  type: string;
  bizType?: string;
  tags: string[];
  variables?: Record<string, string>;
  metadata?: Record<string, unknown>;
}

export interface PromptRenderForm {
  promptId: string | number;
  variables: Record<string, unknown>;
}

export interface PromptRenderVO {
  content: string;
}

export interface PromptModule {
  create(form: PlusAiPromptForm): Promise<PlusAiPromptVO>;
  update(form: PlusAiPromptForm): Promise<PlusAiPromptVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiPromptVO>;
  listAll(form?: QueryListForm): Promise<PlusAiPromptVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiPromptVO>>;
  render(form: PromptRenderForm): Promise<PromptRenderVO>;
}
