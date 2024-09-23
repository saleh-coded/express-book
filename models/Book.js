const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: String, default: 5 },
  image: {
    type: String,
    default: "https://clipart-library.com/images/6TyXRon7c.png",
  },
});

const Book = model("Book", bookSchema);
module.exports = Book;
