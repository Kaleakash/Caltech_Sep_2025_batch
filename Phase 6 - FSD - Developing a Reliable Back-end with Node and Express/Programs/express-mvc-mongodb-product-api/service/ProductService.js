const Product = require("../model/productModel")
let productRepository = require("../repository/ProductRepository")

exports.storeProduct = async (product)=> {
    let {pname,price,qty}= product;
    if(product.price<1000){
        throw new Error("price must be > =1000")
    }
    if(product.qty<0){
        throw new Error("qty must be +ve")
    }
    
    let productRef = new Product(pname,price,qty)

    return productRepository.storeProduct(productRef);
}

exports.findAll = async () => {
    return productRepository.findAll();
    //return productRepository.findAll().map(p=>p.price-p.price*0.10);
}