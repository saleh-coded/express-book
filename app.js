// imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./database");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const bookRouter = require("./api/books/books.routes");


// init
dotenv.config();
const app = express();
connectDb();
const PORT = process.env.PORT;

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


// routes
app.use("/api/books", bookRouter);

// use if u want to see images in browser-> localhost:PORT/media/...imgUrl
// app.use("media", express.static(path.join(__dirname, "/media")))

// not Found Handler
app.use(notFoundHandler);

// error Handler
app.use(errorHandler);

// starting
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
