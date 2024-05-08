class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Linkedlist {
    constructor() {
        this.head = null
    }

    prepend(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
}

const list = new Linkedlist()
list.prepend(1)
list.prepend(2)
list.prepend(3)
console.log(list)