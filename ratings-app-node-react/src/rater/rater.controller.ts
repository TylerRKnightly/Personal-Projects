import { Controller, Get, Post } from '@nestjs/common';
import { Rater } from './rater.entity';
import { RaterService } from './rater.service';

@Controller('rater')
export class RaterController {
  constructor(private readonly raterService: RaterService) {}

  @Get('/create')
  create(): string {
    this.raterService.create();
    return 'Creating...';
  }

  @Get('/all')
  findAll(): Promise<Rater[]> {
    return this.raterService.findAll();
  }
}
