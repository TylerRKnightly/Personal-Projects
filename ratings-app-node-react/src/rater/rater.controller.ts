import { Controller } from '@nestjs/common';
import { RaterService } from './rater.service';

@Controller('rater')
export class RaterController {
  constructor(private readonly raterService: RaterService) {}
}
