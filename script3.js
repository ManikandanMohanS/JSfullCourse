console.log("........operator in js..........");



/*
// 5+7=12
// + is an operator
// 5,7  are operands


console.log("........ unary operator in js..........");
let x=1;
x=-x;
console.log(x);

console.log("........ binary operator in js..........");

// binary operator + , - , * , / , % , **

let s=12,b=5;
let sum=s+b;   // % is used to find remainder  ,    **(exponent) is used to find  12**2==(12)^2 ans=144
console.log(sum);


console.log("........ string concatnation in js..........");
let a="hi";
let b1="hellow";
console.log(a+b1);//hihellow
console.log(a-b1);// NaN


let a1="12";
let b11="6";
console.log(a1+b11);//126

console.log(Number(a1)+Number(b11));//18
console.log(  +a1  +  +b11);// unary + operator is used convert String to number 

console.log("........ assingnment operator  in js..........");
// assingnment operator 
let x1=y=z=3;// chaining assignment
console.log(x1,y,z);


// modify in place +=,-=,*=....
let d =10;
d=d+5;
console.log(d);




//increment decrement  in js

console.log("........ increment decrement  in js..........");
let r=14;
r++;
console.log(r);
r--;
console.log(r);
console.log(--r);
console.log(++r);

//  ************************************************** 

*/



/*

// comparison operators  in j
console.log("........ comparison operators  in js..........");
// numbers comparison
let a=10;
let b=12;
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b);
console.log(a>b);
console.log(a<b);

console.log("string comparison");

// string comparison
let a1='mani';
let b1='javascript';
console.log(a1<b1); // it compares with ascii values

let t1=false;
let t2=0;
console.log(t1==t2);// true     (false==0  , true==1)
console.log(t1>t2);


*/


//*************************************** ******************************************
let a='0';
a=Boolean(a);  //true
let b=0;
b=Boolean(b);//false
console.log(a==b);// false (true != false)

console.log('0'== 0);//true  here it does not consider data types of both
console.log('0'=== 0);//false  here it consider data types of both (===  strict equality)

console.log("null and undefined ");
//null and undefined 
console.log(null == undefined);// true
console.log(null === undefined);// false

console.log(null>0);//false
console.log(null<=0);//true
console.log(null<0);// false

console.log(null==0);// false   (important except null==undefined     all other comparison for return false for nul & undefined)
  


console.log(undefined>0);//false
console.log(undefined<=0);//false
console.log(undefined<0);// false
console.log(undefined==0);// false    undifined is here act as NaN
