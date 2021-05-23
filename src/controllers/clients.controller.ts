import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('clients')
export class ClientsController {
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      data: 'clients list',
      limit,
      offset,
    };
  }
  @Get(':id')
  getOne() {
    return { data: 'client data' };
  }
  @Post()
  post(@Body() payload: any) {
    return {
      message: 'client is created',
      payload,
    };
  }
}
