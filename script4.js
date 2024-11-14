console.log("............conditional statement...............");
/*
//if else  statement using ternary operator

let age =20;
let person=(age>18)? 'adult' : 'child';
console.log(person);

// if else if ladder using ternary operator

 age=15;
person=(age>18)?'adult' : (age>12)?'teenager' : 'child';
console.log(person);
//another way
age=19;


(age>18)?
  person='adult' : 
(age>12)?
  person='teenager' : 
   
  person= 'child';

  console.log(person);


  //mcq
  if('0'){
    console.log("hi ");//hi 

  }
    */
/*
// cheak number is + or - or 0

let a=10;

if(a>0){
    console.log(" + ");
}

else if(a<0){
    console.log(" - ");

}

else{
    console.log(" 0 ");

}
*/
/*
//leap year

let year=1718;
if(year%4==0){
   if(year % 100==0  ){
         if(year%400==0){
        console.log(" laep ");
       }
        else{
       console.log(" not laep ");
       }
    }

    else{
        console.log(" laep ");
    }

}

else{
    console.log(" not laep ");

}
*/ 

// *** ***************************************************************************


// logical operator in js
// OR , AND , NOT, NULL Coalesing
console.log(" OR operator ");
console.log(0 || 1);
console.log(1 || 13);
console.log(13 || 0);
console.log(0 || 0 || 17);
console.log(0 || 1 || 0);
console.log(11 ||12 ||0 );



console.log(" AND operator ");

console.log(0 && 1);
console.log(1 && 13);
console.log(13 && 0);
console.log(0 && 0 && 17);
console.log(0 && 1 && 0);
console.log(11 && 12 && 7 );

// NULL Coalesing
console.log("NULL Coalesing");


let a;
let c= a ?? 10;
console.log(c);


let a1=null;
let c1= a1 ?? 13;
console.log(c1);

let a2=8;
let c2= a2 ?? 10;
console.log(c2);
// ***********
console.log("******");
console.log(null || 0 || undefined);
console.log(null && 0 && undefined);
