const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      const category = req.query.category.split(",");
      filter.category = { $in: category };
    }

    const products = await Product.find(filter).sort({
      [req.query.sortBy || "likes"]: -1,
    });
    res.json(products);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.addProduct = async (req, res) => {
  const companyName = req.body.companyName;
  const category = req.body.category;
  const imageURL = req.body.imageURL;
  const productLink = req.body.productLink;
  const description = req.body.description;
  const likes = req.body.likes;
  const commentCount = req.body.commentCount;

  const newProduct = new Product({
    companyName,
    category,
    imageURL,
    productLink,
    description,
    likes,
    commentCount,
  });

  try {
    await newProduct.save();
    res.json("Product added!");
  } catch (err) {
    res.status(400).json("Hoya:Error: " + err);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.updateProductById = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({ message: "Product id is required" });
    }

    const product = await Product.findById(req.body.id);
    product.companyName = req.body.companyName;
    product.category = req.body.category;
    product.imageURL = req.body.imageURL;
    product.productLink = req.body.productLink;
    product.description = req.body.description;

    await product.save();
    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json("Error: " + err);
  }
};

exports.increaseLikeById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    product.likes = product.likes + 1;
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
