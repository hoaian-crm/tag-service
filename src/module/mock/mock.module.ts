import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mock } from './mock.entity';
import { MockController } from './mock.controller';
import { ResourceTagModule } from '../resource_tag/resource_tag.module';

@Module({
  imports: [ResourceTagModule.register(Mock), TypeOrmModule.forFeature([Mock])],
  controllers: [MockController],
})
export class MockModule {}
