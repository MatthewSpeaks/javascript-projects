let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

// does not seem to alter the array. 

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log(holdCabinet1.slice(2,4) + holdCabinet2.slice(3,4));
console.log(holdCabinet1);
console.log(holdCabinet2);

// it does not appear to alter the array. 

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log(holdCabinet1.reverse());
console.log(holdCabinet2.sort());

// revers keeps them in the same order, but exactly in reverse. Sort sorts them kind of alphabetically. 