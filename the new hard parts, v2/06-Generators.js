
// ======== Generators ========= //

// function *createFlow() {
//     yield 4
//     yield 5
//     yield 6
// }
// const returnNextElement = createFlow();
// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next();

// console.log(returnNextElement)
// console.log(element1)
// console.log(element2)


// What do we hope returnNextElement.next()will return? But how?

// -----------------------------------------------


// function createFlow(array) {
//     let i = 0;
//     const inner = { next :
//             function () {
//                 const element = array[i]
//                 i++
//                 return element;
//             }
//     }
//     return inner;
// }
// const returnNextElement = createFlow([4,5,6]);
// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next();

// console.log(element1) // 4
// console.log(element2) // 5

// And the built in iterators actually produce the next element in the formet: {value: 4}




// ======== Generator Function with Dynamic Darta ======= //

/* this allows us to dynamically set what data 
   flows to us (when we run
   returnNextElement's function) */

// Dout-----

// function *createFlow(){
//     const num = 10;
//     const newNum = yield num  // value not change
//     yield 5 + newNum      // value change
//     yield 6           // value not change
// }

// const returnNextElement = createFlow();

// const element1 = returnNextElement.next();
// const element2 = returnNextElement.next(2);
// const element3 = returnNextElement.next();


// console.log(element1) // 10
// console.log(element2) // 7
// console.log(element3) // 6
 


// Dout---
// ========= introducing Async Generators =========== //

/* We can use the ability to pause createFlow's
running and then restart it only when our data
return */

// function dowhenDataReceived(value){
//     returnNextElement.next(value);
// }

// function* createFlow(){
//     const data = yield fetch('http://twitter.com/will/tweets.1');
//     console.log(data);
// }
// const returnNextElement = createFlow();
// const futureData = returnNextElement.next();

// futureData.then(dowhenDataReceived)




