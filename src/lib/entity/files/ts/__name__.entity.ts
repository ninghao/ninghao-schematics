import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity({ name: '<%= dasherize(name) %>' })
export class <%= classify(name) %>Entity {
  @PrimaryColumn()
  id?: string;

  // @CreateDateColumn()
  // createdAt?: Date;

  // @UpdateDateColumn()
  // updatedAt?: Date;

  // @DeleteDateColumn()
  // deletedAt?: Date;

  // @VersionColumn()
  // version?: number;
}
