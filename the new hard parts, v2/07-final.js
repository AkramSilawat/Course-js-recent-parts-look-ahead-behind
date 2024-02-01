// ======== Async Await ======= //

/* Async/await simples all this and finally fixes 
the inversion of control problem of callbacks */

async function createFlow(){
    console.log("Me first");
    const data = await fetch('http:/twitter.com/will/tweets/1');
    console.log(data);
}
createFlow();

console.log("Me second");
 




// ========== Wrapping Up =========== // 

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


/* We get to control when we return back to createFlow and continue
   executing - by setting up the trigger to do so
   (returnNextElement.next()) to be run by our function that 
   was triggered by the promise resolutin (when the value returned
   from twitter ) */