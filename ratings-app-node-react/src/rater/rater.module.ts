import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rater } from './rater.entity';
import { RaterService } from './rater.service';
import { RaterController } from './rater.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rater])],
  exports: [TypeOrmModule],
  providers: [RaterService],
  controllers: [RaterController],
})
export class RaterModule {}
