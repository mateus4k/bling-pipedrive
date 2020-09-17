import { SaveManyDealsUseCase } from '../save-many';
import { Deal } from '../../../../infra/repositories/interfaces';

const dealMock: Deal = {
  id: Math.ceil(Math.random() * 100),
  creator_user_id: {
    id: 11726069,
    name: 'Me',
    email: 'mail@mail.com',
    has_pic: 1,
    pic_hash: '123',
    active_flag: true,
    value: 11726069,
  },
  user_id: {
    id: 11726069,
    name: 'Me',
    email: 'mail@mail.com',
    has_pic: 1,
    pic_hash: '123',
    active_flag: true,
    value: 11726069,
  },
  person_id: {
    active_flag: true,
    name: 'Person',
    email: ['person@mail.com'],
    phone: ['123'],
    value: 1,
  },
  org_id: {
    name: 'Organization',
    people_count: 1,
    owner_id: 11726069,
    address: null,
    active_flag: true,
    cc_email: 'pipedrive@mail.com',
    value: 1,
  },
  stage_id: 4,
  title: 'R$ 300,00 deal',
  value: 300,
  currency: 'BRL',
  add_time: '2020-09-16 02:41:13',
  update_time: '2020-09-16 02:42:27',
  stage_change_time: '2020-09-16 02:42:22',
  active: false,
  deleted: false,
  status: 'won',
  probability: null,
  next_activity_date: null,
  next_activity_time: null,
  next_activity_id: null,
  last_activity_id: null,
  last_activity_date: null,
  lost_reason: null,
  visible_to: '3',
  close_time: '2020-09-16 02:42:27',
  pipeline_id: 1,
  won_time: '2020-09-16 02:42:27',
  first_won_time: '2020-09-16 02:42:27',
  lost_time: null,
  products_count: 0,
  files_count: 0,
  notes_count: 0,
  followers_count: 1,
  email_messages_count: 0,
  activities_count: 0,
  done_activities_count: 0,
  undone_activities_count: 0,
  participants_count: 1,
  expected_close_date: '2020-09-16',
  last_incoming_mail_time: null,
  last_outgoing_mail_time: null,
  label: null,
  stage_order_nr: 3,
  person_name: 'Person',
  org_name: 'Organization',
  next_activity_subject: null,
  next_activity_type: null,
  next_activity_duration: null,
  next_activity_note: null,
  formatted_value: 'R$ 300',
  weighted_value: 300,
  formatted_weighted_value: 'R$ 300',
  weighted_value_currency: 'BRL',
  rotten_time: null,
  owner_name: 'Me',
  cc_email: 'my+pipedrive@mail.com',
  org_hidden: false,
  person_hidden: false,
};

const makeDealRepository = () => {
  class DealRepositorySpy {
    insertMany() {
      return [];
    }
  }
  return new DealRepositorySpy();
};

const makeSut = () => {
  const dealRepository = makeDealRepository();
  const sut = new SaveManyDealsUseCase(dealRepository);
  return { sut, dealRepository };
};

describe('SaveManyDealsUseCase', () => {
  it('should save many deals successfully', async () => {
    const { sut } = makeSut();
    const response = await sut.run([dealMock]);
    expect(response).toEqual([]);
  });
});
