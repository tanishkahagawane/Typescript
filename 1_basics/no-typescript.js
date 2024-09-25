// function add(a, b) {  // this does not expect any perticular type
//   return a + b;
// }

// const result = add(2, 5);

// console.log(result);  //  7
//////////////////////////
// function add(a, b) {  // this does not expect any perticular type
//   return a + b;
// }

// const result = add('2', '5');

// console.log(result);  //25
////////////////////////////
//Typescript
function add(a:number, b:number) {  
  return a + b;
}

const result = add('2', '5');  //Error

console.log(result);  
