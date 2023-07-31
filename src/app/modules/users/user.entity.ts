import { Entity, Column } from 'typeorm';

import { BaseEntity } from '@shared/utils/base-entity.util';

@Entity()
export class User extends BaseEntity {
  @Column('varchar', { length: 100, nullable: false })
  name: string;

  @Column('varchar', { length: 255, nullable: false, unique: true })
  email: string;

  @Column('varchar', { length: 255, nullable: false })
  password: string;

  @Column('boolean', { nullable: false, default: false })
  isActive: boolean;
}
