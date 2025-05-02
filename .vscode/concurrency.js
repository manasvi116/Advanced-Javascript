
// CONCURRENCY 

// callbacks
// a fucntion passed as an argument in another function and which is then called when the rest of the initial function is finished . 

// function doSomething(callback){
//     callback();
//     console.log("hello manasvi");
// }
// function sayHi(){
//     console.log("hi");
// }
// doSomething(sayHi);
// 

// function jugde(grade){
//     switch (true){
//         case grade =="A":
//             console.log("you got an" , grade, "\namazing");
//             break;
         
//         case grade =="B":
//             console.log("you got a" , grade,  "\nwell done");
//             break;
          
       
//         case grade =="C":
//             console.log("you got a" , grade, "\nalright");
//             break;
         
//         case grade =="D":
//             console.log("you got a" , grade, "\nhmmmm...");
//             break;
//          default:
//             console.log("an" , grade , "\n!what?");  
//     }
// }

// function getGrade (score , callback){
//     let grade;
//     switch(true){
//         case score >=90:
//             grade = "A";
//             break;
//         case score >=80:
//             grade = "B";
//             break;
//         case score >=70:
//             grade = "C";
//             break;
//         case score >=60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback (grade);
// }
// getGrade(90 , jugde);

// setinterval (encourage , 500);
//     function encourage() {
//         console.log("you are doing graet , keep going ");
//     }


// PROMISES
// with promises we can  organize the sequnece of ourcode in a slighlty easier way 

// this function need two parameters and both of that are again a callback and we have called then resolve and reject 
// when resolve is called the promise is presumed to be successful and whatever is bw the arros is returned and used as input for the then() method on the promise object . if reject is called the promise failed and then catch() method on the promise object (if present) is executed with the argument of the reject funtion .

// resolve - .then
// reject - .catch 

// let promise = new Promise(function (resolve, reject) {
//     let x = 20;
//     if (x > 10) {
//         resolve(x);
//     } else {
//         reject("too low");
//     }
// });

// promise.then(
//     function (value) {
//         console.log("Success:", value);
//     },
//     function (error) {
//         console.log("Error:", error);
//     }
// );
// const promise = new Promise((resolve, reject) => {
//     // Initial resolution of the promise
//     resolve("success!");
// })

// .then(value => {
//     console.log(value); // Logs: success!
//     return "we";
// })
// .then(value => {
//     console.log(value); // Logs: we
//     return "can";
// })
// .then(value => {
//     //   console.log(value); // Logs: we
//     //   return "can";
// })
// .then(value => {
//     console.log(value); // Logs: can
//     return "chain";
// })
// .then(value => {
//     console.log(value); // Logs: chain
// })

// // Error handling block (in case any .then throws an error or reject is called)
// .catch(error => {
//     console.log("Error:", error);
// });




// async and await 

// with the async keyword we can make function retrun a promise (non concurrent code). this make the promise nicer to read and look a lot like sybchronius code . 
// more powerful await keyword to wait until the promise is done awiat only works in an asynchronous function

// function saySomething(x){
//     return new Promise(resolve=> {
//         setTimeout(() =>{
//             resolve("something " + x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     // without await - pending 
//     console.log(words);
    
// }
// talk(2);
// talk(4);
// talk(8);

// after 2 seconds the theree functions are done at the same Time.
// executed in 2 seconds
// without await each function will take 2 seconds and total time will be 6 seconds

// EVENT LOOP 
// js is a single threaded language. A thread in this context means a path of executon .I f there is only a single path this means the task has to wait for one another and only the one thing can happen at at time .
// This single executor is the event loop . Its a process thet executes the actual TextTrackList. well even though js is single threaded it does not mean that it cannot outsource some task and wait for them to come back . this is exactly how the js manages to do things in  a multithreaded manner.

// CALL STACK AND CALLBACK QUEUE 
// THE EVENT LOOP IS A PROCESS THAT IS CONSTANTLY MONITORING THIS CALL STACK , AND WHENEVER THERE ARE TASK TO DO THE EVENT LOOOP DOES THEM ONE BY ONE AND TASK ON TOP GETS EXECTUED AT FIRST 


console.log();
add(4,5); // <- This runs but doesn't show the result

function add(x,y){
    return x + y;
}

console.log("hi there");
setTimeout(() => console.log("sorry i am late"), 1000);
console.log(add(4,5));

function add(x,y){
    return x + y;
}
 
// until and unless callstack will become empty , the callback queue will not be called
// the setTimeout() task gets outsourced to the browser's web api .
// when the ccallstack is empty the event loop will check the callback queue for work to do . if there are any callabcks waiting they will be executed one by one after every action the veent loop will check the call stack for wrok first 

console.log("hi there");
setTimeout(() => console.log("soory i am late"), 0);
console.log(add(4,5));

function add(x,y){
    return x + y;
}

// this will output the exact same thing setTimeout will also be outsourced when the timer is at 0 , the callback is placed in the callback queue right away but the event loop wont even check the callback queue until the callstack is empty  