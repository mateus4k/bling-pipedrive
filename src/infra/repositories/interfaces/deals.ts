export interface DealsInterface {
  additional_data: {
    pagination: {
      limit: number;
      more_items_in_collection: boolean;
      start: boolean;
    };
  };
  data?: [{ any }];
  success: boolean;
}

export interface GetDealsInterface {
  getDeals(status: string, limit?: number): Promise<DealsInterface>;
}
