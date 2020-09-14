import { IResponse } from '../helpers/http';

export interface ControllerInterface {
  route(httpRequest): Promise<IResponse>
}