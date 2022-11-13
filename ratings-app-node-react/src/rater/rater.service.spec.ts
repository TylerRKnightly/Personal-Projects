import { Test, TestingModule } from '@nestjs/testing';
import { RaterModule } from './rater.module';
import { RaterService } from './rater.service';

describe('RaterService', () => {
  let service: RaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaterService],
      imports: [RaterModule],
    }).compile();

    service = module.get<RaterService>(RaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
