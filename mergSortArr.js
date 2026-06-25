function mergeSortedArray(arr1, arr2){

  let  mergeArry =[]
  let i = 0;
  let j = 0;

  while(  i<arr1.length  && j<arr2.length)
  {
    // if arr1 and arr2 both lenth untill same
   
      if(arr1[i] < arr2[j]){
        mergeArry.push(arr1[i])
        i++;
      }
      else{
        mergeArry.push(arr2[j])
        j++
      }
    }

  

  while( i<arr1.length){
    mergeArry.push(arr1[i]);
    i++
  }

  while(j<arr2.length){
    mergeArry.push(arr2[j]);
    j++;
  }

  return mergeArry;
}

const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,9];
console.log(mergeSortedArray(arr1,arr2));


// -------------------------------------------------------------------------------

// OR built in methods


// const arr1 = [1,2,3,4];
// const arr2 = [5,9,7,8];

// const mergeArry = [...arr1, ...arr2].sort((a,b)=>a-b);
// console.log(mergeArry);