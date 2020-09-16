import { config } from 'dotenv';

config();

export const env = {
  port: process.env.PORT || 3333,
  mongo: process.env.MONGO_URL || '',
  pipedrive: {
    url: 'https://developers.pipedrive.com/docs/api/v1/',
    token: process.env.PIPEDRIVE_TOKEN || '',
  },
  bling: {
    url: 'https://bling.com.br/Api/v2/pedidos/json/',
    token: process.env.BLING_TOKEN || '',
  },
};
