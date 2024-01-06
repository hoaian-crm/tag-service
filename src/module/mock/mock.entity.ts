import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResourceTag } from '../resource_tag/resource_tags.entity';
import { TagRelation } from '../resource_tag/resource_tag.decorator';
import { ResourceTagModule } from '../resource_tag/resource_tag.module';
@Entity('mock_tags')
export class Mock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @TagRelation(Mock)
  tags: ResourceTag[];
}
