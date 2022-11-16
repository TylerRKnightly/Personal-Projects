import { Test, TestingModule } from '@nestjs/testing';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { SiteModule } from './site.module';
import { Site } from './site.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const siteArray = [];

describe('SiteController', () => {
  let controller: SiteController;
  let repository: Repository<Site>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteController],
      providers: [
        SiteService,
        {
          provide: getRepositoryToken(Site),
          useValue: {
            findAll: jest.fn().mockResolvedValue(siteArray),
          },
        },
      ],
      imports: [SiteModule],
    }).compile();

    controller = module.get<SiteController>(SiteController);
    
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
