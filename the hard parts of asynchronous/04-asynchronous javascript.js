// (git status)  (git add .)  (git commit -m " " )  git push

// ------- Single Threaded Execution ------- //

// const num = 3;

// function multiplyBy2(inputNumber){
//     const result = inputNumber * 2;
//     console.log(result)
//     return result;
// }

// const output = multiplyBy2(num);
// const newOutput = multiplyBy2(10)

// console.log(newOutput)



//  ------- Asynchronicity in JavaScript -------- //

// ---> Slow function blocks fuether code eunning 

// const tweets = ("https://www.duolingo.com/learn");

// // 350ms wait while a request is send to twitter HQ

// displayTweets(tweets);

// // more code to run

// console.log("I want to runnnn!")




// --->>> What if try to delay a function directly using setTimeout ? <<<--- //

// function printHello(){
//     console.log("Hello");
// }

// setTimeout(printHello,1000);
// console.log("Me first");



// --->>> So What about a delay of oms <<<--- //

// function printHello(){
//     console.log("Hello");
// }

// setTimeout(printHello,0);
// console.log("Me first");





// -------- Asyncronous Browser Features -------- //

// --->>> ES5 solution: introducing 'callback function'. and Web Brower APIs <<<--- //

// function printHello() { console.log("Hello"); }

// setTimeout(printHello,1000);

// console.log("Me first");



// -------- Web API Example -------- //

// --->>> ES5 solution: introducing 'callback function'. and Web Brower APIs <<<--- //

// function printHello() { console.log("Hello"); }

// setTimeout(printHello,1000);

// console.log("Me first");




// -------- Web API Rules

// --->>> We're interacting with a world outside of javaScript now - so we need rules <<<--- //

// function printHello() { console.log("Hello"); }

// function blockFor1sec(){ 
//     // blocks in the javascript thread for 1 sec
// }

// setTimeout(printHello,0);

// blockFor1sec();
// console.log("Me first");




// -------- Callback Queue & Event Loop --------- //

// --->>> We're interacting with a world outside of javaScript now - so we need rules <<<--- //


// function printHello() { console.log("Hello"); }

// function blockFor1sec(){ 
//     // blocks in the javascript thread for 1 sec
// }

// setTimeout(printHello,0);

// blockFor1sec();
// console.log("Me first");





// -------- Callback Queue & Event Loop Q&A --------- //

// --->>> We're interacting with a world outside of javaScript now - so we need rules <<<--- //


// function printHello() { console.log("Hello"); }

// function blockFor1sec(){ 
//     // blocks in the javascript thread for 1 sec
// }

// setTimeout(printHello,0);

// blockFor1sec();
// console.log("Me first");




// -------- Callback Hell & Async Exercises --------- //

// --->>> We're interacting with a world outside of javaScript now - so we need rules <<<--- //


// function printHello() { console.log("Hello"); }

// function blockFor1sec(){ 
//     // blocks in the javascript thread for 1 sec
// }

// setTimeout(printHello,0);

// blockFor1sec();
// console.log("Me first");