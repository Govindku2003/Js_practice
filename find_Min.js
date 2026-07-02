// const readline = require("readline-sync");

function find_Min(arr){
  let min = arr [0];

  for(let i = 1 ; i< arr.length ; i++){
    if(arr[i] < min){
      min = arr[i];

    }
  }
  return min;
}

number = [3,4,2,5,9];
console.log(find_Min(number));
