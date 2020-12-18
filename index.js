var animals = ["dog", "cat", "squirrel"];

function iterativeLog(array){
array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
});
}

iterativeLog(animals);

var animals = ["dog", "cat", "squirrel", "tiger"];

function doToArray(array, callback) {
  array.forEach(callback);
}

function changeArray(element, index, array) {
 array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

doToArray(animals, changeArray);
console.log(animals);
