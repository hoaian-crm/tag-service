import {
  AfterLoad,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../tag/tag.entity';
import { Mock } from '../mock/mock.entity';
import { Injectable } from '@nestjs/common';

export abstract class ResourceTag {
  id: number;
  key: string;
  value: string;
  resource: string;
  resource_id: number;
  tag: Tag;
  data: any;
}

export function resourceTagCreator(target: any) {
  @Entity('resource_tags')
  class Mapper extends ResourceTag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    value: string;

    @Column()
    resource: string;

    @Column()
    resource_id: number;

    @ManyToOne(() => Tag, '', { eager: true })
    @JoinColumn({
      name: 'key',
      referencedColumnName: 'key',
    })
    tag: Tag;

    @ManyToOne((type) => target)
    @JoinColumn({
      name: 'resource_id',
    })
    data: any;
  }

  return Mapper;
}

export class ResourceTagSingleton {
  static tagEntities: {
    [targetName: string]: ResourceTag & any;
  } = {};

  static upsert(target: any) {
    if (!this.tagEntities[target.name]) {
      this.tagEntities[target.name] = resourceTagCreator(target);
    }
    return this.tagEntities[target.name];
  }
}