import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusFileForm,
  PlusFileVO,
  PlusDiskForm,
  PlusDiskVO,
  PlusOssBucketForm,
  PlusOssBucketVO,
  PlusUploadForm,
  UploadResultVO,
  PresignedUrlForm,
  PresignedUrlVO,
  FileModule,
  DiskModule,
  OssBucketModule,
} from '../types/file';

export class FileApi extends BaseApi implements FileModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/files' });
  }

  async create(form: PlusFileForm): Promise<PlusFileVO> {
    return this.postRequest<PlusFileVO>('', form);
  }

  async update(form: PlusFileForm): Promise<PlusFileVO> {
    return this.putRequest<PlusFileVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusFileVO> {
    return this.getRequest<PlusFileVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusFileVO[]> {
    return this.postRequest<PlusFileVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusFileVO>> {
    return this.paginate<PlusFileVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async upload(form: PlusUploadForm): Promise<UploadResultVO> {
    const formData = new FormData();
    if (form.file) {
      formData.append('file', form.file);
    }
    if (form.fileName) {
      formData.append('fileName', form.fileName);
    }
    if (form.path) {
      formData.append('path', form.path);
    }
    if (form.contentType) {
      formData.append('contentType', form.contentType);
    }
    return this.client.post<UploadResultVO>(this.buildPath('/upload'), formData);
  }

  async getPresignedUrl(form: PresignedUrlForm): Promise<PresignedUrlVO> {
    return this.postRequest<PresignedUrlVO>('/presigned-url', form);
  }

  async download(id: string | number): Promise<Blob> {
    const response = await fetch(`${this.client.getConfig().baseUrl}/v3/api/files/${id}/download`, {
      headers: {
        'Authorization': `Bearer ${this.client.getConfig().authToken}`,
      },
    });
    return response.blob();
  }
}

export class DiskApi extends BaseApi implements DiskModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/files/disk' });
  }

  async create(form: PlusDiskForm): Promise<PlusDiskVO> {
    return this.postRequest<PlusDiskVO>('', form);
  }

  async update(form: PlusDiskForm): Promise<PlusDiskVO> {
    return this.putRequest<PlusDiskVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusDiskVO> {
    return this.getRequest<PlusDiskVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusDiskVO[]> {
    return this.postRequest<PlusDiskVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusDiskVO>> {
    return this.paginate<PlusDiskVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class OssBucketApi extends BaseApi implements OssBucketModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/files/oss' });
  }

  async create(form: PlusOssBucketForm): Promise<PlusOssBucketVO> {
    return this.postRequest<PlusOssBucketVO>('', form);
  }

  async update(form: PlusOssBucketForm): Promise<PlusOssBucketVO> {
    return this.putRequest<PlusOssBucketVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusOssBucketVO> {
    return this.getRequest<PlusOssBucketVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusOssBucketVO[]> {
    return this.postRequest<PlusOssBucketVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusOssBucketVO>> {
    return this.paginate<PlusOssBucketVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export function createFileApi(client: HttpClient): FileModule {
  return new FileApi(client);
}

export function createDiskApi(client: HttpClient): DiskModule {
  return new DiskApi(client);
}

export function createOssBucketApi(client: HttpClient): OssBucketModule {
  return new OssBucketApi(client);
}
