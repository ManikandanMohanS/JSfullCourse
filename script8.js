// recursive function
//  - base case
// - update statement
// -recursive call
/*

function factorial(n){
    if(n==0){
        return 1;
    }

  return n * factorial(n-1);
}

console.log(factorial(5));

function sum(n){
    if(n==1){
        return 1;
    }
    
  return n + sum(n-1);
}

console.log(sum(5));
*/

//----------------------------   class   in   js-----------------------
/*
class user{
  name;
  age;

   constructor(name,age){
     this.name=name;
     this.age=age;

   }


  display(){
    console.log('Name ',this.name);
    console.log('Age ',this.age);
  }
}

// object creation

let obj1 =new user();
let obj11 =new user('kkk',67);
console.log(obj1);
obj1.display();
obj11.display();


class emp{
  #name;
  age;

   constructor(name,age){
     this.#name=name;
     this.age=age;

   }


  display(){
    console.log('Name ',this.#name);
    console.log('Age ',this.age);
  }

  get name(){
    return this.#name;
  }

  set name(name){
    this.#name=name;
  }
}

// object creation

let myobj=new  emp('rocky',56);
myobj.display();
myobj.name='tocic';
console.log(myobj.name);

*/


// --------------------- inheritance   ----------------------
/*

class Animal{
 legs;
 tail;
 constructor(legs ,tail){
  this.legs=legs;
  this.tail=tail;
 }

 display(){
  console.log('Leg ',this.legs);
  console.log('tail ',this.tail);
}
}

class human extends Animal{
  nationality;
  constructor(legs ,tail,nationality){
    super(legs,tail);
    this.nationality=nationality;
   }
   display(){
    console.log('Leg ',this.legs);
    console.log('tail ',this.tail);
    console.log('nationality ',this.nationality);
  }

}

let organ =new Animal(2,false);
organ.display();

let h=new human(4,false,'American');
console.log(h);
h.display();

*/

//   error handling in js
let a=undefined;

try{
  console.log(a.name);
}

catch(error){
  throw new SyntaxError();
}