import { Test, TestingModule } from '@nestjs/testing';
import { SiteModule } from 'src/site/site.module';
import { SiteService } from './site.service';

describe('SiteService', () => {
  let service: SiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteService],
      imports: [SiteModule],
    }).compile();

    service = module.get<SiteService>(SiteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
