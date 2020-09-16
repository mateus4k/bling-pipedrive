import { config } from 'dotenv';

config();

export const env = {
  port: process.env.PORT || 3333,
  mongo: {
    url: process.env.MONGO_URL || '',
  },
  pipedrive: {
    baseUrl: `https://${
      process.env.PIPEDRIVE_DOMAIN || 'companydomain'
    }.pipedrive.com/api/v1`,
    token: process.env.PIPEDRIVE_TOKEN || '',
  },
  bling: {
    baseUrl: 'https://bling.com.br/Api/v2',
    token: process.env.BLING_TOKEN || '',
  },
};
