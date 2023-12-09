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
- Test-Driven Development

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🚥 _Installation and USAGE_

<details>
To set up and use this project locally for development or testing purposes, follow these steps:

To get started, you'll need to clone this repository to your local machine. Open your terminal or command prompt and use the following command to do so:
1. git clone https://github.com/DaniyaYelemessova/Pizza-Parlor.git
2. Navigate to the Project Directory, using **cd**
3. Open the project using **code .**
4. Customize your pizza:
      * Choose your desired toppings by checking the checkboxes (meatballs, pepperoni, artichoke, or anchovy)
      * Select the pizza size from the available options
5. Click the "Order" button to see the calculated final cost for your customized pizza.
6. Enjoy your personalized pizza experience with Pizza Parlor!
</details>

## <div align="center"> ⌨️ _Tests_

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


### <div align="center"> 🤔 _Description:_

_Pizza Parlor_

"Pizza Parlor" is a web application that enables users to customize their pizza orders. Users can select individual toppings, such as meatballs, pepperoni, artichoke, and anchovy, along with choosing the size of the pizza. The application utilizes a pizza object constructor with properties for toppings and size. It includes a prototype method that calculates the final cost based on the user's selections. This project provides a straightforward and interactive platform for pizza customization and order placement.


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> <img src="images/github.png" alt="github icon" width="30px"> _Link to site on Github Pages:_

- [GitHub page link](https://github.com/DaniyaYelemessova/Pizza-Parlor.git)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> _Known Issues_

-no known issues at this time.

## <div align="center"> 📬 _Contact Information_

#### For any questions _[LinkedIn](www.linkedin.com/in/daniya-collings)_

## <div align="center"> 📘 _License and copyright:_

> **_© Daniya Yelemessova, 2023_**  
> ⚖️ _[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)_


