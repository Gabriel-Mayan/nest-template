import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, OnModuleInit } from '@nestjs/common';

import { WatchErrorService } from '@factories/watch-error.factory';

import { AuthModule } from '@modules/auth/auth.module';
import { UsersModule } from '@modules/users/user.module';

import { databaseConfig } from '@config/database.config';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  imports: [TypeOrmModule.forRoot(databaseConfig), UsersModule, AuthModule],
  providers: [WatchErrorService, AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private readonly watchErrorService: WatchErrorService) {}

  async onModuleInit() {
    await Promise.all([this.watchErrorService.initialize()]);
  }
}
