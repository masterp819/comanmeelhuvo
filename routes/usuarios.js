const router = require("express").Router()
const db = require("../db")

router.get("/", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM usuarios")
    res.json(rows)
})

router.post("/", async (req, res) => {
    await db.query(
        "INSERT INTO usuarios(nombre,correo,edad,rol) VALUES(?,?,?,?)",
        [req.body.nombre, req.body.correo, req.body.edad, req.body.rol]
    )
    res.json({ ok: true })
})

router.put("/:id", async (req, res) => {
    await db.query(
        "UPDATE usuarios SET nombre=?,correo=?,edad=?,rol=? WHERE id=?",
        [req.body.nombre, req.body.correo, req.body.edad, req.body.rol, req.params.id]
    )
    res.json({ ok: true })
})

router.delete("/:id", async (req, res) => {
    await db.query("DELETE FROM usuarios WHERE id=?", [req.params.id])
    res.json({ ok: true })
})

module.exports = router