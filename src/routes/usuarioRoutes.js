import express from "express"
import usuarioController from "../controllers/usuarioController.js"

const router = express.Router()

router
    .get("/usuarios", usuarioController.listarusuarios)
    .post("/usuarios", usuarioController.cadastrarusuario)
    .put("/usuarios/:id", usuarioController.atualizarusuario)
    .get("/usuarios/:id", usuarioController.listarusuarioPorId) 
    .delete("/usuarios/:id", usuarioController.excluirusuario) 

export default router