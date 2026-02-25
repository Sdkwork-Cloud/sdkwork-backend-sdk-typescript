import type { HttpClient } from '../http/client';
import type { PageResult, RequestOptions, Page } from '../types/core';

export interface BaseApiConfig {
  basePath: string;
}

export abstract class BaseApi {
  protected client: HttpClient;
  protected basePath: string;

  constructor(client: HttpClient, config?: BaseApiConfig) {
    this.client = client;
    this.basePath = config?.basePath ?? '';
  }

  protected buildPath(...parts: (string | number)[]): string {
    const pathParts = [this.basePath, ...parts.map(String)];
    return pathParts.filter(Boolean).join('/');
  }

  protected async getRequest<T>(path: string, params?: Record<string, string | number | boolean | undefined>, _options?: RequestOptions): Promise<T> {
    return this.client.get<T>(this.buildPath(path), params);
  }

  protected async postRequest<T>(path: string, body?: unknown, _params?: Record<string, string | number | boolean | undefined>): Promise<T> {
    return this.client.post<T>(this.buildPath(path), body);
  }

  protected async putRequest<T>(path: string, body?: unknown, _params?: Record<string, string | number | boolean | undefined>): Promise<T> {
    return this.client.put<T>(this.buildPath(path), body);
  }

  protected async deleteRequest<T>(path: string): Promise<T> {
    return this.client.delete<T>(this.buildPath(path));
  }

  protected async patchRequest<T>(path: string, body?: unknown): Promise<T> {
    return this.client.patch<T>(this.buildPath(path), body);
  }

  protected async list<T>(path: string, params?: Record<string, string | number | boolean | undefined>): Promise<T[]> {
    const result = await this.getRequest<PageResult<T>>(path, params);
    return result.content;
  }

  protected async paginate<T>(
    path: string,
    page: number = 0,
    size: number = 20,
    params?: Record<string, string | number | boolean | undefined>
  ): Promise<Page<T>> {
    return this.getRequest<Page<T>>(path, { page, size, ...params });
  }
}

export function createApiConfig(basePath: string): BaseApiConfig {
  return { basePath };
}
