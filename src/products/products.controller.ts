import { Controller, Get, Post, Body } from '@nestjs/common';
type Products = {
  id: number;
  title: string;
  price: number;
};
import { CreateProductDto } from './dtos/create-product.dto';

@Controller()
export class ProductsController {
  // GET: http://localhost:5000/api/products
  // GET: ~/api/products
  private products: Products[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  @Post('api/products')
  public createProduct(@Body() body: CreateProductDto) {
    //    console.log(body);
    //    return body;
    const newProduct: Products = {
      id: this.products.length + 1,
      title: body.title,
      price: body.price
    };
    this.products.push(newProduct);
    return newProduct;
  }

  @Get('/api/products')
  public getAllProducts() {
    return this.products;
  }
}
