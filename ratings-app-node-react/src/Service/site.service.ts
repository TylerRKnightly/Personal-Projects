import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from 'src/site/site.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private siteRepository: Repository<Site>,
    private dataSource: DataSource,
  ) {}
}
