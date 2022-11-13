import { Test, TestingModule } from '@nestjs/testing';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { SiteModule } from './site.module';

describe('SiteController', () => {
  let controller: SiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteController],
      providers: [SiteService],
      imports: [SiteModule],
    }).compile();

    controller = module.get<SiteController>(SiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
