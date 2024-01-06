import { DynamicModule, Module, applyDecorators } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceTag, resourceTagCreator } from './resource_tags.entity';

@Module({})
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
    const entityForFeature = TypeOrmModule.forFeature([entity]);
    return {
      module: ResourceTagModule,
      imports: [entityForFeature],
    };
  }
}
