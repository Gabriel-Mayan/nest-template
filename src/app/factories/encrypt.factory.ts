import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptService {
  private saltOrRounds = 10;

  encryptData(data: string) {
    return bcrypt.hash(data, this.saltOrRounds);
  }

  compareData(data: string, compareData: string) {
    return bcrypt.compare(data, compareData);
  }
}
