// function sortedArr(arr){


//   for(let i= 0; i<arr.length-1; i++)
//   {
//     for(let j = 0; j<arr.length-i ; j++)
//     {
//       if(arr[j]>arr[j+1]){
//         let temp =  arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=temp;

//       }

//     }
//   }
//   return arr;
// }

// const arr = [9,6,7,5,8,4,2,3,1];
// console.log(sortedArr(arr));


// ----------------------------------------------------------

// or  bild in methoads usingg

const arr = [9,6,7,5,8,4,2,3,1];

arr.sort((a,b)=> a-b);
console.log(arr);