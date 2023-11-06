const shoppingList = ["Coffee", "Aubergine", "Pizza", "Sushi", "Cheese"];
const newElement = "Coke";

let newList = [];

let i = addLastElem(shoppingList, newList, newElement);
console.log(shoppingList, newList);
document.getElementById("first-array").innerHTML = shoppingList;
document.getElementById("second-array").innerHTML = newList;

function addLastElem(array = [], arraytoFill = [], newListElem){
    
    for(let j = 0; j < array.length + 1; j++){
        if (j == array.length){
            arraytoFill[j] = newListElem;
        } else {
            arraytoFill[j] = array[j];
        }
    }

    return arraytoFill;
}