import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      data: 'brands list',
      limit,
      offset,
    };
  }
  @Get(':id')
  getOne() {
    return { data: 'brand data' };
  }
  @Get('filter')
  filter() {
    return { message: `filter` };
  }
  @Post()
  post(@Body() payload: any) {
    return {
      message: 'brand is created',
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: `brand ${id} deleted`,
    };
  }
}
