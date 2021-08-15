/* global chrome */
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

async function clickCheckout() {
  const productDivs = document.querySelectorAll("div.order-item__container");

  let productsList = [];
  let orderTotal = 0;
  productDivs.forEach((product) => {
    const brandName = product.getElementsByClassName(
      "product-info__brand-name"
    )[0].innerHTML;
    const productName = product.getElementsByClassName(
      "product-info__product-name"
    )[0].innerHTML;
    const salePrice = parseFloat(
      parseFloat(
        product
          .getElementsByClassName("order-item__total-price")[0]
          .innerText.slice(1)
      ).toFixed(2)
    );
    orderTotal += salePrice;
    let newProd = new Product(brandName, productName, salePrice);
    productsList.push(newProd);
  });
  let newOrder = new Order(productsList, orderTotal);

  async function retrieveStorage(key) {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.sync.get(key, function (value) {
          resolve(value[key]);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  let purchaseList = await retrieveStorage("ecomate-order-history");

  if (purchaseList === undefined) {
    chrome.storage.sync.set(
      { "ecomate-order-history": [newOrder] },
      function () {
        console.log(
          `New purchase with total ${newOrder.total} saved to EcoMate order history`
        );
      }
    );
  } else {
    purchaseList.push(newOrder);
    chrome.storage.sync.set(
      { "ecomate-order-history": purchaseList },
      function () {
        console.log(
          `New purchase with total ${newOrder.total} saved to EcoMate order history`
        );
      }
    );
  }

  console.log("Saved Purchases: ", purchaseList);
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

class Order {
  constructor(productsList, total) {
    this.productsList = productsList;
    this.total = total;
  }
}
