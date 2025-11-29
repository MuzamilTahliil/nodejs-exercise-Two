const express = require('express');
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
} = require('../controllers/bookController');

// Create a new book
router.post('/books', createBook);

// Get all books
router.get('/books/all', getAllBooks);

// Get a single book by ID
router.get('/books/:id', getBookById);

// Update a book
router.put('/books/:id', updateBook);

// Delete a book
router.delete('/books/:id', deleteBook);

module.exports = router;

