Array.prototype.isEmpty = function() {
    return this.length  === 0
}

let pilha = []
console.log(pilha.isEmpty())
pilha.push(10)
console.log(pilha.isEmpty())