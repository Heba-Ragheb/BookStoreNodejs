const express = require("express")
const userController = require('../Controlers/book')
const router = express.Router()
const authntication = require('../midlewares/auth')

router.get('/api/books' ,authntication,userController.getAllBooks)
router.get('/api/books/:id' ,authntication,userController.getBook)
router.delete('/api/books/:id' ,authntication,userController.deleteBook)
router.put('/api/books/:id' ,authntication,userController.updateBook)
router.post('/api/books' ,authntication,userController.addBook)
module.exports = router