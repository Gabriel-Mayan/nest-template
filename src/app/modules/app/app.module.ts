import { Module, OnModuleInit } from '@nestjs/common';

import { DatabaseService } from '@factories/database.factory';
import { WatchErrorService } from '@factories/watch-error.factory';

import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
  providers: [WatchErrorService, DatabaseService, AppService],
})
export class AppModule implements OnModuleInit {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly watchErrorService: WatchErrorService,
  ) {}

  async onModuleInit() {
    await Promise.all([
      this.databaseService.initialize(),
      this.watchErrorService.initialize(),
    ]);
  }
}
