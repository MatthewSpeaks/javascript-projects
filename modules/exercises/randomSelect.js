// test array
//let randomArr = ['potato', "apple", "Banana", "grape", "Pear", "other", 'Fruit', "celery", "Pumpkin", "Scarecrow", "Witch"];


function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let i = (Math.floor(Math.random() * arr.length));
  return arr[i];
}

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
