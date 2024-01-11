import { ApiMetaData, ControllerMetaData } from '@hoaian-crm/permissions';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Response } from 'crm-prototypes';
import { AttachTagDto } from './dto/attach.dto';
import { CreateTagDto } from './dto/create.dto';
import { DeleteTagParam } from './dto/delete.dto';
import { UpdateTagBody, UpdateTagParam } from './dto/update.dto';
import { TagService } from './tag.service';
import { LoggerService } from '@hoaian-crm/logger';

@ControllerMetaData('tags', 'Tag')
@Controller('tags')
export class TagController {
  constructor(
    private tagService: TagService,
    private loggerService: LoggerService,
  ) { }

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

  @ApiMetaData({
    name: 'Attach tag',
    description: 'Allow attach tag to resource',
    policy: 'tag:attach',
  })
  @Post('/attach')
  async attach(@Body() data: AttachTagDto) {
    const result = await this.tagService.attach(data);
    return Response.createSuccess(result);
  }

  @ApiMetaData({
    name: 'Update tag',
    description: 'Allow update tag',
    policy: 'tag:update',
  })
  @Put('/:key')
  async update(@Body() data: UpdateTagBody, @Param() param: UpdateTagParam) {
    const result = await this.tagService.update(data, param);
    return Response.updateSuccess(result);
  }

  @ApiMetaData({
    name: 'Delete tag',
    description: 'Allow delete tag',
    policy: 'tag:delete',
  })
  @Delete('/:key')
  async delete(@Param() param: DeleteTagParam) {
    const result = await this.tagService.delete(param);
    return Response.deleteSuccess(result);
  }
}
