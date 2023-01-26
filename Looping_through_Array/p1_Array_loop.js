let arr = [1,4,5,6,8];

for(let i=0;i<arr.length;i++)
{
    // console.log(arr[i]);
}

// forEach loop 

arr.forEach((x)=>
{
    console.log(x*x);
})

let num2 = [1,2,5,7];

num2.forEach((y)=>
{
    console.log(y*y);
})

// Array.from -- Converts HTML collection to Array form

// let hello = {
//     hey:'hii',
//     hola:'ww'
// };  -- // returns []
let hello = 'Devasya';
let myarr = Array.from(hello);
console.log(myarr);


// of.. loop
for(let x of num2)
{   
    console.log(x);
}

// in.. loop
for(let c in num2)
{
    console.log(c);
}