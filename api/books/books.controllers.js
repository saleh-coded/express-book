const Book = require("../../models/Book");

const getAllBooks = async (req, res, next) => {
    try {
      const books = await Book.find();
      return res.status(200).json({ data: books});
    } catch (error) {
      next(error);
    }
};


const createBook = async (req, res, next) => {
    try {
      if(req.file){
        req.body.image = req.file.path;
      }
      const newBook = await Book.create(req.body);
       return res.status(201).json({ data: newBook });
    } catch (error) {
      next(error);
    }
  };


const getOneBook =  async (req, res, next) => {
    try {
        const { id } = req.params;  
        const foundbok = await Post.findById(id);
        return res.status(200).json({ data: foundbok });
    } catch (error) {
        next(error);
    }
};


const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const deletedBook = await Book.findByIdAndDelete(id);
      return res
      .status(200)
      .json({ message: "Deleted successfully", data:  deletedBook});
    } catch (error) {
        next(error);
    }
};

const updateBook = async (req, res) => {
    try {
        const { id } = req.params; 
        const updatedBook = await Book.findByIdAndUpdate(id, req.body);
      return res
      .status(200)
      .json({ data:  updatedBook});
    } catch (error) {
        next(error);
    }
};




module.exports = { getAllBooks , createBook, getOneBook, deleteBook, updateBook };














// REFRENCE ⬇️


  
//   exports.postsDelete = async (req, res) => {
//     const { postId } = req.params;
//     try {
//       const foundPost = await Post.findById(postId);
//       if (foundPost) {
//         await foundPost.deleteOne();
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "post not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
//   exports.postsUpdate = async (req, res) => {
//     const { postId } = req.params;
//     try {
//       const foundPost = await Post.findById(postId);
//       if (foundPost) {
//         await foundPost.updateOne(req.body);
//         res.status(204).end();
//       } else {
//         res.status(404).json({ message: "post not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };
  
  