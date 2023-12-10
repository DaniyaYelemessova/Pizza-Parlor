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
    } else if (topping === "no topping") {
      basePrice += 0;
    }
  }

  if (this.size === "medium") {
    basePrice += 5;
  } else if (this.size === "large") {
    basePrice += 10;
  } else {
    basePrice;
  }

  return basePrice;
};

function reset(){
  const form = document.querySelector("#form");
  form.reset();
}


function handlePizzaForm(e) {
  e.preventDefault();
  const orderName = document.getElementById("name").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  const toppingsSelection = document.querySelectorAll("input[name=topping]:checked");
  const toppingsSelectionArray = Array.from(toppingsSelection).map(
    (topping) => topping.value
  );
  if(toppingsSelectionArray.length === 0){
    document.querySelector("#warning").removeAttribute("class");
    return
  }
  document.querySelector("#warning").classList.add("hidden");
  const newPizza = new Pizza(toppingsSelectionArray, sizeSelection);

  const welcomeName = document.querySelector("#welcome");
  welcomeName.textContent = `Thank you for your order, ${orderName}!`;

  const sizeOutput = document.querySelector("#sizeOutput");
  sizeOutput.textContent = `Your size: ${sizeSelection}.`;
  const toppingsOutput = document.querySelector("#toppingsOutput");
  toppingsOutput.textContent = `Toppings: ${toppingsSelectionArray.join(" , ")}`;
  const totalPrice = document.querySelector("#totalPrice");
  totalPrice.textContent = `Final price: $${newPizza.finalPrice()}`;

  reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", handlePizzaForm);
});
