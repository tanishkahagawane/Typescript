//Primitve: number, string,boolean
let age:number;   //note : Number is object , number is primitive tyoe
age = 12;

let userName: string;
userName = 'Max';

let isIntructor:boolean;
isIntructor=true;

//More complex types:arrays,objects

let hobbies:string[];

hobbies = ['Sports','Reading'];

let person:{
    name:string,
    age:number,
};
person={
    name:'Max',
    age:32
}
// person={
//     isEmployee:true   //Error
// }

//we can combine two
let people:{
    name:string,
    age:number,
}[];


//Type inference
//The TypeScript compiler will automatically infer the type of the variables based on the values assigned to them

let course = 'React - The complete guide';
//course = 12342;   // error because do type inference

// if we want two diff kinds of types use - UNION types

let course1:string | number | boolean = 'React'
course1=1222;

//////////////////////////////////////
//alias
//Type Aliases allow defining types with a custom name (an Alias)
type Name = string;

let userNamee: Name = "John Doe";

console.log(userNamee); // Output: John Doe

/////////////////////////
//Function  and types,parameters

function add(a:number,b:number){
    return a+b
}

//internally this inferred as 
// function add(a:number,b:number){
//     return a+b
// }:number

//we can set it as well
// function add(a:number,b:number):number{
//     return a+b
// }

//functions when we work with types don't just use types for the paframeters , but also for the return value

function printoutput(value:any){
    console.log(value)
}
//This function is doesn't return a value , therfore the return type is void
//void is comparable to null and undefined , but its only used in conjuction with functions
//and it means that this function never returns .
/////////////////////////////////////////////////////////////////////
//Generics
/*
Generics allow creating 'type variables' which can be used to create classes, functions & type aliases 
that don't need to explicitly define the types that they use.Generics makes it easier to write reusable code.
*/

//Issue - 
// function insertAtBeginning(array:any[],value){
//     const newArray = [value,...array];
//     return newArray;
// }
// const demoArray = [1,2,3];
// const updateArray=  insertAtBeginning(demoArray,-1);  //[-1,1,2,3]
// //But type of this is ANY
// const updateStr=  insertAtBeginning(['a','b','c'],'d'); //type - ANY

//Solution - Generics 
function insertAtBeginning<T>(array:T[],value:T){
    const newArray = [value,...array];
    return newArray;
}
const demoArray = [1,2,3];
const updateArray=  insertAtBeginning(demoArray,-1);  //[-1,1,2,3] //But type - number
const updateStr=  insertAtBeginning(['a','b','c'],'d'); //type -string