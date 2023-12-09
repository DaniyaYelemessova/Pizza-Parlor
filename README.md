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
Expected Output: 30 (base price);

Test: "it should calculate final price correctly for pizza with anchovy topping"
Code: const myPizza = new Pizza("anchovy", "medium");
myPizza.finalPrice()
Expected Output: 34 (base price + anchovy topping);

Test: "it should calculate final price correctly for pizza with artichoke topping"
Code: const myPizza = new Pizza("artichoke", "medium");
myPizza.finalPrice()
Expected Output: 33 (base price + artichoke topping)

Test: "it should calculate final price correctly for medium size pizza"
Code: const myPizza = new Pizza("no topping", "medium");
myPizza.finalPrice()
Expected Output: 35 (base price + medium size)