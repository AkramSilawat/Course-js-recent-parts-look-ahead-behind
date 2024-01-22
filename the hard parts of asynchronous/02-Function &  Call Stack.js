
// (git status)  (git add .)  (git commit -m " " )  git push



// ======= Function & Callbacks ======== // 

// --- tenSquared 

// function tenSquared(){
//     return 10*10;
// }
// console.log(tenSquared());


// // --- nineSquared 

// function nineSquared(){
//     return 9*9;
// }
// console.log(nineSquared());



// // ---- 
// function squaredNum(num){
//     return num*num;
// }
// console.log(squaredNum(10));
// console.log(squaredNum(9));
// console.log(squaredNum(8));






// -------- Repeating Function -------- // 

// function copyArrayAndMultiplyBy2(array){
//     const output = [];
//     for(let i = 0; i < array.length; i++){
//         output.push(array[i] *  2);
//     }
//     console.log(output)
//     return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);




// ----- Higher Order Function ------- //

// function copyArrayAndMultiplyBy2(array){
//     const output = [];
//     for(let i = 0; i < array.length; i++){
//         // output.push(array[i] / 2);
//         output.push(array[i] + 3);
//     }
//     console.log(output)
//     return output;
// }
// const myArray = [1,2,3];
// const result = copyArrayAndMultiplyBy2(myArray);




// ------ Higher Order Function Example ------- // 

// function copyArrayAndManipulate(array, instructions){
//     const output = [];
//     for(let i = 0; i < array.length; i++){
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }
// function multiplyby2(input){ return input * 2; }
// const results = copyArrayAndManipulate([ 1, 2, 3 ], multiplyby2);





// ------ Higher Order Function Q&A ------ // 

// Higher Order Function   

// Higher Order Function Example





// ----- Callbacks & Higher Order Function ----- //

// How was this possible ?

// function in javascript = first class objects

// they can co-exist with and can be treated like any other javascript Object

// 1. Assigned to varibles and properties of other objects
// 2. Passed as arguments into finctions
// 3. Returned as values from functions


///////////////////////////
// function copyArrayAndManipulate(array, instructions){
//     const output = [];
//     for(let i = 0; i < array.length; i++){
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }
// function multiplyby2(input){ return input * 2; }
// const results = copyArrayAndManipulate([ 1, 2, 3 ], multiplyby2);






// ------ Arrow Function -------- // 

function multiplyby2(input) { return input * 2; }

// const multiplyby2 = (input) => { return input * 2; }

// const multiplyby2 = (input) =>  input * 2; 

// const multiplyby2 = input =>  input * 2; 

const output = multiplyby2(3);

console.log(output)




// ------------------------------------------ //

// function copyArrayAndManipulate(array, instructions){
//     const output = [];
//     for(let i = 0; i < array.length; i++){
//         output.push(instructions(array[i]));
//     }
//     console.log(output)
//     return output;
// }
// function multiplyby2(input){ return input * 2; }
// const results = copyArrayAndManipulate([ 1, 2, 3 ], multiplyby2);



// ----- We can even pass in multiplyBy2 directly without a name ----- // 

function copyArrayAndManipulate(array, instructions){
    const output = [];
    for(let i = 0; i < array.length; i++){
        output.push(instructions(array[i]));
    }
    console.log(output)
    return output;
}
// function multiplyby2(input){ return input * 2; } ><
const results = copyArrayAndManipulate([ 1, 2, 3 ], input => input * 2);  // Arrow Function 




