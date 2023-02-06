import express from "express"
import despesaController from "../controllers/despesaController.js"


const router = express.Router()

router 
    .get("/despesas", despesaController.listardespesas)
    .post("/despesas", despesaController.cadastrardespesa)
    .put("/despesas/:id", despesaController.atualizardespesa)
    .get("/despesas/:id", despesaController.listardespesaPorId) 
    .delete("/despesas/:id", despesaController.excluirdespesa) 


export default router