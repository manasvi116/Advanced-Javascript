
// CONCURRENCY 

// callbacks
// a fucntion pass as an argument in another function 

// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("hi");
// }
// doSomething(sayHi);

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
// when resolve is called the promise is presumed to be successful and whatever is bw the arros is returmed and used as input for the then method on the promise object . if reject is called the promise failed and then catch method on the promise object (if present) is executed with the argument of the reject funtion .


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
const promise = new Promise((resolve, reject) => {
    // Initial resolution of the promise
    resolve("success!");
})

.then(value => {
    console.log(value); // Logs: success!
    return "we";
})
.then(value => {
    console.log(value); // Logs: we
    return "can";
})
.then(value => {
    console.log(value); // Logs: can
    return "chain";
})
.then(value => {
    console.log(value); // Logs: chain
})

// Error handling block (in case any .then throws an error or reject is called)
.catch(error => {
    console.log("Error:", error);
});




// async and await 
