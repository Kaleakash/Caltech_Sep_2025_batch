
let productService = require("../service/ProductService")

exports.storeProduct = async (request,response)=> {

    let product = request.body;
    try{
    let result = await productService.storeProduct(product)
    response.json({"msg":result})
    }catch(error){
        response.json({"msg":error.message})
    }
}

exports.findAll = async (request,response)=> {
    try {
        let result = await productService.findAll();
            response.json({"msg":result})        
    }catch(error){
         response.json({"msg":error.message})
    }
}