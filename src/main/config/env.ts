export const env = {
  port: process.env.PORT ?? 3333,
  mongo: process.env.MONGO_URL ?? '',
  pipedrive: process.env.PIPEDRIVE_TOKEN ?? '',
  bling: process.env.BLING_TOKEN ?? '',
};
