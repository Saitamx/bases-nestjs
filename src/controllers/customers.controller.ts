import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      data: 'customers list',
      limit,
      offset,
    };
  }
  @Get(':id')
  getOne() {
    return { data: 'customer data' };
  }
  @Post()
  post(@Body() payload: any) {
    return {
      message: 'customer is created',
      payload,
    };
  }
}
