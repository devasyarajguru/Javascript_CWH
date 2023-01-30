let arr = [1,3,30,20,5,7,40];

let f = arr.filter(
    function myfil(a)
    {
        if(a%10==0)
        {
            return a;
        }
    }
)
console.log(f);