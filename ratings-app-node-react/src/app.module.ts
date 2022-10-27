import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { RatingsController } from './Controller/ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './site/site.entity';
import { SiteModule } from './site/site.module';
import { DataSource } from 'typeorm';
import { SiteService } from './service/site.service';
import { SiteController } from './Controller/site.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres1',
      database: 'Ratings',
      synchronize: true,
      entities: [Site],
      autoLoadEntities: true,
    }),
    SiteModule,
  ],
  controllers: [AppController, RatingsController, SiteController],
  providers: [AppService, SiteService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
