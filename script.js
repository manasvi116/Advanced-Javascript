// function sayHello() {
//     let you = prompt("What's your name?");
//     console.log("Hello " + you + "!");
// }
//sayHello();

// let varContainingFunction=function(){
//     let varInFunction="I'm in a function.";
//     console.log("hi there!",varInFunction);
// };
// varContainingFunction();

// function tester(para1,para2){
//     return para1 +" "+ para2;
// }
// const arg1="argument1";
// const arg2="argument2";
// tester(arg1,arg2)
// console.log(tester(arg1,arg2));



// 
//     return parseInt(num1) + parseInt(nufunction addNumbers(num1, num2) {m2);
// }
// const result = addNumbers("10", "20");
// console.log(result);

// CLEAR
// special functions and operators
// arrow funcions
// a function which is inside the function =>

    // THREE TYPES OF VARIABLES :
    // LET , VAR , CONST 
//    let = doingArrowStuff = x=> console.log(x)
// doingArrowStuff("HAPPY BIRTHDAY! DORAEMON ... HURRAH YOU TURNED 20 ");


// let addTwoNumbers= (x,y) => console.log(x+y);
// addTwoNumbers(10,10);


// // iterating and displaying each item
// const arr = ["squirrel", "alpaca", "buddy"];
// arr.forEach(e=> console.log(e));

// SPREAD AND REST OPERATORS

// // SPREAD OPERATOR (...)
// let spread = ["so", "much" , "fun"];
// let message1 = ["javascript" , "is", spread, "and","very", "powerful"];
// let message2 = ["javascript" , "is", ...spread, "and","very", "powerful"];
// console.log(message1);
// console.log(message2);


// 

// let arr =[5,9];
// addTwoNumbers(...arr);

// function addFourNumners(x,y,z,a){
    //     console.log(x+y+z+a)
    // }
    // let arr1 =[5,9];
    // let arr2= [6,7];
    // addFourNumners(...arr1, ...arr2);
    
    
    // rest opeartoe
    
    // function someFunction (param1,...param2){
        //     console.log(param1, param2);
        // }
        // someFunction("hi", "there", "how are you");
        
        // function someFunction (param1, ...param2){
            //     console.log(param1, param2);
            // }
            // someFunction("hi", "there", "how are you");

        
//             function addTwoNumbers(a,b){
//                 return a+b;
            
//             }


// let resultArr=[];
// for(let i = 0 ; i <10; i++){
//     let result= addTwoNumbers(i , 2*i);
//     resultArr.push(result);

// }
// console.log (resultArr);

// immediately invoked function expression 


// this is a code where we are calling anonymous function without storing that in a variable
// (function () {
//     console.log("IIFE");

// })() ; 


// (() => {
//     console.log("run right away");

// })() ; 



// RECURSIVE FUNCTIONS
// in recursion base condition is must #remember 
// // vl
// function logRecursive(nr) {
//     console.log("started function", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1); // this is the recursion
//     } else {
//         console.log("done with recursion");
//     }
//     console.log("ended function", nr);
// }

// logRecursive(3);

// the performance of recusrion is slighlty worse the  he perfprmance of iteration using a looop . so if this causes bottle neck situation that would really  slow down the appication then you might want to go for another approach  ]


// nested function 

// function doOuterFunctionStuff(nr){
//     console.log("outer function");
//     doInnerFuncionStuff(nr);
//     function doInnerFuncionStuff(x){
//         console.log(x+7);

//         console.log("i can access the outer varibales",nr);
//     }
// }
// doOuterFunctionStuff(10);



// function doOuterFunctionStuff(nr){
//     let z;
//     function doInnerFuncionStuff(x){
//         z = 10;  // assign value from inner function
//     }
//     doInnerFuncionStuff(nr);
//     console.log("accessible now:", z);
// }
// doOuterFunctionStuff(10);



// function doOuterFunctionStuff(nr){
//     let z;
//     function doInnerFuncionStuff(x){
//         z = 10;  // assign value from inner function
//     }
   
//     console.log("accessible now:", z);
//     // z is not defined
// }
// // doOuterFunctionStuff(10);



// // anonymous function
// let functionVariable = function(){
//     console.log("not so secret though ");
// };

// functionVariable(); // ✅ Correct

// // Callback example
// // a function pass as an argument in another function
// //  sync - (hence blocking codes)
// // these are synchronous function  

// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("inside do flexible stuff");
// }

// doFlexibleStuff(functionVariable); // ✅ Works now



// most important two inbuilt in functions 
// set time out and set time interval 

// let youGotThis = function(){
//     console.log("you are doing really well, keep coding!")
// };

// setTimeout(youGotThis, 2000);
// it will wait for 2000 ms that us 2 seconds and then it will print 

// if you need more encouragemnet we can use setinterval function it will keep on executin the specified interval
// setInterval(youGotThis, 1000);

// use ctrl c to stop this  

// QUIZ 
// question 1
//  let val = 10;

// function tester(val) {
//     val += 10;
//     if (val < 100) {
//         return tester(val);
//     }
//     return val;
// }

// let result = tester(val);
// console.log (result);

// console.log(val);    

// explanation
// val is 10 in the global scope.
// You pass it to tester(val) → inside tester, it becomes a local copy of val.
// That local val gets modified recursively until it's 100, then returned.
// But you never store the result of tester(val) back to the global val.

// question2 
// let testFunction = function(){
//     console.log("hello");
// }();

// question 3
// iife type
( function(){
    console.log("welcome");
})();
(function(){
    let firstName = "lawrence";
})();
let result = (function(){
    let firstName= "lawrence";
    return firstName;
})();
console.log(result);
(function(firstName){
    console.log("my name is " + firstName);
})("lawrence");


// question 4
let test2 = (num) => num +5 ; 
console.log(test2(14));


// question 5
var addFive1 = function addFive1(num){
    return num + 2;
};
let addFive2 = (num) => num + 2;
console.log(addFive1(14));