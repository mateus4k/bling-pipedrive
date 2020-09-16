export interface CreateOrderInterface {
  createOrder(order: unknown): Promise<unknown>;
}

export interface CreateManyOrdersInterface {
  createManyOrders(orders: unknown[]): Promise<unknown[]>;
}
