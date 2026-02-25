import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusVipLevelForm {
  id?: string | number;
  name?: string;
  level?: number;
  description?: string;
  price?: number;
  benefits?: string[];
  metadata?: Record<string, unknown>;
}

export interface PlusVipLevelVO extends BasePlusVO {
  name: string;
  level: number;
  description?: string;
  price: number;
  benefits: string[];
  metadata?: Record<string, unknown>;
}

export interface PlusVipUserForm {
  id?: string | number;
  userId?: string | number;
  levelId?: string | number;
  expireTime?: string;
  autoRenew?: boolean;
}

export interface PlusVipUserVO extends BasePlusVO {
  userId: string | number;
  levelId: string | number;
  levelName: string;
  expireTime?: string;
  autoRenew: boolean;
  status: string;
}

export interface PlusVipBenefitForm {
  id?: string | number;
  name?: string;
  code?: string;
  description?: string;
  type?: string;
  value?: number;
  metadata?: Record<string, unknown>;
}

export interface PlusVipBenefitVO extends BasePlusVO {
  name: string;
  code: string;
  description?: string;
  type: string;
  value: number;
  metadata?: Record<string, unknown>;
}

export interface PlusVipPackForm {
  id?: string | number;
  name?: string;
  points?: number;
  price?: number;
  bonus?: number;
  description?: string;
}

export interface PlusVipPackVO extends BasePlusVO {
  name: string;
  points: number;
  price: number;
  bonus: number;
  description?: string;
}

export interface PlusVipRechargeForm {
  packId: string | number;
  paymentMethod: string;
  couponId?: string | number;
}

export interface PlusVipRechargeVO {
  success: boolean;
  message: string;
  orderId?: string | number;
  payUrl?: string;
}

export interface VipModule {
  getVipLevels(): Promise<PlusVipLevelVO[]>;
  getVipUser(): Promise<PlusVipUserVO>;
  getBenefits(): Promise<PlusVipBenefitVO[]>;
  getPacks(): Promise<PlusVipPackVO[]>;
  recharge(form: PlusVipRechargeForm): Promise<PlusVipRechargeVO>;
}

export interface VipLevelModule {
  create(form: PlusVipLevelForm): Promise<PlusVipLevelVO>;
  update(form: PlusVipLevelForm): Promise<PlusVipLevelVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusVipLevelVO>;
  listAll(form?: QueryListForm): Promise<PlusVipLevelVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusVipLevelVO>>;
}

export interface VipUserModule {
  create(form: PlusVipUserForm): Promise<PlusVipUserVO>;
  update(form: PlusVipUserForm): Promise<PlusVipUserVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusVipUserVO>;
  listAll(form?: QueryListForm): Promise<PlusVipUserVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusVipUserVO>>;
}

export interface VipBenefitModule {
  create(form: PlusVipBenefitForm): Promise<PlusVipBenefitVO>;
  update(form: PlusVipBenefitForm): Promise<PlusVipBenefitVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusVipBenefitVO>;
  listAll(form?: QueryListForm): Promise<PlusVipBenefitVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusVipBenefitVO>>;
}

export interface VipPackModule {
  create(form: PlusVipPackForm): Promise<PlusVipPackVO>;
  update(form: PlusVipPackForm): Promise<PlusVipPackVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusVipPackVO>;
  listAll(form?: QueryListForm): Promise<PlusVipPackVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusVipPackVO>>;
}
