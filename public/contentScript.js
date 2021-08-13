window.onload = function () {
  setTimeout(function () {
    listenForCheckout();
    addElement();
  }, 2000);
};

function listenForCheckout() {
  const checkoutButton = document.querySelector(".btn-checkout.totals-btn");
  checkoutButton.addEventListener("click", clickCheckout);
}

function clickCheckout() {
  const productDivs = document.querySelectorAll("div.product-info");

  let productsList = [];
  productDivs.forEach((product) => {
    let newProd = new Product();
    const aTag = product.firstChild;
    const aTagChildren = [...aTag.children];
    aTagChildren.forEach((child) => {
      const childClasses = [...child.classList];
      console.log("childClasses: ", childClasses);
      if (childClasses.includes("product-info__brand-name")) {
        newProd.brandName = child.innerHTML;
      }
      if (childClasses.includes("product-info__product-name")) {
        newProd.productName = child.innerHTML;
      }
    });
    console.log(newProd);
    productsList.push(newProd);
    console.log(productsList);
  });

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

class Product {
  constructor(brandName, productName, salePrice, regPrice, description) {
    this.brandName = brandName;
    this.productName = productName;
    this.salePrice = salePrice;
    this.regPrice = regPrice;
    this.description = description;
  }
}
