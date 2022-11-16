import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './site/site.entity';
import { SiteModule } from './site/site.module';
import { DataSource } from 'typeorm';
import { SiteService } from './site/site.service';
import { SiteController } from './site/site.controller';
import { Visit } from './visit/visit.entity';
import { Rater } from './rater/rater.entity';
import { Subject } from 'typeorm/persistence/Subject';
import { VisitController } from './visit/visit.controller';
import { RaterController } from './rater/rater.controller';
import { SubjectController } from './subject/subject.controller';
import { VisitService } from './visit/visit.service';
import { RaterService } from './rater/rater.service';
import { SubjectService } from './subject/subject.service';
import { VisitModule } from './visit/visit.module';
import { RaterModule } from './rater/rater.module';
import { SubjectModule } from './subject/subject.module';

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
      entities: [Site, Visit, Rater, Subject],
      autoLoadEntities: true,
    }),
    SiteModule,
    VisitModule,
    RaterModule,
    SubjectModule,
  ],
  // controllers: [
  //   AppController,
  //   SiteController,
  //   VisitController,
  //   RaterController,
  //   SubjectController,
  // ],
  // providers: [
  //   AppService,
  //   SiteService,
  //   VisitService,
  //   RaterService,
  //   SubjectService,
  // ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
