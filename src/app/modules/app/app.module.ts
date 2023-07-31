import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, OnModuleInit } from '@nestjs/common';

import { WatchErrorService } from '@factories/watch-error.factory';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UsersModule } from '@modules/users/user.module';
import { databaseConfig } from '@/src/config/database.config';
@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(databaseConfig), UsersModule],
  providers: [WatchErrorService, AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly watchErrorService: WatchErrorService) {}

  async onModuleInit() {
    await Promise.all([this.watchErrorService.initialize()]);
  }
}
