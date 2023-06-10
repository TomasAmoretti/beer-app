import * as items from "../api/products.js";

const router = () => {
   getBeerList();
}

window.addEventListener("load", router);

function getBeerList() {
   let beers = Object.entries(items.default);
   console.log(Object.entries(beers));
   const beerList = document.createElement("div");
   beerList.classList.add("product-list","row","row-cols-lg-4","row-cols-md-3", "row-cols-sm-2");

   beers.forEach((beer) => {
      const beerItem = document.createElement("div");
      beerItem.classList.add("product-item","themed-grid-col");
      beerList.appendChild(beerItem);
      beerItem.innerHTML = `
      <div class="card" id="beer-${beer[1].id}">
      <a href="/${beer[1].id}${beer[1].brand.replace(" ","")}" class="product-link">
          <img src="..${beer[1].image}" class="product-img" />
          <span class="product-brand">${beer[1].brand}</span>
      </a>
      </div>`
   });

   document.getElementById("myApp").appendChild(beerList);
}