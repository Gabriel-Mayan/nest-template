import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  url: process.env.DB_URL,
  type: process.env.DB_CLIENT as any,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
};

export default config;
