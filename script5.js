/*
console.log(" looping in js ");
// for loop 
console.log(" for looping in js ");
let fact=1;
for(let i=1;i<=5;i++){
fact=fact*i;

}
console.log("factorial :"+fact);



//while number

console.log(" while looping in js ");
let n=123;
let rem=0;
let  rev=0;
console.log(typeof(rem));

while(n>0){
    rem=n%10;
    
    rev=rev*10+rem;
    n=n/10;
}
console.log("reverse of number :"+rev);


*/


//fuctions in js
console.log("fuctions in js");


function add1(a, b){
console.log(a+b);
}

add1(5,5);
add1(4);


console.log("fuctions in js default parameter");

function add11(a, b=20){
    console.log(a+b);
    }
    
 add11(5,5);
add11(4);



// scope in function
let c;
function add111(a, b=20){
    let c=a+b; // value of c or scope of c is only inside the {} brackets
    }
    
 add111(5,5);
add111(4);
console.log(c);


function add112(a, b=20){
    let c=a+b;
    return c; //return stmin function
    }
    

console.log(add112(4,5));


// arroaw functoin


let oddEven= (a) => a%2==0? "even":"odd";
console.log(oddEven(3));



let x=90,y=8;

let sub= (a,b)=>{
    return a-b;
}
console.log(sub(x,y));



// callback in js 

function calop(op,a,b){
return op(a,b);
}


let subop= (a,b)=>{
    return a-b;
}
let addop= (a,b)=>{
    return a+b;
}

console.log("add :"+calop(addop,4,3));
console.log("sub :"+calop(subop,4,3));