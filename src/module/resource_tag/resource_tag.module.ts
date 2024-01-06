import { DynamicModule, Module, applyDecorators } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceTag, resourceTagCreator } from './resource_tags.entity';

@Module({})
export class ResourceTagModule {
  static register(target: any): DynamicModule {
    const entity = resourceTagCreator(target);
    const entityForFeature = TypeOrmModule.forFeature([entity, target]);
    const entityProvider = {
      provide: 'TAG_INJECT',
      useValue: entity,
    };
    applyDecorators();
    return {
      module: ResourceTagModule,
      imports: [entityForFeature],
      exports: [entityProvider, entityForFeature],
      providers: [entityProvider],
    };
  }
}
