const personPrototype = {
    greet: function() {
        console.log(`Olá, meu nome é ${this.name}`)
    }
}

const objCafeneves = Object.create(personPrototype)
objCafeneves.name = "Café Neves"
objCafeneves.greet()
personPrototype.greet()