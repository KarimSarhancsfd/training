import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete
} from '@nestjs/common';
type Products = {
  id: number;
  title: string;
  price: number;
};
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('api/products')
export class ProductsController {
  // GET: http://localhost:5000/api/products
  // GET: ~/api/products
  private products: Products[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  @Post()
  public createProduct(@Body() body: CreateProductDto) {
    //    console.log(body);
    //    return body;
    const newProduct: Products = {
      id: this.products.length + 1,
      title: body.title,
      price: body.price,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  // GET: ~/api/products
  @Get()
  public getAllProducts() {
    return this.products;
  }

  // // GET: ~/api/products
  // @Get('/api/products/:id')
  // public getsingleProducts(@Param() param:any) {
  //   console.log(param);
  //   return 'ok'
  // }

  //object destructuring
  // @Get('/api/products/:id')
  // public getsingleProducts(@Param('id') id: string) {
  //   console.log(id);
  //   return 'ok';
  // }

  @Get('/:id')
  public getsingleProducts(@Param('id') id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product)
      throw new NotFoundException(`product not found ${id}`, {
        description: 'this is description',
      });
    return product;
  }
  //PUT :~/api/product/:id
  @Put(':id')
  public updateProduct(
    @Param('id') id: string,
    @Body() body: UpdateProductDto,
  ) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product)throw new NotFoundException(`product not found ${id}`, {
        description: 'this is description',
      });
    console.log(body);
    return { message: 'product updated successfully wit id '+ id };
  }


@Delete(':id')
public deleteproduct(@Param('id') id:string){
  const product = this.products.find((p) => p.id === parseInt(id));
  if(!product) throw new NotFoundException(`product not found ${id}`, { description:"the product does not deleted" })

 return  {message:'product was deleted'}
}



}
