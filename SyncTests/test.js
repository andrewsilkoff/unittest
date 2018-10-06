var testFunc = require("./myfunc");
var assert = require("assert");

describe("Func for string to array conversion", function(){

	it("The Func should return an array", function(){
		var result = testFunc("Apple,Orange,Banana");
		assert( Array.isArray(result) );
	});

	it("Should return an array with the length of 3", function(){
		var result = testFunc("Apple,Orange,Banana");
		assert.equal(result.length, 3);
	});

	it("Should return the reference array", function(){
		var result = testFunc("Apple,Orange,Banana");
		var refArray = ["Apple","Orange","Banana"];
		assert.deepEqual(result, refArray);
	});

	it("Should throw an error if arg is not a string", function(){
		assert.throws(function(){
			testFunc(444);
		});	
	});



});