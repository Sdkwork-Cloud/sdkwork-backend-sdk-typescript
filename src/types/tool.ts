import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusAiToolForm {
  id?: string | number;
  name?: string;
  description?: string;
  type?: string;
  schema?: Record<string, unknown>;
  executor?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusAiToolVO extends BasePlusVO {
  name: string;
  description?: string;
  type: string;
  schema?: Record<string, unknown>;
  executor: string;
  metadata?: Record<string, unknown>;
}

export interface ToolExecuteForm {
  toolId: string | number;
  args: Record<string, unknown>;
}

export interface ToolExecuteVO {
  success: boolean;
  result?: unknown;
  error?: string;
}

export interface ToolModule {
  create(form: PlusAiToolForm): Promise<PlusAiToolVO>;
  update(form: PlusAiToolForm): Promise<PlusAiToolVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusAiToolVO>;
  listAll(form?: QueryListForm): Promise<PlusAiToolVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusAiToolVO>>;
  execute(form: ToolExecuteForm): Promise<ToolExecuteVO>;
}
