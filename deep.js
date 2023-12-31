

// ========= String ========= //

// (1)--- Template String --- // 

// --- string interpolation:  imperative 

// var name = " Kyle Simpson";
// var email = " getify@gmail.cam";
// var title = "Teacher";

// var msg = "Welcome to this class! Your" + 
// title + " is" + name + ", contact:" + 
// email + ".";

// console.log(msg)


// --- string interpolation:  declarative --- //

// var name = "Kyle Simpson";
// var email = " getify@gmail.cam";
// var title = "Teacher";

// var msg = `Welcome to this class! Your 
// ${title} is ${name}, contact: ${email},`;

// console.log(msg)




// --- Tagged Templates --- //


// --- string interpolation: tagged --- //

//   var amount = 12.3;

//   var msg = formatCurrency
//    `the total for your order is ${amount}`;

//    console.log(msg)




// --- string interpolation: tagged --- //

//    function formatCurrency(strings, ...values){
//     var str = "";
//     for (let i = 0; i < strings.length; i++){
//         if(i > 0){
//             if(typeof values[i-1] == "number"){
//                 str +=`$${values[i-1].toFixed(2)}`;
//             } 
//             else {
//                 str += values[i-1];
//             }
//         }
//         str += strings[i]
//     }
//     return str;
//    }

// console.log(formatCurrency("akram", 2))





// --- Applying Tagged Templates --- //  // -- interpolation: advanced 

// function formatCurrency(strings, ...values){
//     var str = "";
//     for (let i = 0; i < strings.length; i++){
//         if(i > 0){
//             if(values[i-1] && typeof values[i-1] == "object"){
//                 if(values[i-1] instanceof Error){
//                     if(values[i-1].stack){
//                         str += values[i-1].stack;
//                         continue;
//                     }
//                 }
//                 else {
//                     try {
//                         str += JSON.stringify(values[i-1]);
//                         continue;
//                     }
//                     catch (err){}
//                 }
//             }
//             str += values[i-1];
//         }
//         str += strings[i];
//     }
//     console.log(str);
//     return str;
// }

// console.log(formatCurrency("akram", 2))




//------------ interpolation: advanced -----------//

// var v = 42;
// var o = { a: 1, b: [2, 3, 4] };

// logger`This is my value: ${v} and another: ${o}'`



// try {
//     nothing();
// }
// catch (err) {
//     logger`Caught: ${err}`;
// }
// // Caught : referenceError: nothing is not defined
// // at <anontmouse>:2:3

// console.log(logger)




// // ---- Tagged Template Exercise ---- // 

// function upper(strings, values) { }

// var name = "kyle",
//     twitter = "getify",
//     topic = "JS Recent Parts";

// console.log(
//     `Hello ____ (@____), welcome to ____!` ===
//     "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
// );



// // ---- Tagged Template Solution ---- // 

// function upper(strings, values) {
//     var ret = "";
//     for (let i = 0; i < strings.length; i++) {
//         if (i > 0) {
//             ret += values[i - 1].toUpperCase();
//         }
//         ret += strings[i];
//     }
//     return "";
// }

// var name = "kyle",
//     twitter = "getify",
//     topic = "JS Recent Parts";

// console.log(
//     upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
//     "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
// );





// ----- Padding & Trimming ---- //

// var str = "Hello";         //  left start padding

// console.log(str.padStart(5))        
// console.log(str.padStart(8))
// console.log(str.padStart(8, "*"))
// console.log(str.padStart(8, "12345"))
// console.log(str.padStart(8, "ab"))



// right end padding
// console.log(str.padEnd(5))
// console.log(str.padEnd(8))
// console.log(str.padEnd(8, "*"))
// console.log(str.padEnd(8, "12345"))
// console.log(str.padEnd(8, "ab"))


// left start trimming. right end trimming 
// var str = "     some sruff  \t\t";

// console.log(str.trim())
// console.log(str.trimStart())
// console.log(str.trimEnd())







// ======== Array Destructuring ======== //


// ------- Destructuring --------- //  // imperative 


// var tmp = getSomeRecords();

// var first = tmp[0];
// var second = tmp[1];

// var firstName = first.name;
// var firstEmail = first.email !== undefined ? 
//     first.email : 
//     "nobody@none.tld";

//     var secondName = second.name;
//     var secondEmail = second.email !== undefined ? 
//         second.email : 
//         "nobody@none.tld";


// getSomeRecords();


//// -----------------------------------

