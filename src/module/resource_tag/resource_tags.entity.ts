import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '../tag/tag.entity';

@Entity('resource_tags')
export class ResourceTags {
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

  @ManyToOne(() => Tag, { eager: true })
  @JoinColumn({
    name: 'key',
  })
  tag: Tag;
}
