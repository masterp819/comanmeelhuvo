require("dotenv").config()

const mysql = require("mysql2")

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

db.connect(e => console.log(e ? "❌ Error BD" : "✅ BD conectada"))

module.exports = db.promise() // 👈 solo esto cambia