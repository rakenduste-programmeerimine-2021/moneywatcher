const { Schema, model } = require('mongoose')

const moneySchema = new Schema({
    incOrExp: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId, ref: 'Category', // FK
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, ref: 'User', // FK
        required: true
    }
})

const Money = model("Money", moneySchema)
module.exports = Money