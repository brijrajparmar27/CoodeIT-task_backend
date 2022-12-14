const express = require("express")
const {
    addNotes,
    deleteNotes,
    getNotes,
    updateNotes
} = require("../Controllers/NoteController");

const requireAuth = require("../Middlewares/requireAuth");

const Router = express.Router();

Router.use(requireAuth);

Router.get("/:id", getNotes)

Router.post("/", addNotes)

Router.delete("/:id", deleteNotes)

Router.patch("/:id", updateNotes)

module.exports = Router