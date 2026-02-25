import type { BasePlusVO, Page, QueryListForm } from './common';

export type OrderType = 'goods' | 'virtual' | 'vip' | 'points' | 'im_group';
export type OrderStatus = 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled' | 'closed' | 'refunding' | 'refunded';

export interface PlusOrderForm {
  id?: string | number;
  orderType?: OrderType;
  userId?: string | number;
  orderSn?: string;
  transactionId?: string;
  outTradeNo?: string;
  totalAmount?: number;
  paidAmount?: number;
  paidPointsAmount?: number;
  status?: OrderStatus;
  payTime?: string;
  expireTime?: string;
  contentType?: string;
  contentId?: string | number;
}

export interface PlusOrderVO extends BasePlusVO {
  orderType: OrderType;
  userId: string | number;
  orderSn: string;
  transactionId?: string;
  outTradeNo?: string;
  totalAmount: number;
  paidAmount: number;
  paidPointsAmount: number;
  status: OrderStatus;
  payTime?: string;
  expireTime?: string;
  contentType?: string;
  contentId?: string | number;
}

export interface CreateGoodsOrderForm {
  productId: string | number;
  skuId?: string | number;
  quantity: number;
  addressId?: string | number;
  couponId?: string | number;
  remark?: string;
}

export interface CreateVirtualOrderForm {
  productId: string | number;
  quantity: number;
  couponId?: string | number;
  remark?: string;
}

export interface CreateVipOrderForm {
  vipLevelId: string | number;
  duration: number;
  durationUnit: 'day' | 'month' | 'year';
  couponId?: string | number;
}

export interface CreatePointsOrderForm {
  points: number;
  paymentMethod: string;
  couponId?: string | number;
}

export interface CreateImGroupOrderForm {
  groupId: string | number;
  couponId?: string | number;
}

export interface GoodsOrderVO {
  success: boolean;
  message: string;
  orderId?: string | number;
  orderSn?: string;
  totalAmount?: number;
  payUrl?: string;
}

export interface VirtualOrderVO {
  success: boolean;
  message: string;
  orderId?: string | number;
  orderSn?: string;
  totalAmount?: number;
  payUrl?: string;
}

export interface VipOrderVO {
  success: boolean;
  message: string;
  orderId?: string | number;
  orderSn?: string;
  totalAmount?: number;
  payUrl?: string;
}

export interface PointsOrderVO {
  success: boolean;
  message: string;
  orderId?: string | number;
  orderSn?: string;
  totalAmount?: number;
  payUrl?: string;
}

export interface ImGroupOrderVO {
  success: boolean;
  message: string;
  orderId?: string | number;
  orderSn?: string;
  totalAmount?: number;
  payUrl?: string;
}

export interface OrderCancelVO {
  success: boolean;
  message: string;
  orderId: string | number;
  cancelReason?: string;
  refundable: boolean;
  refundAmount?: string;
}

export interface OrderConfirmVO {
  success: boolean;
  message: string;
  orderId: string | number;
}

export interface OrderShipVO {
  success: boolean;
  message: string;
  orderId: string | number;
  shippingCompany?: string;
  trackingNumber?: string;
}

export interface OrderCompleteVO {
  success: boolean;
  message: string;
  orderId: string | number;
  reviewed: boolean;
  pointsEarned: number;
}

export interface OrderCloseVO {
  success: boolean;
  message: string;
  orderId: string | number;
  closeReason?: string;
  reopenable: boolean;
}

export interface PlusOrderItemForm {
  id?: string | number;
  orderId?: string | number;
  productId?: string | number;
  skuId?: string | number;
  productName?: string;
  skuName?: string;
  quantity?: number;
  price?: number;
  totalAmount?: number;
}

export interface PlusOrderItemVO extends BasePlusVO {
  orderId: string | number;
  productId: string | number;
  skuId?: string | number;
  productName: string;
  skuName?: string;
  quantity: number;
  price: number;
  totalAmount: number;
  productImage?: string;
}

export interface PlusPaymentForm {
  id?: string | number;
  orderId?: string | number;
  paymentMethod?: string;
  amount?: number;
  status?: string;
  transactionId?: string;
  paidAt?: string;
}

export interface PlusPaymentVO extends BasePlusVO {
  orderId: string | number;
  paymentMethod: string;
  amount: number;
  status: string;
  transactionId?: string;
  paidAt?: string;
}

