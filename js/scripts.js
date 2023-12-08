function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
console.log(myPizza)