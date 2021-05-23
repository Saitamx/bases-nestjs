import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      data: 'categories list',
      limit,
      offset,
    };
  }
  @Get(':id')
  getOne() {
    return { data: 'categorie data' };
  }
  @Post()
  post(@Body() payload: any) {
    return {
      message: 'categorie is created',
      payload,
    };
  }
}
