const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const categorySchema = new Schema({
    categoryName: {
        type: String
    }
})

const Category = model("Category", categorySchema)

module.exports = Category