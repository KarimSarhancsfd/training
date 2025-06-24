import { Controller,Get } from "@nestjs/common";




@Controller()
export class ReviewsController {

    //GET: http://localhost:5000/api/reviews
    //GET: ~/api/reviews
    @Get('/api/reviews')
    getAllreviews(){
        return [
            {id:1,product:'book',review:'good',rating:'5'},
            {id:1,products:'pen',review:'bad',rating:'2'},
            {id:1,products:'laptop',review:'excellent',rating:'4.5'}

        ]
    }
}