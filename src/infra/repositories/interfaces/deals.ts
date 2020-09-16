export type Deal = {
  id: unknown;
  creator_user_id: {
    id: unknown;
    name: string;
    email: string;
    has_pic: number | boolean;
    pic_hash: string;
    active_flag: boolean;
    value: number;
  };
  user_id: {
    id: unknown;
    name: string;
    email: string;
    has_pic: number | boolean;
    pic_hash: string;
    active_flag: boolean;
    value: number;
  };
  person_id: {
    active_flag: boolean;
    name: string;
    email: unknown[];
    phone: unknown[];
    value: number | boolean;
  };
  org_id: {
    name: string;
    people_count: number | boolean;
    owner_id: unknown;
    address?: string;
    active_flag: boolean;
    cc_email: string;
    value: number | boolean;
  };
  stage_id: unknown;
  title: string;
  value: number;
  currency: string;
  add_time: string;
  update_time: string;
  stage_change_time: string;
  active: boolean;
  deleted: boolean;
  status: string;
  probability?: unknown;
  next_activity_date?: unknown;
  next_activity_time?: unknown;
  next_activity_id?: unknown;
  last_activity_id?: unknown;
  last_activity_date?: unknown;
  lost_reason?: unknown;
  visible_to: unknown;
  close_time: string;
  pipeline_id: number | boolean;
  won_time: string;
  first_won_time: string;
  lost_time?: unknown;
  products_count: number;
  files_count: number;
  notes_count: number;
  followers_count: number | boolean;
  email_messages_count: number;
  activities_count: number;
  done_activities_count: number;
  undone_activities_count: number;
  participants_count: number | boolean;
  expected_close_date: string;
  last_incoming_mail_time?: unknown;
  last_outgoing_mail_time?: unknown;
  label?: unknown;
  stage_order_nr: 3;
  person_name: string;
  org_name: string;
  next_activity_subject?: unknown;
  next_activity_type?: unknown;
  next_activity_duration?: unknown;
  next_activity_note?: unknown;
  formatted_value: string;
  weighted_value: unknown;
  formatted_weighted_value: string;
  weighted_value_currency: string;
  rotten_time?: unknown;
  owner_name: string;
  cc_email: string;
  org_hidden: boolean;
  person_hidden: boolean;
};

export interface DealsInterface {
  additional_data: {
    pagination: {
      limit: number;
      more_items_in_collection: boolean;
      start: boolean;
    };
  };
  data?: Deal[];
  success: boolean;
}

export interface GetDealsInterface {
  getDeals(status: string, limit?: number): Promise<DealsInterface>;
}
