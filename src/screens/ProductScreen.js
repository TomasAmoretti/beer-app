import { getData, priceFormatter, getDataJquery } from "../js/utils.js";

const ProductScreen = {
    render: async ()=> {
        const beers = await getData("http://localhost:5000/api/products");
        const stockPrice = await getData("http://localhost:5000/api/stockprice");
        const productUrl = window.location.hash.split("#/").pop();
        let product = "";
        beers.map(beer => {
            let productpage = beer.id+beer.brand.replace(" ","");
            if(productUrl === productpage)
                product = beer;
        });

        if(product === ""){
            return `<div class="warning-message">Product not found</div>`
        }

        const price = product.skus.map( (variantPrice) => 
            `<div class="pdp-price">${priceFormatter(stockPrice[variantPrice.code].price)}</div>`
        ).join("");
        const stock = product.skus.map( (variantStock) => 
            `<div class="pdp-stock">Stock: ${stockPrice[variantStock.code].stock}</div>`
        ).join("");
        const sku = product.skus.map( (skuSelected) => 
            `<a href="#" id="${skuSelected.code}" class="sku-item">${skuSelected.name}</a>`
        ).join("");

        return `
        <div id="product-page" class="container">
            <div class="pdp-image-container col-sm-5">
                <img class="pdp-product-image" src="${product.image}"/>
            </div>
            <div class="pdp-info-containe col-sm-5r">
                <div class="pdp-name-price">
                    <div class="pdp-name">${product.brand}</div>
                    <div class="pdp-price-container">${price}</div>
                </div>
                <div class="pdp-origin-stock">
                    <div class="pdp-origin">Origin: ${product.origin}</div>
                    <div class="pdp-stock-container">${stock}</div>
                </div>
                <div class="pdp-description">
                    <div class="pdp-title-info">Description</div>
                    <div class="pdp-info">${product.information}</div>
                </div>
                <div class="sku-selector">
                    <div class="sku-title">Size</div>
                    <div class="sku-item-container">${sku}</div>
                </div>
            </div>
        </div>
        `
    }
}

export default ProductScreen;