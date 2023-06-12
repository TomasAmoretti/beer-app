import { getData, priceFormatter } from "../js/utils.js";

const HomeScreen = {
    render: async ()=> {
        const beers = await getData("http://localhost:5000/api/products");
        const price = await getData("http://localhost:5000/api/stockprice");
        if(!beers && !price){
            return `<div class="warning-message">Error getting products</div>`
        }
        const content = beers.map((beer) => `
            <div class="product-item themed-grid-col " >
                <div class="card" id="${beer.id}">
                    <a href="/#/${beer.id}${beer.brand.replace(" ","")}" class="product-link">
                        <span class="product-brand">${beer.brand}</span>
                        <img src="${beer.image}" class="product-img">
                        <div class="card-bottom">
                            <div class="product-price">${priceFormatter(price[beer.skus[0].code].price)}</div>
                            <div href="#" class="product-add-to-cart">+</div>
                        </div>
                    </a>
                </div>
            </div>
          `).join("");

        return `<div class="product-list row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
          ${content}
        </div>`
    }
}

export default HomeScreen;