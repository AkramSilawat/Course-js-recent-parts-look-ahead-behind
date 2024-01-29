
// ========= introducing Asynchronicity ========== //

// == Solution 1

// function display(data){
//     console.log(data);
// }

// const dataFromAPI = fetchAndWait('https://twitter.com/will/tweets/1');

// // ... user can do NOTHING here
// // ... could be 300ms, could be half a second
// // they're just clicking and getting nothing

// display(dataFromAPI);

// console.log("Me later!")


// == Problems

// - Fundamentally untenabke-blocks our single javascript thread from running any further code while the task completes


// == Benefits

// - It's easy to reason about 






// =========== Asynhronous Web Browser APIs =========== //

// Solution 2- introducing Web Browser APIs/ Node background threads

// function printHello(){
//     console.log("Hello");
// }

// setTimeout(printHello, 1000);

// console.log("Me first!");






// =========== Asynhronous Web Browser APIs Q&A =========== //

// We're interacting with aworld outside of JavaScript now - so we need rules

// function printHello(){
//     console.log("Hello");
// }

// function blocksFor1Sec(){
//     // blocks in thr javaScript thread for 1 second
// }

// setTimeout(printHello,0);
  
// blocksFor1Sec()
// console.log("Me first")





// ============ Wrapping Up Web Browser APIs ========= //

// == Problems

// - No problems!
// - Our respons data is only available in the callback function-Callback hell
// - Maybe it feels a little odd to think of passing a function into another function only for it to run much later


// == Benefits

// - Super explicit once you understand how it works under-the-hood






// ============ Asynchronous Exercises ============== // 

// == Pair Programming

// Anser these:

// - I know what a variable is
// - I've created a function before
// - I've added a CSS style before
// - I have implemented a sort algorithm(bubble,merge etc)
// - I can add a method to an object's prototype
// - I understand the event loop in javaScript 
// - I understand 'callback functions'
// - I've implemented filter from scratch
// - I can handle collisons in hash tables
