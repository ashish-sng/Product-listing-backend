const Comment = require("../models/comments");
const Product = require("../models/product");

exports.addComment = async (req, res) => {
  try {
    const newComment = new Comment({
      commentText: req.body.commentText,
      productId: req.body.productId,
    });

      const savedComment = await newComment.save();
      
      await Product.findByIdAndUpdate(req.body.productId, { $inc: { commentCount: 1 } })

    res.json(savedComment);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.getComments = async (req, res) => {
  try {
    const filter = {};
    if (req.query.productId) {
      filter.productId = req.query.productId;
    }
    const comment = await Comment.find(filter);
    res.json(comment);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};

exports.getCommentsLength = async (req, res) => {
  try {
    const filter = {};
    if (req.query.productId) {
      filter.productId = req.query.productId;
    }
    const comment = await Comment.find(filter);
    res.json(comment.length);
    const product = await Product.findById(req.params.id);
    product.commentCount = comment.length;
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
