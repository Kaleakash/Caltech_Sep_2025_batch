// map to collection in mongo db 
class Product {
    constructor(pname,price,qty){
        this.pname =pname;
        this.price = price;
        this.qty = qty; 
    }
}

module.exports = Product;