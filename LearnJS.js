var welcome = "Welcome to javascript";
var num = 32513.1455;

//字串長度，包含空白
console.log(welcome.length);
//找出字串最後一個字
console.log(welcome.charAt(welcome.length-1));
//取得字串第2、3個字元，從0開始
console.log(welcome.substring(1,3));
//取得該字元起始位子
console.log(welcome.indexOf('e'));

//數字轉字串
//方法一：String()
console.log(String(num) + 100 + "已經轉成字串了！");
//方法二：.toString(2~32)
console.log(num.toString() + 100 + "已經轉成字串了！");
console.log(num + 100 + "未轉換！");