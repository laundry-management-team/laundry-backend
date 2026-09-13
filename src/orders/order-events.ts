export const ORDER_STATUS_CHANGED_CHANNEL = 'order.status_changed';

export interface orderStatusChangedEvent {
  orderId: string;
  status: string;
  paymentStatus: string;
  customerId: string;
  branchId: string;
}
