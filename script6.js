console.log(" object in js");
/*
let w={};
console.log(w);
console.log(typeof(w));

// example program for car object
let availColor="red, black,blue";
let car={
  name:"Audi",
  price:15000,
  engine:"Diesel",
  color:availColor,
  percentage:0,
  "orgin country": "Germany",
  onroadprice(){
      return 110000;
  },
  discount(){
    return this.percentage+10;
  }

};

console.log(car);

//console.log("car name : "+car.name);

console.log("car orgin : "+car["orgin country"]);

delete car.price;  // here we delete value in object using delete keyword
console.log(car);

// insertion in an object
car['model']=2023;
console.log(car);

//  updation in an object
car['price']=120000;  // another way: car.price = 1200000;
console.log(car.onroadprice());
console.log(car.discount());
console.log(car);

// check any property or attribute that present or not
console.log('engine' in car);
console.log('man' in car);

// display all attribute using for loop

for(key in car){
  console.log(key +"-"+car[key]);
}




// object reference
let a={
  name:'hari',
  age: 12,
}
let b=a;
console.log(a,b);

b.age=17;
console.log(a,b);


*/

//  constructor in javascript

let a={
  name:'niranjan'
}
// both are same
function User(N){
this.name=N;
}

let name1=new User('Raj');
let name2=new User('Kumar');
console.log(name1);
console.log(name2);

//-------------------------------------------------------

function Add(){
   this.x=10;
   this.y=7;
   this.add=function(z){
     return this.x+this.y+z;
   }

}

let sum=new Add();
console.log(sum.add(3));