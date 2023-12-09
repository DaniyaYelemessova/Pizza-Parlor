function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.finalPrice = function(){
  let basePrice = 30;
  if(this.toppings === "pepperoni"){
    basePrice += 7
  }
  return basePrice
}

const myPizza = new Pizza("no topping", "medium");

console.log(myPizza.finalPrice())
