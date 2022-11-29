import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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

  @Get('/:id')
  findRaterById(@Param('id', ParseIntPipe) id: number): Promise<Rater> {
    return this.raterService.findRaterById(id);
  }
}
