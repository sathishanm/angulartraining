function addPerson(person) {
    console.log(person.name);
}
addPerson({ "id": 2, "name": "Priya" }); // valid
addPerson({ "id": 2, "name": "Priya", "address": "some address" }); // valid
// addPerson({ "name":"Priya", "age": 23}); // invalid
