import { Test, TestingModule } from '@nestjs/testing';
import { SiteService } from 'src/service/site.service';
import { SiteController } from './site.controller';

describe('SiteController', () => {
  let controller: SiteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteController],
      providers: [SiteService],
    }).compile();

    controller = module.get<SiteController>(SiteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
