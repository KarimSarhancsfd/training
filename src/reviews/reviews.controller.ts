import { Controller,Get,Post,Put,Delete,NotFoundException, Param, Body, ParseIntPipe } from "@nestjs/common";


import { CreateReviewDto } from "./dtos/create-review.dto";
import { UpdateReviewDto} from "./dtos/update-review.dto";


type Reviews = {
    id:number;
    products: string;
    review: string;
    rating:string;
}






@Controller("api/reviews")
export class ReviewsController {
    private reviews: Reviews[] = [
            {id:1,products:'book',review:'good',rating:'5'},
            {id:2,products:'pen',review:'bad',rating:'2'},
            {id:3,products:'laptop',review:'excellent',rating:'4.5'}

        ]

    //GET: http://localhost:5000/api/reviews
    //GET: ~/api/reviews
    @Get()
    getAllreviews(){
        return  this.reviews
    }

    @Post()
    public createRview(@Body() body: CreateReviewDto){
        // console.log(body);
        //     return body
        const newReview: Reviews = {
            id: this.reviews.length + 1,
            products: body.products,
            review: body.review,
            rating:body.rating
        };
        this.reviews.push(newReview)
        return newReview
    }


    @Get('/:id')
    public getReviewById(@Param('id', ParseIntPipe) id: number){
        const review = this.reviews.find((r) => r.id);
        if (!review) {
            throw new NotFoundException ('Review not found', {description:"no reviews found"});
    }
    return review
}


@Put(':id')
public updateReview(@Param('id', ParseIntPipe) id: number, @Body() body:UpdateReviewDto){
    const review = this.reviews.find((r) =>r.id);
    if (!review) {
        throw new NotFoundException ('Review not found', {description:"no reviews found"});
    }
    return {message: "product updated successfully with id" +id}
}

@Delete(':id')
public deleteReview(@Param('id', ParseIntPipe) id: number){
    const review = this.reviews.find((r) =>r.id)
    if (!review) {
        throw new NotFoundException ('Review not found', {description:"no reviews found"});
        }
        return {message: "product deleted sucessfully"}

}
}