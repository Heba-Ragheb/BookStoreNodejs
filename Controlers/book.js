const bookSchema = require('../Scemas/book')
const user = require('../Scemas/user')


exports.getAllBooks = async function (req, res) {
    try {
        const books = await bookSchema.find()
        res.json({ message: "done", data: books })
    } catch (error) {
        res.status(400).send({ message: "err" })
    }
}
exports.getBook = async function (req, res) {
    try {
        const book = bookSchema.find({ _id: req.params.id })
        if ((await book).length === 0) {
            res.json({ message: "Book not found", data: book })
        } else {
            res.json({ message: "done", data: book })
        }
    } catch (error) {
        res.status(400).send({ message: "err" })
    }
}
exports.deleteBook = async function (req, res) {
    try {
        const role = req.user.role
        if (role==="Admin"){
        await bookSchema.findByIdAndDelete(req.params.id)
        res.json({ message: "book deleted", data: [] })}
        else{
            res.status(403).send("Access Denied")
        }
    } catch (error) {
        res.status(400).send({ message: "err" })
    }
}
exports.updateBook = async function (req, res) {
    try {
        const role = req.user.role
        if (role==="Admin"){
        await bookSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({ message: "book update", data: [] })}
        else{
            res.status(403).send("Access Denied")
        }
    } catch (error) {
        res.status(400).send({ message: "err" })
    }
}
exports.addBook = async function (req, res) {
    try {
        const role = req.user.role
        if (role==="Admin"){
        const createdBook = await bookSchema.create(req.body)
        res.json({ message: "book added", data: createdBook })}
        else{
            res.status(403).send("Access Denied")
        }
    } catch (error) {
        res.status(400).send({ message: "err" })
    }
}