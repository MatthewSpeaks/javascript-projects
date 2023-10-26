let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for (item in tortoiseOne) {
   console.log(item.concat(": " + tortoiseOne[item]));
}

/*Which of the following returns -3 when applied to -3.87?

    Math.floor(-3.87)
    Math.random(-3.87)
    Math.round(-3.87)
    Math.trunc(-3.87)
    */

    console.log(Math.floor(-3.87));
    console.log(Math.trunc(-3.87));
    console.log(Math.random(-3.87));
    console.log(Math.round(-3.87));


    let num = Math.floor(Math.random()*10);

    console.log(num);


    let num2 = Math.round(Math.random()*10);

    console.log(num2);



    function randomSelection(arr){
      let index = Math.floor(Math.random()*arr.length);
      return arr[index];
   }

   let happiness = ['Hope','Joy','Peace','Love','Kindness','Puppies','Kittens','Tortoise'];

   for (i=0; i < 8; i++){
      console.log(randomSelection(happiness));
   }
