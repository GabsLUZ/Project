import express from "express"
import rendaController from "../controllers/rendaController.js"


const router = express.Router()

router 
    .get("/rendas", rendaController.listarrenda)
    .post("/rendas", rendaController.cadastrarrendas)
    .put("/rendas/:id", rendaController.atualizarrendas)
    .get("/rendas/:id", rendaController.listarrendaPorId) 
    .delete("/rendas/:id", rendaController.excluirrenda) 


export default router

