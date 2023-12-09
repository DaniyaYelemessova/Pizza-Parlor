## <div align="center">Pizza Parlor</div>

#### <div align="center">💻 _Learning project for practicing Constructors and prototypes in JavaScript  12/08/2023_ </div>

**_<p align="right">By Daniya Yelemessova_**</p>

<p align="center">
  <img src="images/js.png" alt="js" width="30"/>
</p>

<div><img src="images/screenshot.png" alt="screen of the program" width="50%" display="block" margin-left="auto" margin-right="auto"/></div>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🛠️ _Technologies used:_

- HTML
- CSS
- JavaScript
- Visual Studio Code
- GIT

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

```
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

Test: "it should calculate final price correctly for medium size pizza and topping"
Code: const myPizza = new Pizza("pepperoni", "medium");
myPizza.finalPrice()
Expected Output: 42 (base price + pepperoni topping + medium size)

Test: "it should calculate final price correctly for medium size pizza and two different toppings"
Code: const myPizza = new Pizza(["pepperoni", "artichoke"], "medium");
myPizza.finalPrice()
Expected Output: 45 (base price + pepperoni topping + artichoke topping  + medium size)

```
