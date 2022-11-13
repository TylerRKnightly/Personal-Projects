import { Test, TestingModule } from '@nestjs/testing';
import { VisitModule } from './visit.module';
import { VisitService } from './visit.service';

describe('VisitService', () => {
  let service: VisitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitService],
      imports: [VisitModule],
    }).compile();

    service = module.get<VisitService>(VisitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
