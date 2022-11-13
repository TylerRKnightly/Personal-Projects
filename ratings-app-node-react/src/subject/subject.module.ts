import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from './subject.entity';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  exports: [TypeOrmModule],
  providers: [SubjectService],
  controllers: [SubjectController],
})
export class SubjectModule {}
