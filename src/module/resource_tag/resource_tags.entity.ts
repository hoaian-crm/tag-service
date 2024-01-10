import {
  AfterLoad,
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../tag/tag.entity';
import { Mock } from '../mock/mock.entity';
import { Injectable, applyDecorators } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

@Entity('resource_tags')
export class ResourceTag {
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

    @Column({})
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
