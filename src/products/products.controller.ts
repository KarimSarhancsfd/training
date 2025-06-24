import { Controller, Get } from "@nestjs/common";




@Controller()
export class ProductsController {
// GET: http://localhost:5000/api/products
// GET: ~/api/products
    @Get('/api/products')
    public getAllProducts(){
        return [
            {id:1,title:'book',price:10},
            {id:1,title:'pen',price:5},
            {id:1,title:'laptop',price:400},
         
        ]
    }
}