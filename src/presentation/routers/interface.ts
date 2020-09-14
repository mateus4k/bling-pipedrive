import { ResponseInterface } from '../../helpers/http';

export interface RouterInterface {
  route(httpRequest): Promise<ResponseInterface>;
}
