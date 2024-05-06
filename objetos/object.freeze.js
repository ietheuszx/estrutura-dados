const person = {
    name: "Gustavo",
    age: 16,
    city: "Canellas"
};
Object.freeze(person);
person.age = 400
console.log(person)