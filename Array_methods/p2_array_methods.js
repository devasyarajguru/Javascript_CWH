// delete in Array
let arr = [1,4,6,78,9,5];
// console.log(arr.length);
// delete arr[1];
// console.log(arr);
// console.log(arr.length);

// Concat in Array
// let arr2 = [3,8,5,1,4];
// let arr3 = [13,18,15,11,14];

// let mergeArray = arr.concat(arr2);
// console.log(mergeArray);
// console.log(arr2.concat(arr,arr3))

// Splicing the array
// let mysplice = arr.splice(1,2,66,77);
// console.log(mysplice);
// console.log(arr); // It changes the Array

// // Slicing the array
// let myslice = arr.slice(2);
// console.log(myslice); // It does not affect the original array
// console.log(arr);

// let myarr = [32,56,1225,108,97,5];
// let sortedArr = myarr.sort(); // It sorts the array in alphabetical order
// console.log(sortedArr); 
// console.log(myarr); // It changes the original array

//Array Map Method
let map1 = [2,45,7,8];
let m = map1.map((value,index)=>
{
    return value + index;
}
)
// console.log(m);

// Array Filter Method
let filter2 = [3,6,11,8,15,20];
let f = filter2.filter((a)=>
{
    return a<10;
})
// console.log(f);

// Array Reduce Method
let reduce3 = [1,4,2,5];
let r = reduce3.reduce((h1,h2)=>
{
    return h1 + h2;
})
// console.log(r);

// Map Filter Reduce all methods return New Array