import { applyDecorators } from '@nestjs/common';
import { AfterLoad, OneToMany } from 'typeorm';
import { ResourceTagModule } from './resource_tag.module';

export const TagRelation = (target: any): PropertyDecorator => {
  AfterLoad()(target, 'removeTag');
  return applyDecorators(
    OneToMany(
      () => ResourceTagModule.upsert(target),
      (r_tag: any) => r_tag.data,
      {
        eager: true,
      },
    ),
  );
};

export const FilterTag = (resource: string): MethodDecorator => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    AfterLoad()(target, propertyKey);
    descriptor.value = function () {
      this.tags = this.tags.filter((tag) => tag.resource === resource);
    };
  };
};
