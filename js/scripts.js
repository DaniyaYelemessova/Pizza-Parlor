function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.finalPrice = function(){
  let basePrice = 30;
  if(this.toppings === "pepperoni" || this.toppings === "meatballs"){
    basePrice += 7
  }else if(this.toppings === "anchovy"){
    basePrice += 4
  }else if(this.toppings === "artichoke"){
    basePrice += 3
  }
  
  if(this.size === "medium"){
    basePrice += 5
  }
  return basePrice
}

const myPizza = new Pizza("pepperoni", "medium");

console.log(myPizza.finalPrice())
