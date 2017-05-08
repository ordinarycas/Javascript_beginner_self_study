test(1);

function test(o){
	var i = 0;
	if(typeof o == "object"){
		var j = 0;
		for(var k = 0 ; k < 10 ; k++){
			console.log(k);
		}
		console.log(k);
	}
	console.log(j);
}