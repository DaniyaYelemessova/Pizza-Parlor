function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.finalPrice = function () {
  let basePrice = 30;

  for (const topping of this.toppings) {
    if (topping === "pepperoni" || topping === "meatballs") {
      basePrice += 7;
    } else if (topping === "anchovy") {
      basePrice += 4;
    } else if (topping === "artichoke") {
      basePrice += 3;
    }
  }

  if (this.size === "medium") {
    basePrice += 5;
  }

  return basePrice;
};

const myPizza = new Pizza(["pepperoni", "artichoke"], "medium");

console.log(myPizza.finalPrice());