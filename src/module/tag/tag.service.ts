import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create.dto';
import { AttachTagDto } from './dto/attach.dto';
import { ResourceTagService } from '../resource_tag/resource_tag.service';
import { UpdateTagBody, UpdateTagParam } from './dto/update.dto';
import { DeleteTagParam } from './dto/delete.dto';

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
  }

  async update(data: UpdateTagBody, param: UpdateTagParam) {
    return this.tagRepository.update({ key: param.key }, data);
  }
  async delete(param: DeleteTagParam) {
    return this.tagRepository.delete(param)
  }
}
