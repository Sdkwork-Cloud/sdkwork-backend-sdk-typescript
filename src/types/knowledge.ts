import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusKnowledgeBaseForm {
  id?: string | number;
  name?: string;
  description?: string;
  type?: string;
  embeddingModel?: string;
  chunkSize?: number;
  chunkOverlap?: number;
  metadata?: Record<string, unknown>;
}

export interface PlusKnowledgeBaseVO extends BasePlusVO {
  name: string;
  description?: string;
  type: string;
  embeddingModel: string;
  chunkSize: number;
  chunkOverlap: number;
  documentCount: number;
  totalChunks: number;
  metadata?: Record<string, unknown>;
}

export interface KnowledgeBaseFileForm {
  knowledgeBaseId: string | number;
  file: File | Blob;
  fileName?: string;
}

export interface KnowledgeBaseFileVO extends BasePlusVO {
  knowledgeBaseId: string | number;
  fileName: string;
  fileSize: number;
  status: string;
  chunkCount: number;
  processedAt?: string;
}

export interface KnowledgeSearchForm {
  knowledgeBaseId: string | number;
  query: string;
  topK?: number;
  threshold?: number;
}

export interface KnowledgeSearchResultVO {
  content: string;
  score: number;
  metadata?: Record<string, unknown>;
  source?: string;
}

export interface KnowledgeBaseModule {
  create(form: PlusKnowledgeBaseForm): Promise<PlusKnowledgeBaseVO>;
  update(form: PlusKnowledgeBaseForm): Promise<PlusKnowledgeBaseVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusKnowledgeBaseVO>;
  listAll(form?: QueryListForm): Promise<PlusKnowledgeBaseVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusKnowledgeBaseVO>>;
  uploadFile(form: KnowledgeBaseFileForm): Promise<KnowledgeBaseFileVO>;
  deleteFile(fileId: string | number): Promise<boolean>;
  search(form: KnowledgeSearchForm): Promise<KnowledgeSearchResultVO[]>;
}
