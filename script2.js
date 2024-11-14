// type casting in js

/*
console.log('12'/'2');
console.log('5'*'2');
console.log('12'-'10');

console.log('11'+'1'); // + operator it 11 and 1 as string
console.log("......number to string ........");
// number to string 
let a=23;
console.log(typeof(a));
a =String(a);
console.log(typeof(a));

console.log("......boolean........");
//boolean
let b=true;
console.log(typeof(b));
b=String(b);
console.log(typeof(b));


console.log("......string to number ........");
// string to number
let a1='23';
console.log(typeof(a1));
a1 =Number(a1);
console.log(typeof(a1));


let a2='mani';
console.log(typeof(a2));
a2 =Number(a2);
console.log(typeof(a2));
console.log(a2); // mani is NaN


let a3=true;
console.log(typeof(a3));
a3 =Number(a3);
console.log(typeof(a3));
console.log(a3); //true  is  1    false is 0
*/

/**************************************************************************** */


// boolean type convertion
console.log(".......boolean type convertion........");
let c=0;
console.log(typeof(c));
c=Boolean(c);
console.log(typeof(c));   // here other than 0 any positive or negative integer will return true
console.log(c);


// string t0 boolean
console.log(".......string typeboolean........");

let c1='';
console.log(typeof(c1));
c1=Boolean(c1);
console.log(typeof(c1));   
console.log(c1);
  //***important notes : any value (except ''   or   0) any character will return   true  //

let c11='false';
console.log(typeof(c11));
c11=Boolean(c11);
console.log(typeof(c11));   
console.log(c11);
