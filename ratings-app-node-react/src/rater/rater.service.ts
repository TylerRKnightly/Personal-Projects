import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rater } from './rater.entity';

@Injectable()
export class RaterService {
  constructor(
    @InjectRepository(Rater)
    private raterRepository: Repository<Rater>,
  ) {}
}