// var [
//     {
//         name: firstName,
//         email: firstEmail = "nobody@none.tld."
//     },
//     {
//         name: secondName,
//         email: secondEmail = "nobody@none.tld."
//     }
// ] = getSomeRecords();






// -------- REfactoring Code Using Destructuring --------//

// ---------- Normal ---------- //

// function date(){
//     return [1,2,3,4,5];
// }
// var tmp = date();
// var first = tmp[0];
// var second = tmp[1] !== undefined ? tmp[1]: 10;
// var third = tmp[2];
// var fourth = tmp.slice(3)

// console.log(fourth)

// ----------------------------------------------

// ----- Destructuring -----//

// function date(){
//     return [1,2,3,4,5];
// }

// var [first,second,third,...fourth] = date();

// console.log(fourth)





// ---- Sprread Operator & Declaring Destructuring Arrays ---- //

// function date(){
//     return [1,2,3];
// }

// var tmp;
// var [first,
//     second,
//     third,
//     ...fourth] = tmp = date();

// console.log(tmp)





// ------ Declaration & Assignment ------ // 

// function data() {
//     return [1, 2, 3];
// }

// var tmp = data();
// var o = [];

// o[3] = tmp[0];
// o[10] = tmp[1]
// o[42] = tmp[2];
// o[100] = tmp.slice(3)


// console.log(o)

// -----------------------------

// function data() {
//     return [1, 2, 3];
// }

// var tmp;
// var o = [];
// [
//     o[42],
//     ...o[100]
// ] = tmp = data();

// console.log(o)





// ----- Comma Separation ----- //

// function date(){
//     return [1,2,3];
// }
// var tmp = date();
// var first = tmp[0];
// // var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3)

// console.log(fourth)

// -------------------------------

// function date(){
//     return [1,2,3];
// }

// var tmp;
// var [
//     first,
//     ,
//     third,
//     ...fourth
// ] = tmp = date();

// console.log()




// ------- Swap value--------

// var x = 10;
// var y = 20;
// {
//     let tmp = x;
//     x = y;
//     y = tmp
// }
// console.log(x)

// // -------------------


// var x = 10;
// var y = 20;

// [y,x] = [x,y]

// console.log(x)





// ------ Parameter Array ------ //

// function data(){
//     return null;
// }
// var tmp = data() || [];     // undefind
// var first = tmp[0];
// var second = tmp[1];
// var third = tmp[2];
// var fourth = tmp.slice(3)

// console.log(first)


// ---------------------

// // function data(){
// //     return null;             // typError
// // }

// var tmp;
// var [
//     first,
//     second,
//     third,
//     ...fourth
// ] = tmp = data() || [];     // undefind

// console.log(first)


// -------------------------------

// function data(tmp = []){
//     var [
//         first = 10,
//         second =20,
//         third = 30
//     ] = tmp;
// }
// console.log(first)

//--------------------------------

// function data([
//     first = 10,
//     second =20,
//     third = 30
// ] = []){

// }

// console.log(first)





// ----- Nested Array Destructuring ----- // 

// function data() {
//     return [1,[2,3],4];
//     // return [1,undefined,4];
// }

// var tmp = data() || [];

// var first = tmp[0];
// var tmp = tmp[1] || [];
// var second = tmp[0];  
// var third = tmp[1];  
// var fourth = tmp[2];  

// console.log(third)

// --------------------------

// function data() {
//     return [1, 2, 3];
// }

// var tmp;
// var [
//     first = 10,
//     null,        // Error
//     [
//         second,
//         third
//     ] = [],
//     fourth
// ] = tmp = data() || [];     // Error 









// ========= Object ======== //

// ------ Object Destructuring ------ //


// function data() {
//     return { b: 2, c: 3, d: 4};
// }
// var tmp = data();
// var first = tmp.a !== undefined ? tmp.a: 42;
// var second = tmp.b;
// var third = tmp.c;

// console.log(first)

// // ----------------------------------

// function data() {
//     return { b: 2, c: 3, d: 4};
// }

// var {
//     b: second,
//     a: first = 42 ,
//     ...third
// } = data();

// console.log(first)

// // -----------------------------------

// var o = {
//     prop: value,
//     target: source
// };


// var {
//     prop: value,
//     target: source
// } = o;




// ----- Object Assignment Destu=ructuring ----- // 

// function data() {
//     return { b: 2, c: 3, d: 4 };
// }
// var tmp = data();
// var first, second;

// first = tmp.a;
// second = tmp.b;

// console.log(second)

// -----------------------------------

// function data() {
//     return { b: 2, c: 3, d: 4 };
// }
// var tmp;
// var first, second;

