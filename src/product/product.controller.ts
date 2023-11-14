import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { GetProductsDto } from './dto/product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
  @Post()
  @HttpCode(200)
  async getAll(@Body() getProductsDto: GetProductsDto) {}

  @Get(':id')
  async get(@Param('id') id: string) {}

  @Post('create')
  async create(@Body() createProductDto: Omit<ProductModel, '_id'>) {}

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: ProductModel,
  ) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {}
}
