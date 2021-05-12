import {addPerson} from './sample';

import Student from './Student';

addPerson({"id":2,"name":"Priya"});
console.log("hello world!");

let s = new Student("James");

console.log(s.getFirstName());
console.log(s.subject);