// // ({
// //     b: second,
// //     a: first
// // } = data()) ;

// tmp = {
//     b: second,
//     a: first
// } = data();


// console.log(second)





// ------ Object Defuault Assignment ------ // 

// function data() {
//     return;
// }
// var tmp = data() || {}
// var a = tmp.a;
// var b = tmp.b;

// console.log(a)

// // ----------------------

// function data() {
//     return;
// }
// var {
//     a = 42,
//     b
// } = data() || {}


// console.log(a)





// ------ Nested Object Destructuring ------ //

// function data() {
//     return;
// }
// var tmp = data() || {}
// var a = tmp.a;
// var b = tmp.b || {}
// var c = b.c;
// var d = b.d;

// console.log(a)


// function data(){
//     return {
//         a: 1,
//         b: {
//             c:3,
//             d:4
//         }
//     };
// }

// var {
//     a,
//     b: {
//         c,
//         d
//     } = {}
// } = data() || { }






// ------ Default Assignment Q&A ------ // 

// var o1 = {
//     a: {
//         c: 3
//     }
// };

// var o2 = {
//     a:{},
// };

// var o3 = {};


// // -----------------

// var {
//     a: {
//         b = 10,
//         c = 20
//     } = {}
// }  = o3 ;



// ------ Parameter Objects ------- //


// function data(tmp = {}) {
//     var {
//         a,
//         b
//     } = tmp;

// }

// // ---------------------------

// function data({
//     a,
//     b,
//     x
//     } = {}) {
//     // } = {}, x) {

//     }

// data({a: 1, b: 2, x:42}, 42)





// ------ Nested Object & Array Destructuring ------- //


// var obj = {
//     a: 1,
//     b: [500, 5000],
//     c: 3
// };

// var {
//     a,
//     b,
//     b: [
//         w,
//         y
//     ] = [],
//     c
// } = obj;

// console.log(c)









// ========= Further Destructuring ========== // 

// ------ Named Arguments ------- // 

// function lookuoRecord(store = "person-records", id = -1){

// }

// function lookupRecord({
//     store = "person-records",
//     id = -1
// }) {

// }

// lookupRecord( {id:42} );  







// // ------- Destructruring & Restructuring ------- //

// var defaults = {
//     url: "http://some.base.url/api",
//     method: "post",
//     headers: [
//         "Content-Type: text/plain"
//     ]
// };

// console.log(defaults);

// // ---------------------------------------

// var settings = {
//     url: "http://some.base.url/api",
//     data: 42,
//     callback: function(resp) { /*      */ }
// };

// ajax( _.extend({}, defaults,settings) );

// console.log(settings);





// // ---------------------------------

// function ajaxOptions({
//     url = "http://some.base.url/api",
//     method = "post",
//     data,
//     callback,
//     headers:[
//         headers0 = "Content-Type: text/plain",
//         ...otherHeaders
//     ] = []
// } = {} ) {
//     return {
//         url, method, data, callback,
//         headers: [
//             headers0,
//             ...otherHeaders
//         ]
//     };
// }




// // -----------------------------------------

// var defaults = ajaxOptions();

// console.log(defaults);


// var settings = {
//     url : "http://some.other.url/",
//     data: 42,
//     callback: function(resp){/* .. */ }

//     };

//     ajax(ajaxOptions(settings));





// // ------- Destructuring Exercise ------- //

// var defaults = {
//     topic: "JavaScript",
//     format: "Live",
//     slides: {
//         start: 0,
//         end: 100
//     }
// };

// fakeAjax("http://get-the-workshop.tld", handleResponse);


// // **************************************************************


// function handleResponse( /* destructuring here */){
//     testCase({
//         /* restructuring here */
//     });
// }


// function testCase(data){
//     console.log(
//         data.topic == "JS Recent Parts" &&
//         data.format == "Live" &&
//         data.slides.start === 0 &&
//         data.slides.end == 77
//     );
// }




// -------- Destructuring Solution ------- //

// fakeAjax("http://get-the-workshop.tld", handleResponse);

// function handleResponse({

//         topic = "JavaScript",
//         format = "Live",
//         slides: {
//             start = 0,
//             end: 100
//         },
//         ...otherProps
// } = {}) {

//     TestCase({
//         topic, format,
//         slides: {
//             start,end
//         },
//         ...otherProps
//     });
// }












// ========== Array Methods ========== //

// ----- find , findindex , & includes ----- //

// var arr  = [ { a: 1 }, { a: 2 } ];

