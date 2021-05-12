interface Person {
    id:number,
    name:string,
    address?: string
}

function addPerson(person: Person): void {
    console.log(person.name)
}

addPerson({"id":2,"name":"Priya"}); // valid
addPerson({"id":2,"name":"Priya", "address": "some address"}); // valid

// addPerson({ "name":"Priya", "age": 23}); // invalid