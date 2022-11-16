import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visit } from './visit.entity';

@Injectable()
export class VisitService {
  constructor(
    @InjectRepository(Visit)
    private visitRepository: Repository<Visit>,
  ) {}

  findAll(): Promise<Visit[]> {
    return this.visitRepository.find();
  }

  findVisitById(visitId: number) {
    return this.visitRepository
      .createQueryBuilder('visit')
      .where('user.id = :id', { id: visitId })
      .getOne();
  }
}
