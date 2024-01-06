import { Body, Controller, Get, Post } from '@nestjs/common';
import { ControllerMetaData } from 'crm-permission';
import { TagService } from './tag.service';
import { Response } from 'crm-prototypes';
import { CreateTagDto } from './dto/create.dto';
import { LoggerService } from 'crm-logger';

@ControllerMetaData('tags')
@Controller('tags')
export class TagController {
  constructor(
    private tagService: TagService,
    private loggerService: LoggerService,
  ) {}

  @Get('')
  async find() {
    const result = await this.tagService.find();
    return Response.findSuccess(result);
  }

  @Post()
  async create(@Body() data: CreateTagDto) {
    try {
      const result = await this.tagService.create(data);
      return Response.createSuccess(result);
    } catch (error) {
      await this.loggerService.handleError(error, { field: 'tag' });
    }
  }
}
