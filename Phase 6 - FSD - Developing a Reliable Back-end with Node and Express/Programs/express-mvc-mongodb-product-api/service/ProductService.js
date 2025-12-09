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
    let result = await productRepository.findAll();
    let discount = 0.10;
    let discountPrice = p.price-p.price*discount;
    let updateData = result.map(p=>new Product(p._id,p.pname,discountPrice,p.qty));
    return updateData;
}