function testFunc(str){

	if(typeof str !== "string"){
		throw new Error("Argument should be a string");
	}

	return str.split(",");
};


module.exports = testFunc;