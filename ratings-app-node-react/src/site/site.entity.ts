import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Site {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  siteName: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipCode: string;
}
