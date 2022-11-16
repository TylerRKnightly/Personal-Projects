import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rater } from './rater.entity';

@Injectable()
export class RaterService {
  constructor(
    @InjectRepository(Rater)
    private readonly raterRepository: Repository<Rater>,
  ) {}

  findAll(): Promise<Rater[]> {
    return this.raterRepository.find();
    // return this.raterRepository.createQueryBuilder('rater').getMany();
  }

  findRaterById(raterId: number) {
    return this.raterRepository
      .createQueryBuilder('rater')
      .where('rater.id = :id', { id: raterId })
      .getOne();
  }
  async create(): Promise<void> {
    this.raterArray.forEach((rater) => {
      this.raterRepository.save(rater);
    });
  }
  raterArray = [
    {
      username: 'one',
      passwordHash: 'hash',
      firstName: 'name',
      lastName: 'name',
    },
    {
      username: 'two',
      passwordHash: 'hash',
      firstName: 'name',
      lastName: 'name',
    },
    {
      username: 'three',
      passwordHash: 'hash',
      firstName: 'name',
      lastName: 'name',
    },
  ];
}
