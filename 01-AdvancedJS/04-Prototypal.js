function Foo(){
	function showName(){
		console.log("Foo function");
	}
	return showName();
}


var f1 = new Foo()
var f2 = new Foo()

f1.sum = function(){console.log("sum numbers")}
f1.sum()
f2.sum()// error

f1.__proto__.div = function(){
    console.log('div func')
}

f1.div()
f2.div()// works fine