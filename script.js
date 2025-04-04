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

        
            function addTwoNumbers(a,b){
                return a+b;
            
            }


let resultArr=[];
for(let i = 0 ; i <10; i++){
    let result= addTwoNumbers(i , 2*i);
    resultArr.push(result);

}
console.log (resultArr);