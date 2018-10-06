function testFunc(str, callbackFunc){

	if(typeof str !== "string"){
		throw new Error("Argument should be a string");
			
	};
	if(str.indexOf(",") == -1){
		throw new Error("Argument should contain a string with commas");
	};
	setTimeout(function(){
		var result = str.split(",");
		callbackFunc(result);
	},1000);

	return

};


module.exports = testFunc;