import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../repositoryMockFactory';
import { Repository } from 'typeorm';
import { RaterController } from './rater.controller';
import { Rater } from './rater.entity';
import { RaterModule } from './rater.module';
import { RaterService } from './rater.service';

const raterArray = [
  {
    id: 1,
    username: 'one',
    password: 'hash',
    firstName: 'name',
    lastName: 'name',
  },
  {
    id: 2,
    username: 'two',
    password: 'hash',
    firstName: 'name',
    lastName: 'name',
  },
  {
    id: 3,
    username: 'three',
    password: 'hash',
    firstName: 'name',
    lastName: 'name',
  },
];

describe('RaterController', () => {
  let controller: RaterController;
  let service: RaterService;
  // let repositoryMock: MockType<Repository<Rater>>;
  // let repository: Repository<Rater>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaterController],
      providers: [
        RaterService,
        {
          provide: RaterService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(raterArray),
          },
        },
      ],
      imports: [RaterModule],
    }).compile();

    controller = module.get<RaterController>(RaterController);
    service = module.get<RaterService>(RaterService);
    // repositoryMock = module.get(getRepositoryToken(Rater));
    // repository = module.get<Repository<Rater>>(getRepositoryToken(Rater));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
