import { applyDecorators } from '@nestjs/common';
import { OneToMany } from 'typeorm';
import { ResourceTagModule } from './resource_tag.module';

export const TagRelation = (target: any): PropertyDecorator => {
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
