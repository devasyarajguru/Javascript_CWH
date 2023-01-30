const prompt = require("prompt-sync")({sigint:true}); // This allows to use prompt in server side after installing npm install prompt-sync
let arr = [];
// let myarr = 5;
let myarr = prompt("Enter size  ");

for(let i=0;i<myarr;i++)
{
    arr[i] = prompt("Enter Element " + (i+1) + '  ' );
}
console.log(arr);
console.log(typeof arr);