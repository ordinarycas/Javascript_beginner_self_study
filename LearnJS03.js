var welcome = "6.3 Welcome to javascript ES6??";
var num = 32513.1455;

console.log(Conversion(num));

function Conversion(x){
	console.log("你輸入的資料型態是：" + typeof x);
	if (typeof x == "number") {
		console.log("數值為：" + x);
		console.log("去尾數家100為：" + String(x + 100));
		console.log("已成功轉換成字串型態，取小數點後兩位！！");
		return x.toFixed(2).toString();
	} else {
		console.log("你輸入的字串為：" + x);
		console.log("長度：" + x.length + "，最後一個字元：" + x.charAt(x.length-1));
		console.log("第二個到第四個字元為：" + x.substring(1,4));
		console.log("取得字元e的位子，第一個e在" + (x.indexOf('e')+1) + "個位子");
		console.log("已成功轉換成數字型態！！");
		return parseInt(x, 10);
	}
}
var now = new Date();
var xmas = new Date(2017,04,08); //月份從0開始
console.log(now);
console.log("Today is：" + now.toLocaleString());//取得目前時間和日期
console.log("聖誕節是：" + xmas.getDay());//得到星期幾

//基本資料型態<以值>處理，參考型態<以參考指標>處理
//範例3-1，以值，複製、傳遞、比較
var n = 1;
var m = n;

function add_to_total(total,x){
	total += x;
}
//n,m傳給函式，n的值被複製起來了
add_to_total(n,m);
//if (n == 1) {m = 2;}
console.log(n);
console.log(m);

//範例3-2，以參考指標，複製、傳遞、比較
var sxmas = new Date(2017,11,25); //月份從0開始
var solstic = sxmas;
solstic.setDate(21);
sxmas.getDate(); //回傳21，不是25

function add_to_totals(total,x){
	totals[0] = totals[0]+x;
	totals[1] = totals[1]+x;
	totals[2] = totals[2]+x;
}

console.log(sxmas == solstic);
var solstic_plus = new Date(2017,11,25);
console.log(sxmas != solstic_plus);

var s1 = "Hello";
var s2 = "Hell" + "o";
if (s1 == s2) {console.log("以值做比較");}else{console.log("以參考指標做比較");}

for(var i in o) console.log(i);