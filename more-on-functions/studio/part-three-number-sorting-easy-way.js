//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];



function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }

//Sort each array in ascending order.

function sortNumbers (arrNums) {
    let sorted = [];
    if (arrNums.length === 0) {
      return sorted;
    } else {
      // call nim function and splice to add to sorted. 
      sorted.splice(0, 0, (findMinValue(arrNums)));
      arrNums.splice((arrNums.indexOf(findMinValue(arrNums))), 1);
      return sorted.concat(sortNumbers(arrNums));
    }
  }

//Sort each array in decending order.
