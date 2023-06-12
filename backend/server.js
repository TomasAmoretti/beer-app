const express = require("express");
const cors = require("cors");
const products = require("./data/products.js")
const stockprice = require("./data/stock-price.js")
const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
    res.send(products)
});

app.get("/api/stockprice", (req, res) => {
    res.send(stockprice)
});

app.listen(5000, () =>{
    console.log("server at http://localhost:5000");
})