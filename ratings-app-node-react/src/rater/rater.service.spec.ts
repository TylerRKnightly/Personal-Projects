import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MockType, repositoryMockFactory } from '../repositoryMockFactory';
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

describe('RaterService', () => {
  let service: RaterService;
  // let repositoryMock: MockType<Repository<Rater>>;
  let repository: Repository<Rater>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RaterService,
        {
          provide: getRepositoryToken(Rater),
          useValue: {
            findAll: jest.fn().mockResolvedValue(raterArray),
          },
        },
      ],
    }).compile();

    service = module.get<RaterService>(RaterService);
    // repositoryMock = module.get(getRepositoryToken(Rater));
    repository = module.get<Repository<Rater>>(getRepositoryToken(Rater));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should return an array of raters', () => {
      const raters = service.findAll();
      expect(raters).toEqual(raterArray);
    });
  });
});
