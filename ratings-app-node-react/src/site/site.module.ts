import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteService } from '../service/site.service';
import { SiteController } from 'src/Controller/site.controller';
import { Site } from './site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  providers: [SiteService],
  controllers: [SiteController],
})
export class SiteModule {}
