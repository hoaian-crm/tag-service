import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  ResourceTag,
  ResourceTagSingleton,
} from '../resource_tag/resource_tags.entity';
@Entity('mock_tags')
export class Mock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(
    () => ResourceTagSingleton.upsert(Mock),
    (r_tag: any) => r_tag.data,
    {
      eager: true,
    },
  )
  tags: ResourceTag[];
}
