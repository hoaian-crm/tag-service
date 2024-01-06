import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MockTag } from './mock.entity';
import { Repository } from 'typeorm';

@Controller('mock/tag')
export class MockController {
  constructor(
    @InjectRepository(MockTag) private mockRepository: Repository<MockTag>,
  ) {}

  @Get('')
  async getTag() {
    return this.mockRepository.find();
  }
}
