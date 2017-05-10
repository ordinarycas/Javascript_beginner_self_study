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

//7.4通用物件屬性與Method
//constructor屬性
//toString() Method
//toLocaleString() Method
//valueOf() Method
//hasOwnProperty() Method
//propertyIsEnumerable() Method
//isPrototypeOf() Method

//7.7 陣列 Method
//join()
//reverse() 反轉
//sort() 排序 回傳<0往前移
var a = [33,44,5,1111,222];
console.log(a.sort());//字母順序
console.log(a.sort(function(a,b){return a-b;}));//數字大小
console.log(a.sort(function(a,b){console.log(a + "-"+b); return a-b;}));//字母順序
//concat() 連接兩個或多個陣列
var hege = ["Cecilie", "Leo"];
var stale = ["Emil", "May", "Linus"];
console.log(hege.concat(stale));
//slice() 陣列切片
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Raspberry'];
console.log(fruits.slice(0, 3));
// splice(起始 index, 刪除個數，若為0即為插入, 欲插入元素1, 欲插入元素2, 欲插入元素N)
let students = ['Mark', 'Zuck', 'Pony', 'Elon'];
console.log("消除陣列內：" + students.splice(0, 2));
students.splice(1, 0, 'John', 'Cath');
console.log(students); 

let numbers = [1, 2, 3, 4];
for(let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1];
    console.log(numbers); 
}
numbers[0] = 12;
// 參考資料：http://blog.kdchang.cc/2016/06/23/javascript-data-structure-algorithm-array/