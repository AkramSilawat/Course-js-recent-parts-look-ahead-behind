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

function createFunction() {
    function multiplyBy2(num){
        console.log(num * 2)
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);