export interface PlusPaymentCancelForm {
  paymentId: string | number;
  reason?: string;
}

export interface PlusPaymentStatusQueryForm {
  orderId?: string | number;
  transactionId?: string;
}

export interface PlusRefundForm {
  id?: string | number;
  orderId?: string | number;
  paymentId?: string | number;
  amount?: number;
  reason?: string;
  status?: string;
}

export interface PlusRefundVO extends BasePlusVO {
  orderId: string | number;
  paymentId: string | number;
  amount: number;
  reason: string;
  status: string;
  refundedAt?: string;
}

export interface PlusShoppingCartForm {
  id?: string | number;
  userId?: string | number;
}

export interface PlusShoppingCartVO extends BasePlusVO {
  userId: string | number;
  items: PlusShoppingCartItemVO[];
  totalCount: number;
  totalAmount: number;
}

export interface PlusShoppingCartItemForm {
  id?: string | number;
  cartId?: string | number;
  productId: string | number;
  skuId?: string | number;
  quantity: number;
  selected?: boolean;
}

export interface PlusShoppingCartItemVO extends BasePlusVO {
  cartId: string | number;
  productId: string | number;
  skuId?: string | number;
  productName: string;
  skuName?: string;
  productImage?: string;
  quantity: number;
  price: number;
  totalAmount: number;
  selected: boolean;
}

export interface PlusShoppingCartItemListForm {
  items: PlusShoppingCartItemForm[];
}

export interface OrderModule {
  create(form: PlusOrderForm): Promise<PlusOrderVO>;
  update(form: PlusOrderForm): Promise<PlusOrderVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusOrderVO>;
  listAll(form?: QueryListForm): Promise<PlusOrderVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusOrderVO>>;
  createGoodsOrder(form: CreateGoodsOrderForm): Promise<GoodsOrderVO>;
  createVirtualOrder(form: CreateVirtualOrderForm): Promise<VirtualOrderVO>;
  createVipOrder(form: CreateVipOrderForm): Promise<VipOrderVO>;
  createPointsOrder(form: CreatePointsOrderForm): Promise<PointsOrderVO>;
  createImGroupOrder(form: CreateImGroupOrderForm): Promise<ImGroupOrderVO>;
  cancelOrder(id: string | number): Promise<OrderCancelVO>;
  confirmOrder(id: string | number): Promise<OrderConfirmVO>;
  shipOrder(id: string | number, shippingInfo?: string): Promise<OrderShipVO>;
  completeOrder(id: string | number): Promise<OrderCompleteVO>;
  closeOrder(id: string | number): Promise<OrderCloseVO>;
}

export interface PaymentModule {
  create(form: PlusPaymentForm): Promise<PlusPaymentVO>;
  update(form: PlusPaymentForm): Promise<PlusPaymentVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusPaymentVO>;
  listAll(form?: QueryListForm): Promise<PlusPaymentVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusPaymentVO>>;
  cancel(form: PlusPaymentCancelForm): Promise<boolean>;
  queryStatus(form: PlusPaymentStatusQueryForm): Promise<PlusPaymentVO>;
}

export interface RefundModule {
  create(form: PlusRefundForm): Promise<PlusRefundVO>;
  update(form: PlusRefundForm): Promise<PlusRefundVO>;
  delete(id: string | number): Promise<boolean>;
  getById(id: string | number): Promise<PlusRefundVO>;
  listAll(form?: QueryListForm): Promise<PlusRefundVO[]>;
  listByPage(form: QueryListForm, page?: number, size?: number): Promise<Page<PlusRefundVO>>;
}

export interface ShoppingCartModule {
  get(): Promise<PlusShoppingCartVO>;
  addItem(form: PlusShoppingCartItemForm): Promise<PlusShoppingCartItemVO>;
  updateItem(form: PlusShoppingCartItemForm): Promise<PlusShoppingCartItemVO>;
  removeItem(id: string | number): Promise<boolean>;
  addItems(form: PlusShoppingCartItemListForm): Promise<PlusShoppingCartItemVO[]>;
  clear(): Promise<boolean>;
  selectAll(selected: boolean): Promise<boolean>;
  selectItems(itemIds: (string | number)[], selected: boolean): Promise<boolean>;
}
