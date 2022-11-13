import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { Site } from './site.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  exports: [TypeOrmModule],
  providers: [SiteService],
  controllers: [SiteController],
})
export class SiteModule {}
