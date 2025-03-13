/*

for (expression 1; expression 2; expression 3) {
    // code block to be executed
  }
*/


let x ;

for (x =0; x<10; x++){
   // console.log(x)
}

let cars = ["BMW","Mahendra","Tesla","Bajaz"]
let i;

// for (i = 0; i < cars.length; i++ ){
//     console.log(cars[i])
// }


// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:


// for (variable of iterable) {
//     // code block to be executed
//   }

for(i of cars){
    //console.log(i)
}

let a;

let strings = "ksdfdjkldsf43"
for(a of strings){
    //console.log(a)
}



// The JavaScript for in statement loops through the properties of an Object:

// for (key in object) {
//     // code block to be executed
//   }

const person = {fname:"John", lname:"Doe", age:25};


let t;
for(t in person){
    console.log(person[t])
}




// The forEach() method calls a function (a callback function) once for each array element.

const numbers = [45, 4, 9, 16, 25];

numbers.forEach( (x) => {
    console.log(x)
});