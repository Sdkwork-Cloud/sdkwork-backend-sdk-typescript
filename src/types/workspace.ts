import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusWorkspaceForm {
  id?: string | number;
  name?: string;
  description?: string;
  type?: string;
  settings?: Record<string, unknown>;
}

export interface PlusWorkspaceVO extends BasePlusVO {
  name: string;
  description?: string;
  type: string;
  settings?: Record<string, unknown>;
  memberCount: number;
  projectCount: number;
}

export interface PlusProjectForm {
  id?: string | number;
  workspaceId?: string | number;
  name?: string;
  description?: string;
  type?: string;
  status?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusProjectVO extends BasePlusVO {
  workspaceId: string | number;
  name: string;
  description?: string;
  type: string;
  status: string;
  metadata?: Record<string, unknown>;
}

export interface WorkspaceModule {
  create(form: PlusWorkspaceForm): Promise<PlusWorkspaceVO>;
  update(form: PlusWorkspaceForm): Promise<PlusWorkspaceVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusWorkspaceVO>;
  listAll(form?: QueryListForm): Promise<PlusWorkspaceVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusWorkspaceVO>>;
}

export interface ProjectModule {
  create(form: PlusProjectForm): Promise<PlusProjectVO>;
  update(form: PlusProjectForm): Promise<PlusProjectVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusProjectVO>;
  listAll(form?: QueryListForm): Promise<PlusProjectVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusProjectVO>>;
}
