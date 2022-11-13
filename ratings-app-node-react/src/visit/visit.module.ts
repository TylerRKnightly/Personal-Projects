import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from './visit.entity';
import { VisitController } from './visit.controller';
import { VisitService } from './visit.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Visit])],
  exports: [TypeOrmModule],
  controllers: [VisitController],
  providers: [VisitService],
})
export class VisitModule {}
