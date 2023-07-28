import * as sentry from '@sentry/node';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SentryService {
  private dsn = process.env.SENTRY_URL;
  private tracesSampleRate = 1.0;

  async initialize() {
    return sentry.init({
      dsn: this.dsn,
      tracesSampleRate: this.tracesSampleRate,
    });
  }
}
