import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create.dto';
import { AttachTagDto } from './dto/attach.dto';
import { ResourceTagService } from '../resource_tag/resource_tag.service';

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>, private resourceTagService: ResourceTagService) { }

  async find() {
    return this.tagRepository.findAndCount();
  }

  async create(data: CreateTagDto) {
    return this.tagRepository.save(this.tagRepository.create(data));
  }

  async attach(data: AttachTagDto) {

    return this.resourceTagService.attach(data)

    // return (
    //   await this.tagRepository.query(
    //     `
    //   insert into resource_tags (id, key, value, resource, resource_id)
    //   values (default, $1, $2, $3, $4)
    //   returning resource_tags.*
    // `,
    //     [data.key, data.value, data.resource, data.resource_id],
    //   )
    // )[0];
  }
}
