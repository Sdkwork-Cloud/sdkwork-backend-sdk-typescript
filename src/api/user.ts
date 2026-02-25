import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusUserForm,
  PlusUserVO,
  PlusUserProfileVO,
  UserModule,
  PlusUserAddressForm,
  PlusUserAddressVO,
  UserAddressModule,
} from '../types/user';

export class UserApi extends BaseApi implements UserModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/user' });
  }

  async create(form: PlusUserForm): Promise<PlusUserVO> {
    return this.postRequest<PlusUserVO>('', form);
  }

  async update(form: PlusUserForm): Promise<PlusUserVO> {
    return this.putRequest<PlusUserVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusUserVO> {
    return this.getRequest<PlusUserVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusUserVO[]> {
    return this.postRequest<PlusUserVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusUserVO>> {
    return this.paginate<PlusUserVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async getProfile(): Promise<PlusUserProfileVO> {
    return this.getRequest<PlusUserProfileVO>('/profile');
  }
}

export class UserAddressApi extends BaseApi implements UserAddressModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/user/address' });
  }

  async create(form: PlusUserAddressForm): Promise<PlusUserAddressVO> {
    return this.postRequest<PlusUserAddressVO>('', form);
  }

  async update(form: PlusUserAddressForm): Promise<PlusUserAddressVO> {
    return this.putRequest<PlusUserAddressVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusUserAddressVO> {
    return this.getRequest<PlusUserAddressVO>(`/${id}`);
  }

  async listAll(): Promise<PlusUserAddressVO[]> {
    return this.getRequest<PlusUserAddressVO[]>('/list/all');
  }

  async setDefault(id: string | number): Promise<boolean> {
    return this.postRequest<boolean>(`/${id}/default`);
  }
}

export function createUserApi(client: HttpClient): UserModule {
  return new UserApi(client);
}

export function createUserAddressApi(client: HttpClient): UserAddressModule {
  return new UserAddressApi(client);
}
