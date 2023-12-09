Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Describe: Pizza.prototype.finalPrice

Test: "it should calculate final price correctly for pepperoni topping"
Code: const myPizza = new Pizza("pepperoni", "medium");
myPizza.finalPrice()
Expected Output: 37 (base price(30) + topping cost)

Test: "it should calculate final price correctly for pizza without topping"
Code: const myPizza = new Pizza("no topping", "medium");
myPizza.finalPrice()
Expected Output: 30 (base price)