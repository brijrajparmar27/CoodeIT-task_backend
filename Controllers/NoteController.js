const noteHandler = require("../Models/NoteModels");

const addNotes = (req, res) => {
    const { note, createdBy } = req.body;
    noteHandler.create({ note, createdBy }).then(data => {
        res.json(data).status(200);
    }).catch(err => {
        res.json({ msg: err.message }).status(500)
    })
}
const deleteNotes = (req, res) => {
    const { id } = req.params;
    noteHandler.findByIdAndDelete(id).then(data => {
        res.json(data).status(200);
    }).catch(err => {
        res.json({ msg: err.message }).status(500)
    })
}
const getNotes = (req, res) => {
    const {id} = req.params;
    noteHandler.find({createdBy:id}).then(data => {
        res.json(data).status(200);
    }).catch(err => {
        res.json({ msg: err.message }).status(500)
    })
}
const updateNotes = (req, res) => {
    const { note } = req.body;
    const { id } = req.params;
    console.log(note, id);
    noteHandler.findByIdAndUpdate(id, { note }).then(data => {
        res.json(data).status(200);
    }).catch(err => {
        res.json({ msg: err.message }).status(500)
    })
}

module.exports = {
    addNotes,
    deleteNotes,
    getNotes,
    updateNotes
}