function find_max(arr){
  let max = arr[0];

  for(i=1; i<arr.length ; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max;
}

number =[2,4,8,6,4,9,5];
console.log(find_max(number));