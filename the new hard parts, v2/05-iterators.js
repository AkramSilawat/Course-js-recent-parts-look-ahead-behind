// ======== Return function inside a function ======= //

// == iterators

/* We regularly have lists or collections or data 
where we want to go through each item and do 
something to each element */

// const numbers = [4,5,6];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

/*   We're going to discover there's a new beautiful
way of thinking about each element one-by-one */



// -------------------------------------------------------------
/* Function can be returned from other 
function in javaScript! */

// function createNewFunction(){
//     function add2(num){
//         return num+2;
//     }
//     return add2;
// }
// const newFunction = createNewFunction();

// const result = newFunction(3);

// console.log(result)

/*How can we run/call add2 now? Outside of 
createNewFunction? */




// ======== Return Next Element with a Function ======= //

/* We want to create a function that holds both
our array the position we are crrently at in 
our 'strean' of elements and has the ability to 
return the next element */

// function createFunction(array){
//     let i = 0;
//     function inner(){
//         const element = array[i];
//         i++
//         return element;
//     }
//     return inner;
// }
// const returnNextElement = createFunction([4,5,6]);


// How can we access the first element of our list?


// --------------------------------------------------------

//  By calling the returnNextElement

// function createFunction(array){
//     let i = 0;
//     function inner(){
//         const element = array[i];
//         i++
//         return element;
//     }
//     return inner;
// }
// const returnNextElement = createFunction([4,5,6]);

// const element1 = returnNextElement();
// const element2 = returnNextElement();
// const element3 = returnNextElement();
// const element4 = returnNextElement();

// console.log(element1) // 4
// console.log(element2) // 5
// console.log(element3) // 6
// console.log(element4) // undefined!