// arr.find(function match(v){
//     console.log(v && v.a > 1)
//     return v && v.a > 1;
// });  // { a:2 }


// arr.find(function match(v){
//     console.log(v && v.a > 10)
//     return v && v.a > 10;
// }); // undefined


// arr.findIndex(function match(v){
//     console.log(v && v.a > 10)
//     return v && v.a > 10;
// }); // -1



// ----------------------------------- indexOf boolean hanking 

// var arr = [10,20,NaN,30,40,50];

// console.log(arr.indexOf( 30 ) != -1);   // true

// console.log(~arr.indexOf( 20 ));    // -2  (truthy)

// console.log(~arr.indexOf( NaN ));   // -0  (falsy)




// --------------------------------- includes: APl > Syntax

// var arr = [10,20,NaN,30,40,50];      

// console.log(arr.includes( 20 ));    // true

// console.log(arr.includes( 60 ));    // false

// console.log(arr.includes( 20, 3 ));    // false

// console.log(arr.includes( 10, -2 ));    // false

// console.log(arr.includes( 40, -2 ));    // true

// console.log(arr.includes( NaN ));    // true





// ------ flat & flatMap ------ //

// var nestedValues = [1, [2, 3], [[]], [4, [5] ], 6];

// console.log(nestedValues.flat(0));
// // [1, [2, 3], [[]], [4, [5] ], 6];

// console.log(nestedValues.flat());
// // [1, 2, 3, [], 4, [5], 6]

// console.log(nestedValues.flat(2));
// // [1, 2, 3, 4, 5, 6]


//  --------- flatMap ------ //

// [1, 2, 3].map(function tuples(v){
//     console.log([ v * 2, String(v * 2) ])
//     return [ v * 2, String(v * 2) ];
// });

// [1, 2, 3].map(function tuples(v){
//     console.log([ v * 2, String(v * 2) ])
//     return [ v * 2, String(v * 2) ];
// }).flat();

// [1, 2, 3].flatMap(function all(v){
//     console.log([ v * 2, String(v * 2) ])
//     return [ v * 2, String(v * 2) ];
// });


// ----------------------

// [1,2,3,4,5,6].flatMap(function doubleEvens(v){
//     if(v % 2 == 0){
//         console.log([v,v * 2])
//         return [v,v * 2];
//     } 
//     else {
//         console.log([])
//         return [];
//     }
// });
// [ 2, 4, 4, 8, 6, 12]







// ========= iterators & Generators ======= //


// ----------- iterators ------------ // 

// var str = "Hello";
// var world = ["W","o","r","l","d"];

// var it1 = str[Symbol.iterator]();
// var it2 = world[Symbol.iterator]();

// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());


// console.log(it2.next());
// console.log(it2.next());





// ------ Declarative iterators ----- // 

// var str = "Hello";
// var it = str[Symbol.iterator]();

// for(let v of it){
//     console.log(v);
// }

// for(let v of str){
//     console.log(v);
// }

// ///////////////

// var str = "Hello";

// var letters = [...str];

// console.log(letters)




// --------- Data Structure without iterators ------ // 

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// for (let v of obj){
//     console.log(v);
// } // TyprError 
// Error objects not iterables 




// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function() {
//         var keys = Object.keys(this);
//         var index = 0;
//         return {
//             next: () =>
//                 (index < keys.length) ?
//                     { done: false, value: this[keys[index++]] } :
//                     { done: true, value: undefined }
//         };
//     }
// };
// console.log([...obj]);





// ------- Generators -------- //

// function *main() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }
// var it = main();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// console.log([...main()]) ;



// --------------------------------

var obj = {
    a:1,
    b:2,
    c:3,
    *[Symbol.iterator](){
        for (let key of Object.keys(this)) {
            yield this[key];
        }
    }
};
console.log([...obj]);






// ------- iterator & Generator Exercise ---- //

// var numbers = {

// };

// for (let num of numbers) {
//     console.log(num);
// }

// console.log("My lucky numbers are: ____");






// -------- iterator & Generator Solution -------- // 

// var numbers = {
//     *[Symbol.iterator]({
//         strat = 0,
//         end = 100,
//         step = 1
//     } = {}) {
//         for(let i = strat; i <= end; i += step){
//             yield i;
//         }
//     }[user]
// };

// // for (let num of numbers) {
// //     console.log(num);
// // }

// console.log(`My lucky numbers are: ${
//     [...numbers[Symbol.iterator]({`
//         start: 6,
//         end: 30,
//         step: 4
//     })]
// }`);






// ========= Regular Expressions ========= // 

// second commit
// third commit 



























































