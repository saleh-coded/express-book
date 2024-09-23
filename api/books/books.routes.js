const express = require("express");
const bookRouter = express.Router();
const upload = require('../../middleware/multer');
const { 
    getAllBooks,
    createBook,
    getOneBook,
    deleteBook,
    updateBook,
    } = require("./books.controllers");


// REFRENCE ⬇️

// const { postsGet, postsUpdate, postsDelete, postsCreate } = require('./posts.controllers');
  
bookRouter.get('/', getAllBooks);
bookRouter.post('/', upload.single("image"), createBook);
bookRouter.get('/:id', getOneBook);
bookRouter.delete('/:id', deleteBook);
bookRouter.put('/:id', updateBook);

module.exports = bookRouter;