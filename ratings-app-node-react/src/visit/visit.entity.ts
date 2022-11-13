import { Subject } from '../subject/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mmse: string;

  @Column()
  rbans: string;

  @Column()
  cdr: string;

  @Column()
  ravlt: string;

  @Column()
  note: string;

  @ManyToOne(() => Subject, (subject) => subject.visits)
  subject: Subject;
}
