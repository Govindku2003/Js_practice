function sumOfAll(arr){
  let sum=0;

  for(let i=0 ; i<arr.lentgh; i++){
    sum += arr[i];
  }
  return sum;

}  

const arr =[1,2,1,3,2,4,32,45,2];
console.log(sumOfAll(arr));