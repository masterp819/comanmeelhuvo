require("dotenv").config()

const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.static("../frontend"))
app.use(cors())
app.use(express.json())

app.use("/usuarios", require("./routes/usuarios"))

app.listen(process.env.PORT, () =>
    console.log(`http://localhost:${process.env.PORT}`)
)