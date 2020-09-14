import { ResponseInterface } from '../helpers';

export interface RouterInterface {
  route(httpRequest): Promise<ResponseInterface>;
}
