var sum = function(){}

var sum = function(){return 5+2;}

sum() //7

var sum = function(a, b){return a+b;}
sum(4, 7) //11
sum(4, 7, 3, 8, 44) //11

var sum = function(a, b){
    console.log(arguments);
    var result = 0;
    for(var i=0;i<arguments.length;i++){

        result += arguments[i];
    }
    return result;
}
sum(4, 7, 3, 8, 44) // 66
sum(4, 7) // 11
sum(4) // 4


isNaN(3) // false
isNaN("fdgfdgdfg") // true
isNaN("3") // false

var sum = function(a, b){
    
    var result = 0;
    for(var i=0;i<arguments.length;i++){
        if(!isNaN(arguments[i]))
        result += +arguments[i];
    }
    return result;

}
sum(3, "8") // 11



