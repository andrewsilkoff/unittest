var testFunc = require("./myfunc");
var assert = require("assert");

describe("Func for string to array conversion", function(){

	it("The Func should return an array", function(done){ /// for async  tests
		testFunc("Apple,Orange,Banana", function(res){
			assert( Array.isArray(res) );
			done();
		});
		
	});

	it("The func should return an arr with the length of 3", function(done){
		testFunc("Apple,Orange,Banana", function(res){
			assert.equal( res.length, 3 );
			done();
		});
	})

	it("Should throw an error if arg is not a string", function(){
		assert.throws(function(){
			testFunc(444);
		});	
	});

	it("Should throw an error if there are no commas", function(){
		assert.throws(function(){
			testFunc("jhdsfjhdsjfhsdkjfhsakj");
		});	
	});



});