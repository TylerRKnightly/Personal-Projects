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
  async create(): Promise<void> {
    const site = new Site();
    site.address = '123';
    site.city = 'Burb';
    site.siteName = 'Dke';
    site.zipCode = '23232';
    site.state = 'FL';
    await this.siteRepository.save(site);
  }
}
