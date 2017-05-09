//6.16 trow
myFunction(56);
function myFunction(x) {
    try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5)    throw "too low";
        if(x > 10)   throw "too high";
    }
    catch(err) {
        console.log("Input is " + err);
    }
}

//7.2 Object
//Using an Object Literal
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
console.log(person.firstName + " is " + person.age + " years old.");
//Using the JavaScript Keyword new
var persons = new Object();
persons.firstName = "Jon";
persons.lastName = "De";
persons.age = 10;
persons.eyeColor = "black"; 
console.log(persons.firstName + " is " + persons.age + " years old.");

var s = {x:1,y:2}.toString();
console.log(s); //[object Object]
