const person = {
    name: "Creeper Neves",
    age: 400,
    city: "Pochone"
};
 Object.seal(person);
 person.age = 30
 person.gender = "masculino"
 console.log(person)