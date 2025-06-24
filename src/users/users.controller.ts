import { Module,Get, Controller } from '@nestjs/common';


@Controller()
export class UsersController {
    // GET: http://localhost:5000/api/users
// GET: ~/api/users
    @Get('/api/users')
   
    public getAllUsers() {
        return [
            { id: 1, name: 'Alice', email: 'karim@gmail.com'},
             { id: 2, name: 'Bob', email: 'g@gmail.com'},
            { id: 3, name: 'Charlie', email: 'v@gmail.com'}
        ]; }

        // @Get('/api/users/:id/:')
        // public getUserById(id: number) {
        //     return {id:id, name: 'Alic', email: 'karim@gmail.com'}
        // }
}



