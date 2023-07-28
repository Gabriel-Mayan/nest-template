import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions, ObjectType, Repository } from 'typeorm';

import DatabaseConfig from '@config/database.config';

@Injectable()
export class DatabaseService {
  private config: DataSourceOptions;

  constructor() {
    this.config = DatabaseConfig;
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
