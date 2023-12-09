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
    }else if(topping === "no topping"){
      basePrice += 0
    }
  }

  if (this.size === "medium") {
    basePrice += 5;
  }else if(this.size === "large"){
    basePrice += 10
  }else{
    basePrice
  }

  return basePrice;
};


function handlePizzaForm(e){
  e.preventDefault();
};


document.addEventListener("DOMContentLoaded", function(){
  const form = document.querySelector("#form");
  form.addEventListener("submit", handlePizzaForm)
})