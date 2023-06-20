const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const productRouter = require('./routes/productRoute');
const commentRouter = require('./routes/commentsRoute');
const authRouter = require('./routes/authRoute');

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", authRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);


module.exports = app;