import { Subject } from '../subject/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  mmse: string;

  @Column({ nullable: true })
  rbans: string;

  @Column({ nullable: true })
  cdr: string;

  @Column({ nullable: true })
  ravlt: string;

  @Column()
  note: string;

  @ManyToOne(() => Subject, (subject) => subject.visits)
  subject: Subject;
}
