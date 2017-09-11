var calc = function(operand1, operand2, operator){
    var result = operator(operand1, operand2) // function
    console.log(result)
}


calc(2, 6, function(a, b){console.log("adding two numbs"); return a + b;});
calc(12, 6, function(a, b){console.log("minus two numbs"); return a - b;});
// calc(2, 6, "+");


// =====================

var operators = {
    "+": function(a, b){console.log("adding two numbs"); return a + b;},
    "-": function(a, b){console.log("minus two numbs"); return a - b;},
    "*": function(a, b){console.log("multiply two numbs"); return a * b;}
}

var calc = function(operand1, operand2, operator){
    console.log(operators[operator]);
    return operators[operator](operand1, operand2);
}

calc(3, 7, "*");