import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ResourceTag } from "./resource_tags.entity";
import { Repository } from "typeorm";
import { AttachTagDto } from "../tag/dto/attach.dto";

@Injectable()
export class ResourceTagService {
  constructor(@InjectRepository(ResourceTag) private resourceTagRepository: Repository<ResourceTag>) { }

  async attach(data: AttachTagDto) {
    // return this.resourceTagRepository.insert(data.resource_ids.map((resource_id) => ({
    //   resource: data.resource,
    //   resource_id,
    //   key: data.key,
    //   value: data.value
    // })));

    return this.resourceTagRepository.createQueryBuilder()
      .insert()
      .into(ResourceTag)
      .orIgnore()
      .values(data.resource_ids.map((resource_id) => ({
        resource: data.resource,
        resource_id,
        key: data.key,
        value: data.value
      })))
      .returning("")
      .execute()
  }
}
