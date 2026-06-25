function isSortedArray(arr){


  for(let i=0 ; i<arr.length-1; i++)
  {
    if (arr[i] > arr[i+1])
    {
      return false
    }
  }
  return true;

}
 const arr = [1,2,3,4,5,4,6,7];
 console.log(isSortedArray(arr));
