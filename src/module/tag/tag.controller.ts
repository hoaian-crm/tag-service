import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiMetaData, ControllerMetaData } from 'crm-permission';
import { TagService } from './tag.service';
import { Response } from 'crm-prototypes';
import { CreateTagDto } from './dto/create.dto';
import { LoggerService } from 'crm-logger';
import { AttachTagDto } from './dto/attach.dto';

@ControllerMetaData('tags')
@Controller('tags')
export class TagController {
  constructor(
    private tagService: TagService,
    private loggerService: LoggerService,
  ) {}

  @ApiMetaData({
    name: 'Get tag',
    description: 'Allow get all tag',
    policy: 'tag:get_all',
  })
  @Get('')
  async find() {
    const result = await this.tagService.find();
    return Response.findSuccess(result);
  }

  @ApiMetaData({
    name: 'Create tag',
    description: 'Allow create new tag',
    policy: 'tag:create',
  })
  @Post()
  async create(@Body() data: CreateTagDto) {
    try {
      const result = await this.tagService.create(data);
      return Response.createSuccess(result);
    } catch (error) {
      await this.loggerService.handleError(error, { field: 'tag' });
    }
  }

  @Post('/attach')
  async attach(@Body() data: AttachTagDto) {
    const result = await this.tagService.attach(data);
    return Response.createSuccess(result);
  }
}
