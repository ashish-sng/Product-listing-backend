const express = require("express");
const {
  getAllProducts,
  addProduct,
  increaseLikeById,
} = require("../controllers/product");

const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(addProduct);
productRouter.route("/:id/like").put(increaseLikeById)

module.exports = productRouter;
