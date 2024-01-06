### Tag Service

#### Tag manager for project: NestJs, TypeORM, PostgresQL

#### Install

```bash
npm install crm-tags
# With yarn
yarn add crm-tags
```

#### Usage

##### Register module

```typescript
@Module({
  imports: [
    ResourceTagModule.register(Mock), // + Add this
    TypeOrmModule.forFeature([Mock]),
  ],
  controllers: [MockController],
})
export class MockModule {}
```

##### Update entity

```typescript
@Entity('mock_tags')
export class Mock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  // + Add this
  @TagRelation(Mock)
  tags: ResourceTag[];
}
```

##### Add where in query ( This will be upgrade and make auto )

```typescript
this.mockRepository.find({
  where: {
    tags: {
      resource: 'mock_tags', // + Add this
    },
  },
});
```
