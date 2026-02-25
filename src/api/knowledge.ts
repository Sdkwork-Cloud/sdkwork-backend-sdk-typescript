import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusKnowledgeBaseForm,
  PlusKnowledgeBaseVO,
  KnowledgeBaseFileForm,
  KnowledgeBaseFileVO,
  KnowledgeSearchForm,
  KnowledgeSearchResultVO,
  KnowledgeBaseModule,
} from '../types/knowledge';

export class KnowledgeBaseApi extends BaseApi implements KnowledgeBaseModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/knowledge' });
  }

  async create(form: PlusKnowledgeBaseForm): Promise<PlusKnowledgeBaseVO> {
    return this.postRequest<PlusKnowledgeBaseVO>('', form);
  }

  async update(form: PlusKnowledgeBaseForm): Promise<PlusKnowledgeBaseVO> {
    return this.putRequest<PlusKnowledgeBaseVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusKnowledgeBaseVO> {
    return this.getRequest<PlusKnowledgeBaseVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusKnowledgeBaseVO[]> {
    return this.postRequest<PlusKnowledgeBaseVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusKnowledgeBaseVO>> {
    return this.paginate<PlusKnowledgeBaseVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async uploadFile(form: KnowledgeBaseFileForm): Promise<KnowledgeBaseFileVO> {
    const formData = new FormData();
    formData.append('knowledgeBaseId', String(form.knowledgeBaseId));
    if (form.file) {
      formData.append('file', form.file);
    }
    if (form.fileName) {
      formData.append('fileName', form.fileName);
    }
    return this.client.post<KnowledgeBaseFileVO>(this.buildPath('/files/upload'), formData);
  }

  async deleteFile(fileId: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/files/${fileId}`);
  }

  async search(form: KnowledgeSearchForm): Promise<KnowledgeSearchResultVO[]> {
    return this.postRequest<KnowledgeSearchResultVO[]>('/search', form);
  }
}

export function createKnowledgeBaseApi(client: HttpClient): KnowledgeBaseModule {
  return new KnowledgeBaseApi(client);
}
