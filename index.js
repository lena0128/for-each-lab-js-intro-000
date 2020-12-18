var animals = ["dog", "cat", "squirrel"];

function iterativeLog(array){
array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
});
}

iterativeLog(animals);
