import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions, ObjectType, Repository } from 'typeorm';

@Injectable()
export class TypeOrmService {
  private config: DataSourceOptions;

  constructor() {
    this.config = {
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
  }

  private generateAppDataSource(): DataSource {
    return new DataSource(this.config);
  }

  initialize(): Promise<DataSource> {
    return this.generateAppDataSource().initialize();
  }

  createRepository<T>(entity: ObjectType<T>): Repository<T> {
    return this.generateAppDataSource().getRepository(entity);
  }
}
