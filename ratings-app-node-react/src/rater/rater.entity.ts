import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rater {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  passwordHash: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
