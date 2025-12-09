let express = require("express")
let router = express.Router();
let productController = require("../controller/ProductController")

router.post("/store",productController.storeProduct)
router.get("/find",productController.findAll)

module.exports = router;