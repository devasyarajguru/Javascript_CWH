let arr = [1,2,3,4,5];

let myarr = arr.reduce(function(a,b)
{
    return a * b;
},1)

console.log(myarr);