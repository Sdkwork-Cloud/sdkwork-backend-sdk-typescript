import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusWorkspaceForm,
  PlusWorkspaceVO,
  PlusProjectForm,
  PlusProjectVO,
  WorkspaceModule,
  ProjectModule,
} from '../types/workspace';

export class WorkspaceApi extends BaseApi implements WorkspaceModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/workspace' });
  }

  async create(form: PlusWorkspaceForm): Promise<PlusWorkspaceVO> {
    return this.postRequest<PlusWorkspaceVO>('', form);
  }

  async update(form: PlusWorkspaceForm): Promise<PlusWorkspaceVO> {
    return this.putRequest<PlusWorkspaceVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusWorkspaceVO> {
    return this.getRequest<PlusWorkspaceVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusWorkspaceVO[]> {
    return this.postRequest<PlusWorkspaceVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusWorkspaceVO>> {
    return this.paginate<PlusWorkspaceVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class ProjectApi extends BaseApi implements ProjectModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/project' });
  }

  async create(form: PlusProjectForm): Promise<PlusProjectVO> {
    return this.postRequest<PlusProjectVO>('', form);
  }

  async update(form: PlusProjectForm): Promise<PlusProjectVO> {
    return this.putRequest<PlusProjectVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusProjectVO> {
    return this.getRequest<PlusProjectVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusProjectVO[]> {
    return this.postRequest<PlusProjectVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusProjectVO>> {
    return this.paginate<PlusProjectVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export function createWorkspaceApi(client: HttpClient): WorkspaceModule {
  return new WorkspaceApi(client);
}

export function createProjectApi(client: HttpClient): ProjectModule {
  return new ProjectApi(client);
}
