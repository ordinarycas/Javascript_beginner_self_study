//switch 舉例
console.log(convert("123"));

function convert(x){
	switch(typeof x){
		case 'number':
			return x.toString(16);
		case 'string':
			return '"' + x + '"';
		case 'boolean':
			return x.toString().toUpperCase();
		default:
			return x.toString();
	}
}

var person = {fname:"John", lname:"Doe", age:25}; 
var text = "";
var x;
for (x in person) {
    text += person[x]+" ";
}
console.log(text);

//識別字（identifier），標籤（label）
var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
list: {
    text += cars[0] + "  "; 
    text += cars[1] + "  "; 
    text += cars[2] + "  "; 
    break list; //跳出此標籤
    text += cars[3] + "  "; 
    text += cars[4] + "  "; 
    text += cars[5] + "  "; 
}
console.log(text);

//範例6.11
outerloop:
	for (var i = 0; i < 10; i++) {
		innerloop:
		for (var j = 0; j < 10; j++) {
			if (j > 3) break;
			if (i == 2) break innerloop;
			if (i == 4) break outerloop;
			console.log("i = "+i+"，j = " + j);
		}
	}
console.log("FINAL i = "+i+"，j = " + j);