
// ========= Promises =========== //

/* Solution 3 - Using two-pronged 'facade' 
function that both initiate background web 
browser work and return a placeholder Object
(promise) immediately in javaScript */

// function display(data) {
//     console.log(data);
// }
// const futureData = fetch('https://twitter.com/will/tweets/1');

// futureData.then(display);
// console.log("Me first!");





// =========== Promises & Microtask Queue ======== //

/* But we need to know how our promise- 
deferred functionality gets back into JavaScript 
to be run */

// function display(data){ console.log(data)}
// function printHello(){ console.log("Hello")}
// function blocksFor300ms(){ /* blocks js thread for 300ms with long for loop */}

// setTimeout(printHello,0);

// const futureData = fetch('https://twitter.com/will/tweets/1');
// futureData.then(display);

// blocksFor300ms();

// // which will run first ?

// console.log("Me first!")


// We need a way of queuing up all this deferred functionality 





// ======== Wrapping Up Promises ========= //

// == Problems

// - 99% of devlopers have no idea how they're working under the hood
// - Debugging becomes super-hard

// == Benefits

// - Cleaner readable style with pseudo-synchronous style code
// - Nice error handling process
