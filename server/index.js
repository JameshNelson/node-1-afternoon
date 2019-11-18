const express = require('express')
const products = require('../products.json'); 
const getProducts = require('./getProducts');
const getProduct = require('./getProduct'); 




const PORT = 4040

const app = express()

app.get('/api/products', getProducts); 

app.get('/api/product/:id', getProduct); 


app.listen(PORT, () => console.log(`Server is running on port ${PORT} me lord`))