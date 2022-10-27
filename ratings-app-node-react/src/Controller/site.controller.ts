import { Controller, Get } from '@nestjs/common';
import { SiteService } from '../service/site.service';

@Controller('site')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Get('/create')
  create(): string {
    this.siteService.create();
    return 'Test';
  }
}
