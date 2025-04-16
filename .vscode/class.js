// classes and objects IF JAVASCRIPT 


// let dog = { dogName :"javascript",
//     weight : 2.4 ,
//     color : "brown",
//     breed: "lebra"
// };


class ClassName {
    constructor(prop1 , prop2){
        // these are varibales of functions

        this.prop1 = prop1;
        // this is class template attribute 
        this.prop2 = prop2;

        // this -  calling the currebt calling functio

    }
}
let obj = new ClassName("arg1" , "arg2");
console.log(obj.prop1);
console.log(obj.prop2);


// this keyword refers to the object itbelongs to ,so it is the first property of the instance of classname 
// and classses are just some special functon beneath the function  

class Dog{
    constructor(dogNAME , weight , color , breed){
        this.dogNAME= dogNAME;
        this.weight= weight;
        this.color= color;
        this.breed = breed;
    }
}
let dog = new Dog("javascript" , 2.4 , "brown" , "lebra");
console.log(dog.dogNAME , "is a", dog.weight , "weighted" , dog.color , dog.breed , "dog");
console.log(dog.weight);
console.log(dog.color);
console.log(dog.breed);

// there can only be one constructor in the class 
// it is awlays convention to start the class name with the capital letter 
// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname =lastname;
//     }
// }


// console.log(p.firstname);
// console.log(p.lastname);
// console.log ("hi",p.firstname,p.lastname)



// METHODS IN JAVASCRIPT 

// FUNCTIONS ON A CLASS ARE CALLED METHODS . WHEN DEFINING THESE METHIDS WE DONT NEED TO USE THE FUNCTION KEYWORD AND WE DIRECTLY START WITH THE NAME


class Person {
    constructor(firstname , lastname){
        this.firstname = firstname;
        this.lastname = lastname;
       
    }


greet(){
    console.log("hi there i am " , this.firstname );
}

compliment(name , object){
    return("thats a wonderful " + object + " " + name);
}
}
let p = new Person ("manasvi " , "arora " );
let compliment = p.compliment("harry " , "hat");
console.log(compliment);
// let p = new Person ("manasvi " , "arora " );
// p.greet();