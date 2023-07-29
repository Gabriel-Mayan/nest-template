import * as sentry from '@sentry/node';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WatchErrorService {
  private tracesSampleRate = 1.0;
  private dsn = process.env.SENTRY_URL;

  async initialize() {
    return sentry.init({
      dsn: this.dsn,
      tracesSampleRate: this.tracesSampleRate,
    });
  }
}
