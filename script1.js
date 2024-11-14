console.log("welcome to java script ");
/*

//
//Rules to name a variable
//
//* every variable name should be unique 
//* only '$ ' and _ (underscore) is allowed in variable name ,
//  no other special characters are not allowed 
//* variable allow digits (1,2...) but not at start of variable name
//* case sensitive
//
//
//
// datatypes in js
//
// number data types 
let a=10;
let b=3.14;
let c=-10;
let d=5.89775434;
let e=Infinity;
let f=-Infinity;
let g=NaN; 
 // NaN= not an number
 // NaN + 2 (anynumber)=NaN
 // NaN **0 ==1    note : other number ** NaN =NaN


// to find data type of variable
console.log(typeof(d));



*/

/********************************************************************************* */

/*
//BigInt 
// normal number range ( 2^53 -1)=9007199254740991 



 let limit =9007199254740991n ;  // here we write 'n' in last of number it denotes BigInt 
 console.log(limit);
 console.log(limit + 100n);//bigint data type only do arithmetic operation only with bigint value
 console.log(typeof(limit));


 */


 /**************************************************************/
/*
//string datatype

let intro=" I am M. Manikandan ";
console.log(typeof(intro));
let degree= ' I am CSE student ';// we can also use single quate  for string 
console.log(typeof(degree));

// quate in string 
let q='he said "i am a bad boy"';
console.log(q);


// paragraph backtik symbol 
let para= ` I am M. Manikandan .he said "i am a bad boy"    `;
console.log(para);


//embeting variable in js  only applicable for backtik symbol
let a=`1+2=  ${1+2}`;
console.log(a);
let b=`1+2=  ${para}`;
console.log(b);

let name="Manikandan";
let c=`my name is ${name}`
console.log(c);

*/
/************************************************ */
// boolean datatypes

let isMale=true;
console.log(isMale);

let m1=10<3;
console.log(m1);

// null value
let age=null;
console.log(age);


// undefined 
let dob;
console.log(dob);


// dynamic data type
let c1="manikandan";
console.log(typeof(c1));
c1=90;
console.log(typeof(c1));

