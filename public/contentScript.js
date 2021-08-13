window.onload = function () {
  setTimeout(function () {
    listenForCheckout();
    addElement();
  }, 2000);
};

function listenForCheckout() {
  const checkoutButton = document.querySelector(".btn-checkout.totals-btn");
  checkoutButton.addEventListener("click", clickCheckout);
  console.log(checkoutButton);
}

function clickCheckout() {
  const orderTotal = document.querySelector("dd.order-total").innerHTML;

  console.log("order total at checkout: ", orderTotal);
}

function addElement() {
  // create a new div element
  const newDiv = document.createElement("h1");
  newDiv.innerHTML = "HELLO FROM JARED'S EXTENSION";

  // add the newly created element and its content into the DOM
  document.body.appendChild(newDiv);
}
