import {
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: '<%= dasherize(name) %>' })
export class <%= classify(name) %>Entity {
  @PrimaryGeneratedColumn()
  id?: number;
}
