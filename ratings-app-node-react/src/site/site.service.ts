import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Site } from './site.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(Site)
    private siteRepository: Repository<Site>,
  ) {}

  findAll(): Promise<Site[]> {
    return this.siteRepository.find();
  }

  findSiteById(siteId: number) {
    return this.siteRepository
      .createQueryBuilder('site')
      .where('site.id = :id', { id: siteId })
      .getOne();
  }
  async create(site: Site): Promise<void> {
    await this.siteRepository.save(site);
  }
}
