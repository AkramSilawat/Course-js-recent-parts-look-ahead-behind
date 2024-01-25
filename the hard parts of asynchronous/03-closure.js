// (git status)  (git add .)  (git commit -m " " )  git push



// ------ Closure introduction ------ //

// ==== Closure 

// - Closure is the most esoteric of javaScript conceots
// - Enables powerful pro-level function like 'once'and 'memoize'
// - Many JavaScript design patterns including the module pattern use closure
// - Build iterators, handle partial application and maintain state in an asynchronous world


// ----- Function get a new memory every run/invocation

// function multiplyBy2 (inputNumber){
//     const result = inputNumber*2;
//     console.log(result)
//     return result;
// }

// const output = multiplyBy2(7);
// const newOutput = multiplyBy2(10);




// ------ Return Functions ------ //

// function createFunction() {
//     function multiplyBy2(num) {
//         console.log(num * 2)
//         return num * 2;
//     }
//     return multiplyBy2;
// }

// const generatedFunc = createFunction();
// const result = generatedFunc(3);





// ----- Nested Function Scope ---- //

// function outer() {
//     let counter = 0;
//     function incrementCount() {
//         counter++;
//     }
//     incrementCount();
// }
// console.log(outer());



// ------ Retaining Function Memory ------ //

// function outer (){
//     let counter = 0;
//     function incrementCount(){ counter ++; }
//     return incrementCount;
// }
// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();




// ------- Function Closure ------- //

// Calling a function outside of the function call in which it was defined //

// function outer (){
//     let counter = 0;
//     function incrementCount(){ counter ++; }
//     return incrementCount;
// }
// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();



// ------- Closure Q&A------- //

// Calling a function outside of the function call in which it was defined //

// function outer (){
//     let counter = 0;
//     function incrementCount(){ counter ++; }
//     return incrementCount;
// }
// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();





// ------- Closure Techincal Definition & Review ------- //

// Calling a function outside of the function call in which it was defined //

// function outer (){
//     let counter = 0;
//     function incrementCount(){ counter ++; }
//     return incrementCount;
// }
// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();




// -------- Multiple Closure instances -------- // 

// Let`s run outer again //

// function  outer () {
//     let counter = 0;
//     function incrementCount(){
//         counter ++;
//     }
//     return incrementCount;
// }

// const myNewFunction = outer();
// console.log(myNewFunction());
// myNewFunction();

// const anotherFunction = outer();

// console.log(anotherFunction());
// anotherFunction();