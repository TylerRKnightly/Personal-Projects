import { Visit } from '../visit/visit.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  notes: string;

  @OneToMany(() => Visit, (visit) => visit.subject)
  visits: Visit[];
}
