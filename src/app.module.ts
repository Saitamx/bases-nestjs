import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './controllers/order.controller';
import { UserController } from './controllers/user.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ClientsController } from './controllers/clients.controller';
import { CustomersController } from './controllers/customers.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from './services/product.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrderController,
    UserController,
    CustomersController,
    BrandsController,
    ClientsController,
  ],
  providers: [AppService, ProductService],
})
export class AppModule {}
