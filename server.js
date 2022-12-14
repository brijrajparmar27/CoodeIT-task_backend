const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const notesRouter = require("./Routes/NoteRoutes");
const userRouter = require("./Routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);

mongoose.connect(process.env.MONGO).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listening at port ", process.env.PORT);
    })
})