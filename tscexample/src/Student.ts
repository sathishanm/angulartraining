import Course from './Course';

@Course({
    name: 'Angular 8'
})
export default class Student {
 
    constructor(private firstName:string){ }

    getFirstName():string {
        return this.firstName;
    }

}

    