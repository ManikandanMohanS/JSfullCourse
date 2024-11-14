// Arrays in js


// declaration

/*

let arr1= new Array();
arr1=[1,2,3,4,5];

let arr2=[];           // here we also give float or string datatypes
arr2=[1,2,3,4,5];


let arr3=[1,2,3,4,5];
console.log(arr3);
console.log(arr3[0]);   // we can access using index also
console.log(arr3[2]);

let ex=['mani',  function add(s,u){return s+u;} ,  true,  12,  4.5,  null,  undefined, {name:'mani'}];
console.log(ex);
console.log(ex[1](1,3));


//------------------------------------------------------------------

//in build methods in js array

let veg=['apple','orrange','garbage','beans'];
veg.push('tomato'); //push used to insert at last
console.log(veg);

veg.unshift('carrot');// unshift used to insert at first
console.log(veg);


let rem=veg.pop();   //pop used to delete at last it also return poped element
console.log("poped elemen : "+rem);
console.log(veg);

let rem1=veg.shift();   //shift used to delete at first it also return poped element
console.log("poped elemen : "+rem1);
console.log(veg);


// printing an arr using loop

// using of operator
for(i of veg){
    console.log(i);
}


console.log("***************");

// using in operator
for(j in veg){
    console.log(veg[j]);
}

// to find length of an arr
console.log(veg.length);

for(let a=0;a<veg.length;a++){
    console.log(veg[a]);
}

let arr4=[
 [1,2,3],
 [4,5,6],
 [7,8,9]

]
console.log(arr4);


for(let i=0;i<arr4.length;i++){
    for(let j=0;j<arr4[i].length;j++){
        console.log(arr4[i][j]);
    }
}
*/
//----------------------------------------------------------
/*
let map=new Map();
map.set(1,'lisanth') .set(2,'lokesh') .set(3,'malliga').set('class','cse');
console.log(map);

// get specific element in map

console.log(map.get(2));

// to check key is present or not

console.log(map.get(2));
console.log(map.size);
  //console.log(map.clear());  used to clear map


// print only keys
for(key of map.keys()){
    console.log(key);
}
// print only values
for(key of map.values()){
    console.log(key);
}

for(key of map){
    console.log(key);
}

*/

//----------------------------------------------
/*
let set= new Set();
set.add('bharth');
set.add('banu');
set.add('banu');  // it remove dublicate

set.add('booorah');
console.log(set);


console.log(set.size);
console.log(set.has('banu'));
for(s of set){
    console.log(s);
}

console.log(set.clear());

*/

//-----------------------------------------
//JSON 

let user={
    name :'mani',
    age: 99,
    salary : 9000

}

console.log(JSON.stringify(user));
let q='{"name" : "mani","age":"0"}';

console.log(JSON.parse(q));




//  ----------   date function in js  ----------------

let today=new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getDay());


