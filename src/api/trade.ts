import { BaseApi } from './base';
import type { HttpClient } from '../http/client';
import type { Page } from '../types/core';
import type { QueryListForm } from '../types/common';
import type {
  PlusOrderForm,
  PlusOrderVO,
  CreateGoodsOrderForm,
  CreateVirtualOrderForm,
  CreateVipOrderForm,
  CreatePointsOrderForm,
  CreateImGroupOrderForm,
  GoodsOrderVO,
  VirtualOrderVO,
  VipOrderVO,
  PointsOrderVO,
  ImGroupOrderVO,
  OrderCancelVO,
  OrderConfirmVO,
  OrderShipVO,
  OrderCompleteVO,
  OrderCloseVO,
  PlusPaymentForm,
  PlusPaymentVO,
  PlusPaymentCancelForm,
  PlusPaymentStatusQueryForm,
  PlusRefundForm,
  PlusRefundVO,
  PlusShoppingCartVO,
  PlusShoppingCartItemForm,
  PlusShoppingCartItemVO,
  PlusShoppingCartItemListForm,
  OrderModule,
  PaymentModule,
  RefundModule,
  ShoppingCartModule,
} from '../types/trade';

export class OrderApi extends BaseApi implements OrderModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/trade/order' });
  }

  async create(form: PlusOrderForm): Promise<PlusOrderVO> {
    return this.postRequest<PlusOrderVO>('', form);
  }

  async update(form: PlusOrderForm): Promise<PlusOrderVO> {
    return this.putRequest<PlusOrderVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusOrderVO> {
    return this.getRequest<PlusOrderVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusOrderVO[]> {
    return this.postRequest<PlusOrderVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusOrderVO>> {
    return this.paginate<PlusOrderVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async createGoodsOrder(form: CreateGoodsOrderForm): Promise<GoodsOrderVO> {
    return this.postRequest<GoodsOrderVO>('/goods', form);
  }

  async createVirtualOrder(form: CreateVirtualOrderForm): Promise<VirtualOrderVO> {
    return this.postRequest<VirtualOrderVO>('/virtual', form);
  }

  async createVipOrder(form: CreateVipOrderForm): Promise<VipOrderVO> {
    return this.postRequest<VipOrderVO>('/vip', form);
  }

  async createPointsOrder(form: CreatePointsOrderForm): Promise<PointsOrderVO> {
    return this.postRequest<PointsOrderVO>('/points', form);
  }

  async createImGroupOrder(form: CreateImGroupOrderForm): Promise<ImGroupOrderVO> {
    return this.postRequest<ImGroupOrderVO>('/im_group', form);
  }

  async cancelOrder(id: string | number): Promise<OrderCancelVO> {
    return this.postRequest<OrderCancelVO>(`/${id}/cancel`);
  }

  async confirmOrder(id: string | number): Promise<OrderConfirmVO> {
    return this.postRequest<OrderConfirmVO>(`/${id}/confirm`);
  }

  async shipOrder(id: string | number, shippingInfo?: string): Promise<OrderShipVO> {
    return this.postRequest<OrderShipVO>(`/${id}/ship`, shippingInfo);
  }

  async completeOrder(id: string | number): Promise<OrderCompleteVO> {
    return this.postRequest<OrderCompleteVO>(`/${id}/complete`);
  }

  async closeOrder(id: string | number): Promise<OrderCloseVO> {
    return this.postRequest<OrderCloseVO>(`/${id}/close`);
  }
}

export class PaymentApi extends BaseApi implements PaymentModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/trade/payment' });
  }

  async create(form: PlusPaymentForm): Promise<PlusPaymentVO> {
    return this.postRequest<PlusPaymentVO>('', form);
  }

  async update(form: PlusPaymentForm): Promise<PlusPaymentVO> {
    return this.putRequest<PlusPaymentVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusPaymentVO> {
    return this.getRequest<PlusPaymentVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusPaymentVO[]> {
    return this.postRequest<PlusPaymentVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusPaymentVO>> {
    return this.paginate<PlusPaymentVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }

  async cancel(form: PlusPaymentCancelForm): Promise<boolean> {
    return this.postRequest<boolean>('/cancel', form);
  }

  async queryStatus(form: PlusPaymentStatusQueryForm): Promise<PlusPaymentVO> {
    return this.postRequest<PlusPaymentVO>('/status', form);
  }
}

export class RefundApi extends BaseApi implements RefundModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/trade/refund' });
  }

  async create(form: PlusRefundForm): Promise<PlusRefundVO> {
    return this.postRequest<PlusRefundVO>('', form);
  }

  async update(form: PlusRefundForm): Promise<PlusRefundVO> {
    return this.putRequest<PlusRefundVO>('', form);
  }

  async delete(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/${id}`);
  }

  async getById(id: string | number): Promise<PlusRefundVO> {
    return this.getRequest<PlusRefundVO>(`/${id}`);
  }

  async listAll(form?: QueryListForm): Promise<PlusRefundVO[]> {
    return this.postRequest<PlusRefundVO[]>('/list/all', form);
  }

  async listByPage(form: QueryListForm, page: number = 0, size: number = 20): Promise<Page<PlusRefundVO>> {
    return this.paginate<PlusRefundVO>('/list', page, size, form as unknown as Record<string, string | number | boolean | undefined>);
  }
}

export class ShoppingCartApi extends BaseApi implements ShoppingCartModule {
  constructor(client: HttpClient) {
    super(client, { basePath: '/v3/api/trade/cart' });
  }

  async get(): Promise<PlusShoppingCartVO> {
    return this.getRequest<PlusShoppingCartVO>('');
  }

  async addItem(form: PlusShoppingCartItemForm): Promise<PlusShoppingCartItemVO> {
    return this.postRequest<PlusShoppingCartItemVO>('/item', form);
  }

  async updateItem(form: PlusShoppingCartItemForm): Promise<PlusShoppingCartItemVO> {
    return this.putRequest<PlusShoppingCartItemVO>('/item', form);
  }

  async removeItem(id: string | number): Promise<boolean> {
    return this.deleteRequest<boolean>(`/item/${id}`);
  }

  async addItems(form: PlusShoppingCartItemListForm): Promise<PlusShoppingCartItemVO[]> {
    return this.postRequest<PlusShoppingCartItemVO[]>('/items', form);
  }

  async clear(): Promise<boolean> {
    return this.deleteRequest<boolean>('');
  }

  async selectAll(selected: boolean): Promise<boolean> {
    return this.postRequest<boolean>('/select-all', { selected });
  }

  async selectItems(itemIds: (string | number)[], selected: boolean): Promise<boolean> {
    return this.postRequest<boolean>('/select-items', { itemIds, selected });
  }
}

export function createOrderApi(client: HttpClient): OrderModule {
  return new OrderApi(client);
}

export function createPaymentApi(client: HttpClient): PaymentModule {
  return new PaymentApi(client);
}

export function createRefundApi(client: HttpClient): RefundModule {
  return new RefundApi(client);
}

export function createShoppingCartApi(client: HttpClient): ShoppingCartModule {
  return new ShoppingCartApi(client);
}
