var Restaurant = function(){
    this.serve = function(dish1, dish2){
        console.log(this.name,"Welcomes You");
        console.log("\tWe are happy to serve you: ", dish1)
        console.log("\tWe are happy to serve you: ", dish2)
    }
}

// var pizzaHut = new Restaurant()
// var macD = new Restaurant()

var restaurant = new Restaurant();

var context = {name: "MacD"}
// var context = {name: "PizzaHut"}
var dishes = ['Coke', 'Pizza', 'Tea', 'ComboPack'];

// restaurant.serve(dishes);
restaurant.serve.apply(context, dishes);
restaurant.serve.call(context, dishes[0], dishes[2]);

var func = restaurant.serve.bind(context);
func(dishes[0], dishes[2])



