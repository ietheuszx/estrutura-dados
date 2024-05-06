let array = [1, 2, 3, 4, 5]
let everNumber = array.find(function(element){
    return element % 2 === 0;
});
console.log(everNumber)