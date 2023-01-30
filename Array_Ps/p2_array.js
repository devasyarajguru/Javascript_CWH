<--------Doubt------->
const prompt = require("prompt-sync")({sigint:true}); // This allows to use prompt in server side after installing npm install prompt-sync
let arr = [];
// let myarr = 5;
// let myarr = prompt("Enter size  ");
let i ;

while(arr[i]!=0)
{
    arr[i] = prompt("Enter Element    "  );
    i++;
}
console.log(arr);
console.log(typeof arr);

