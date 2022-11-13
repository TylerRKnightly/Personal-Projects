import { Test, TestingModule } from '@nestjs/testing';
import { RaterController } from './rater.controller';
import { RaterService } from './rater.service';

describe('RaterController', () => {
  let controller: RaterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaterController],
      providers: [RaterService],
    }).compile();

    controller = module.get<RaterController>(RaterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
