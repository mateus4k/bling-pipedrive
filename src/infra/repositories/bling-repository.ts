import fetch from 'node-fetch';
import { parse } from 'js2xmlparser';
import {
  Deal,
  CreateOrderInterface,
  CreateManyOrdersInterface,
} from './interfaces';

interface Order {
  numero: number;
  idPedido: number;
  codigos_rastreamento: {
    codigo_rastreamento?: unknown;
  };
  volumes: { servico: string; codigoRastreamento: string }[];
}

export class BlingRepository
  implements CreateOrderInterface, CreateManyOrdersInterface {
  constructor(private baseUrl: string, private token: string) {}

  async createOrder(order: Deal): Promise<Order> {
    const normalizedOrder = {
      cliente: {
        nome: order.org_id.name,
        email: order.org_id.cc_email,
      },
      itens: {
        item: {
          codigo: order.id,
          descricao: order.title,
          qtde: 1,
          vlr_unit: order.value,
        },
      },
      transporte: {
        volume: {
          servico: 'digital',
        },
      },
      parcelas: {
        parcela: {
          vlr: order.value,
        },
      },
    };

    const xmlNormalizedOrder = parse('pedido', normalizedOrder);
    const url = `${this.baseUrl}/pedido/json/?apikey=${this.token}&xml=${xmlNormalizedOrder}`;
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const response = await fetch(url, { method: 'post', headers });
    const data = await response.json();

    const successfullyFetched =
      !data.erros?.erro?.cod &&
      !!data.retorno?.pedidos?.length &&
      !!data.retorno?.pedidos[0].pedido.numero &&
      response.status === 201;

    return successfullyFetched ? data.retorno?.pedidos[0].pedido : false;
  }

  async createManyOrders(orders: Deal[]): Promise<Order[]> {
    const mapedOrdersToCreate = orders.map((order) => this.createOrder(order));
    return Promise.all(mapedOrdersToCreate);
  }
}
