import { Module } from '@nestjs/common';
import { AppController } from './Controller/app.controller';
import { AppService } from './app.service';
import { RatingsController } from './Controller/ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Site } from './site/site.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres1',
      database: 'Ratings',
      entities: [Site],
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, RatingsController],
  providers: [AppService],
})
export class AppModule {}
