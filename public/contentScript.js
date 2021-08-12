window.onload = function () {
  getPrices();
  addElement();
};

function getPrices() {
  const orderTotal = document.querySelectorAll(".order-total");

  console.log("order total: ", orderTotal);

  const p = document.querySelectorAll(".thicc");

  console.log(p);
}

function addElement() {
  // create a new div element
  const newDiv = document.createElement("h1");
  newDiv.innerHTML = "HELLO FROM JARED'S EXTENSION";

  // add the newly created element and its content into the DOM
  document.body.appendChild(newDiv);
}
