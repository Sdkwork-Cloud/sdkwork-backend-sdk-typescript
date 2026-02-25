import type { BasePlusVO, Page, QueryListForm } from './common';

export interface PlusUserForm {
  id?: string | number;
  username: string;
  password?: string;
  salt?: string;
  email?: string;
  phone?: string;
  nickname?: string;
  avatar?: string;
  status?: string;
}

export interface PlusUserVO extends BasePlusVO {
  username: string;
  email?: string;
  phone?: string;
  nickname?: string;
  avatar?: string;
  status?: string;
  lastLoginTime?: string;
  lastLoginIp?: string;
}

export interface PlusUserProfileVO extends BasePlusVO {
  username: string;
  email?: string;
  phone?: string;
  nickname?: string;
  avatar?: string;
  status?: string;
  lastLoginTime?: string;
  lastLoginIp?: string;
  vipLevel?: number;
  vipExpireTime?: string;
  points?: number;
}

export interface PlusUserAddressForm {
  id?: string | number;
  userId?: string | number;
  receiverName: string;
  receiverPhone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  postalCode?: string;
  isDefault?: boolean;
  tag?: string;
}

export interface PlusUserAddressVO extends BasePlusVO {
  userId: string | number;
  receiverName: string;
  receiverPhone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  postalCode?: string;
  isDefault: boolean;
  tag?: string;
}

export interface PlusUserOAuthAccountForm {
  id?: string | number;
  userId?: string | number;
  provider: string;
  providerUserId: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: string;
}

export interface PlusUserOAuthAccountVO extends BasePlusVO {
  userId: string | number;
  provider: string;
  providerUserId: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: string;
}

export interface UserModule {
  create(form: PlusUserForm): Promise<PlusUserVO>;
  update(form: PlusUserForm): Promise<PlusUserVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusUserVO>;
  listAll(form?: QueryListForm): Promise<PlusUserVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusUserVO>>;
  getProfile(): Promise<PlusUserProfileVO>;
}

export interface UserAddressModule {
  create(form: PlusUserAddressForm): Promise<PlusUserAddressVO>;
  update(form: PlusUserAddressForm): Promise<PlusUserAddressVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusUserAddressVO>;
  listAll(): Promise<PlusUserAddressVO[]>;
  setDefault(id: string | number): Promise<boolean>;
}

export interface UserOAuthModule {
  listAll(): Promise<PlusUserOAuthAccountVO[]>;
  bind(form: PlusUserOAuthAccountForm): Promise<PlusUserOAuthAccountVO>;
  unbind(id: string | number): Promise<boolean>;
}
