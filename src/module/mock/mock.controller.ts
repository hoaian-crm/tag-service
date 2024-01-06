import { Controller, Get, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mock } from './mock.entity';
import { Repository } from 'typeorm';

@Controller('mock/tag')
export class MockController {
  constructor(
    @InjectRepository(Mock) private mockRepository: Repository<Mock>,
  ) {}

  @Get('')
  async getMockTag() {
    return this.mockRepository.find({
      where: {
        tags: {
          resource: 'mock_tags',
        },
      },
    });
  }
}
