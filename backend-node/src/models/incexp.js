const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model

const incExpSchema = new Schema({
    incExp: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, ref:'User'
    },
    category: {
        type: Schema.Types.ObjectId, ref:'Category'
    }
})

const IncExp = model("IncExp", incExpSchema)

module.exports = IncExp