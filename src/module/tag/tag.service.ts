import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create.dto';

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  async find() {
    return this.tagRepository.findAndCount();
  }

  async create(@Body() data: CreateTagDto) {
    return this.tagRepository.save(this.tagRepository.create(data));
  }
}
