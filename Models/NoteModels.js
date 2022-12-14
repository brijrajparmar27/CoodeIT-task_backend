const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("NoteModel",noteSchema,"notes")