import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusVipLevelForm,
  PlusVipLevelVO,
  PlusVipUserForm,
  PlusVipUserVO,
  PlusVipBenefitForm,
  PlusVipBenefitVO,
  PlusVipPackForm,
  PlusVipPackVO,
  PlusVipRechargeForm,
  PlusVipRechargeVO,
  VipModule,
  VipLevelModule,
  VipUserModule,
  VipBenefitModule,
  VipPackModule,
} from '../types/vip';

export class VipApi extends BaseApi implements VipModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/vip' });
  }

  async getVipLevels(): Promise<PlusVipLevelVO[]> {
    return this.getRequest<PlusVipLevelVO[]>('/levels');
  }

  async getVipUser(): Promise<PlusVipUserVO> {
    return this.getRequest<PlusVipUserVO>('/user');
  }

  async getBenefits(): Promise<PlusVipBenefitVO[]> {
    return this.getRequest<PlusVipBenefitVO[]>('/benefits');
  }

  async getPacks(): Promise<PlusVipPackVO[]> {
    return this.getRequest<PlusVipPackVO[]>('/packs');
  }

  async recharge(form: PlusVipRechargeForm): Promise<PlusVipRechargeVO> {
    return this.postRequest<PlusVipRechargeVO>('/recharge', form);
  }
}

export class VipLevelApi extends BaseApi implements VipLevelModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/vip/level' });
  }

  async create(form: PlusVipLevelForm): Promise<PlusVipLevelVO> {
    return this.postRequest<PlusVipLevelVO>('', form);
  }

  async update(form: PlusVipLevelForm): Promise<PlusVipLevelVO> {
    return this.putRequest<PlusVipLevelVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusVipLevelVO> {
    return this.getRequest<PlusVipLevelVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusVipLevelVO[]> {
    return this.postRequest<PlusVipLevelVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusVipLevelVO>> {
    return this.paginate<PlusVipLevelVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class VipUserApi extends BaseApi implements VipUserModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/vip/user' });
  }

  async create(form: PlusVipUserForm): Promise<PlusVipUserVO> {
    return this.postRequest<PlusVipUserVO>('', form);
  }

  async update(form: PlusVipUserForm): Promise<PlusVipUserVO> {
    return this.putRequest<PlusVipUserVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusVipUserVO> {
    return this.getRequest<PlusVipUserVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusVipUserVO[]> {
    return this.postRequest<PlusVipUserVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusVipUserVO>> {
    return this.paginate<PlusVipUserVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class VipBenefitApi extends BaseApi implements VipBenefitModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/vip/benefit' });
  }

  async create(form: PlusVipBenefitForm): Promise<PlusVipBenefitVO> {
    return this.postRequest<PlusVipBenefitVO>('', form);
  }

  async update(form: PlusVipBenefitForm): Promise<PlusVipBenefitVO> {
    return this.putRequest<PlusVipBenefitVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusVipBenefitVO> {
    return this.getRequest<PlusVipBenefitVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusVipBenefitVO[]> {
    return this.postRequest<PlusVipBenefitVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusVipBenefitVO>> {
    return this.paginate<PlusVipBenefitVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class VipPackApi extends BaseApi implements VipPackModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/vip/pack' });
  }

  async create(form: PlusVipPackForm): Promise<PlusVipPackVO> {
    return this.postRequest<PlusVipPackVO>('', form);
  }

  async update(form: PlusVipPackForm): Promise<PlusVipPackVO> {
    return this.putRequest<PlusVipPackVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusVipPackVO> {
    return this.getRequest<PlusVipPackVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusVipPackVO[]> {
    return this.postRequest<PlusVipPackVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusVipPackVO>> {
    return this.paginate<PlusVipPackVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export function createVipApi(client: HttpClient): VipModule {
  return new VipApi(client);
}

export function createVipLevelApi(client: HttpClient): VipLevelModule {
  return new VipLevelApi(client);
}

export function createVipUserApi(client: HttpClient): VipUserModule {
  return new VipUserApi(client);
}

export function createVipBenefitApi(client: HttpClient): VipBenefitModule {
  return new VipBenefitApi(client);
}

export function createVipPackApi(client: HttpClient): VipPackModule {
  return new VipPackApi(client);
}
