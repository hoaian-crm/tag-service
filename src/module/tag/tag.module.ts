import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { ResourceTagModule } from '../resource_tag/resource_tag.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tag]), ResourceTagModule],
  exports: [TagService],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule { }
