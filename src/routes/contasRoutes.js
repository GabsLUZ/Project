import express from "express"
import ContaController from "../controllers/contaController.js"


const router = express.Router()

router 
    .get("/contas", ContaController.listarcontas)
    .post("/contas", ContaController.cadastrarcontas)
    .put("/contas/:id", ContaController.atualizarcontas)
    .get("/contas/:id", ContaController.listarContaPorId) 
    .delete("/contas/:id", ContaController.excluirConta) 


export default router