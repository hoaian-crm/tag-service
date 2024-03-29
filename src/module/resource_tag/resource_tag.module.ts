import { DynamicModule, Module, applyDecorators } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceTag, resourceTagCreator } from './resource_tags.entity';
import { Tag } from '../tag/tag.entity';
import { ResourceTagService } from './resource_tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceTag])],
  providers: [ResourceTagService],
  exports: [ResourceTagService]
})
export class ResourceTagModule {
  static tagEntities: {
    [targetName: string]: ResourceTag & any;
  } = {};

  static upsert(target: any) {
    if (!this.tagEntities[target.name]) {
      this.tagEntities[target.name] = resourceTagCreator(target);
    }
    return this.tagEntities[target.name];
  }

  static register(target: any): DynamicModule {
    const entity = this.upsert(target);
    const entityForFeature = TypeOrmModule.forFeature([entity, Tag]);
    return {
      module: ResourceTagModule,
      imports: [entityForFeature],
    };
  }
}
