var counter = 0;
function increment(){
    counter += 1;
    return counter;
}

increment();
// counter = 33;

// ----------------

function increment(){
    var counter = 0;
    counter += 1;
    return counter;
}
increment();

// ---------------
// closure

var increment = (function(){
    var counter = 0;
    return function(){
        return counter += 1;
    }
})()

increment()















