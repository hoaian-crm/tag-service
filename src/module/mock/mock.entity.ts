import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mock_tags')
export class MockTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
