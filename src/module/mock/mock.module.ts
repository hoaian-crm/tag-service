import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mock } from './mock.entity';
import { MockController } from './mock.controller';
import { ResourceTagModule } from '../resource_tag/resource_tag.module';
import {
  ResourceTagSingleton,
  resourceTagCreator,
} from '../resource_tag/resource_tags.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mock, ResourceTagSingleton.upsert(Mock)]),
  ],
  controllers: [MockController],
})
export class MockModule {}
