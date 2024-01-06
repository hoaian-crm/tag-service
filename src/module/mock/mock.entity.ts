import {
  AfterLoad,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResourceTag } from '../resource_tag/resource_tags.entity';
import { FilterTag, TagRelation } from '../resource_tag/resource_tag.decorator';
@Entity('mock_tags')
export class Mock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @TagRelation(Mock)
  tags: ResourceTag[];

  @FilterTag('mock_tags')
  async filterTag() {}
}
