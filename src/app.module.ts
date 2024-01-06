import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'crm-logger';
import { TagModule } from './module/tag/tag.module';
import { ResourceTagModule } from './module/resource_tag/resource_tag.module';
import { MockModule } from './module/mock/mock.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      port: +process.env.PG_PORT,
      autoLoadEntities: true,
      logging: process.env.NODE_ENV === 'development',
    }),

    LoggerModule,
    TagModule,
    ResourceTagModule,
    MockModule,
  ],
})
export class AppModule {}
