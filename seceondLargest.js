function seceondLargest(arr){
  // let largest = arr[0];
  // let seceondLargest= arr[1];
      //  or
       let largest = -Infinity;
  let seceondLargest= -Infinity;

  for(let i = 0; i<arr.length ;i++){
    if(arr[i]>largest){
      seceondLargest = largest;
      largest = arr[i];
      
    }
    else if (arr[i] > seceondLargest && arr[i] !== largest) {
            seceondLargest = arr[i];
  }
}
  return seceondLargest;
}

const arr =[1,2,3,2,4,3,5,6,4,8,66,55,9,];
console.log(seceondLargest(arr));