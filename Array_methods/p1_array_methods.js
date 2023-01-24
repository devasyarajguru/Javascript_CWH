let arr = [1,3,4,7,8]
// console.log(arr);

// converts an array to string
let a = arr.toString();
// console.log(a);
// console.log(typeof a);

// joins array elements with separator
let b = arr.join("_");
// console.log(b);
// console.log(typeof b);

// removes the last element from the array and returns it
// let c = arr.pop();
// console.log(c,arr);

// add the last element in array and returns the total length
// let d = arr.push(9);
// console.log(d,arr);

// removes the first element from array and returns it
// let e = arr.shift();
// console.log(e,arr);

// add the first element in array and returns the total length
let f = arr.unshift(2);
console.log(f,arr);