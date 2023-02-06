import despesas from "../models/Despesas.js"

class despesaController{
    static listardespesas = (req, res) => {
        despesas.find((err, despesas) => {
            res.status(200).json(despesas)
        })
    }

    static cadastrardespesa = (req, res) => {
        let Despesa = new despesas(req.body)
        Despesa.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o despesa`})
            } else{
                res.status(201).send(Despesa.toJSON())
            }
        })
    }

    static atualizardespesa = (req, res) => {
        const id = req.params.id
        despesas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: "despesa atualizado com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

    static listardespesaPorId = (req, res) => {
        const id = req.params.id
        despesas.findById(id, (err, despesa) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do despesa não foi encontrado`})
            } else {
                res.status(200).send(despesa)
            }
        })
    }

    static excluirdespesa = (req, res) => {
        const id = req.params.id
        despesas.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "despesa removido com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }
}

export default despesaController 