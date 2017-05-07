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