import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusFileForm {
  id?: string | number;
  name?: string;
  path?: string;
  size?: number;
  mimeType?: string;
  storageType?: string;
  url?: string;
  metadata?: Record<string, unknown>;
}

export interface PlusFileVO extends BasePlusVO {
  name: string;
  path: string;
  size: number;
  mimeType: string;
  storageType: string;
  url: string;
  metadata?: Record<string, unknown>;
}

export interface PlusDiskForm {
  id?: string | number;
  name?: string;
  type?: string;
  capacity?: number;
  usedSpace?: number;
}

export interface PlusDiskVO extends BasePlusVO {
  name: string;
  type: string;
  capacity: number;
  usedSpace: number;
}

export interface PlusOssBucketForm {
  id?: string | number;
  name?: string;
  provider?: string;
  endpoint?: string;
  region?: string;
  accessKeyId?: string;
  accessKeySecret?: string;
}

export interface PlusOssBucketVO extends BasePlusVO {
  name: string;
  provider: string;
  endpoint: string;
  region: string;
}

export interface PlusUploadForm {
  file?: File | Blob;
  fileName?: string;
  path?: string;
  contentType?: string;
  metadata?: Record<string, unknown>;
}

export interface UploadResultVO {
  fileId: string | number;
  name: string;
  path: string;
  url: string;
  size: number;
  mimeType: string;
}

export interface PresignedUrlForm {
  fileName: string;
  path?: string;
  expiresIn?: number;
  contentType?: string;
}

export interface PresignedUrlVO {
  url: string;
  expiresAt: string;
  fileId?: string | number;
}

export interface FileModule {
  create(form: PlusFileForm): Promise<PlusFileVO>;
  update(form: PlusFileForm): Promise<PlusFileVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusFileVO>;
  listAll(form?: QueryListForm): Promise<PlusFileVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusFileVO>>;
  upload(form: PlusUploadForm): Promise<UploadResultVO>;
  getPresignedUrl(form: PresignedUrlForm): Promise<PresignedUrlVO>;
  download(id: string | number): Promise<Blob>;
}

export interface DiskModule {
  create(form: PlusDiskForm): Promise<PlusDiskVO>;
  update(form: PlusDiskForm): Promise<PlusDiskVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusDiskVO>;
  listAll(form?: QueryListForm): Promise<PlusDiskVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusDiskVO>>;
}

export interface OssBucketModule {
  create(form: PlusOssBucketForm): Promise<PlusOssBucketVO>;
  update(form: PlusOssBucketForm): Promise<PlusOssBucketVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusOssBucketVO>;
  listAll(form?: QueryListForm): Promise<PlusOssBucketVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusOssBucketVO>>;
}
