const express = require("express");
const { addComment, getComments } = require("../controllers/comment");

const commentRouter = express.Router();

commentRouter.route("/")
    .get(getComments)
    .post(addComment);

module.exports = commentRouter;