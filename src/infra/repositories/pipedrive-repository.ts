import fetch from 'node-fetch';
import { DealsInterface, GetDealsInterface } from './interfaces';

export class PipedriveRepository implements GetDealsInterface {
  constructor(private baseUrl: string, private token: string) {}

  async getDeals(status: string, limit = 100): Promise<DealsInterface> {
    const url = `${this.baseUrl}/deals`;
    const params = new URLSearchParams({
      status: status.toString(),
      start: '0',
      limit: limit.toString(),
      api_token: this.token,
    });

    const response = await fetch(`${url}?${params}`, { method: 'get' });
    const data = await response.json();

    const successfullyFetched = data.success && response.status === 200;

    return successfullyFetched ? data.data : false;
  }
}
