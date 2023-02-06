import rendas from "../models/Rendas.js"


class rendaController{
    static listarrenda = (req, res) => {
        rendas.find((err, despesas) => {
            res.status(200).json(despesas)
        })
    }

    static cadastrarrendas = (req, res) => {
        let Renda = new rendas(req.body)
        Renda.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar renda`})
            } else{
                res.status(201).send(Renda.toJSON())
            }
        })
    }

    static atualizarrendas = (req, res) => {
        const id = req.params.id
        rendas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: "Renda atualizada com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

    static listarrendaPorId = (req, res) => {
        const id = req.params.id
        rendas.findById(id, (err, rendas) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id da renda não foi encontrada`})
            } else {
                res.status(200).send(rendas)
            }
        })
    }

    static excluirrenda = (req, res) => {
        const id = req.params.id
        rendas.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "Renda removida com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }
}

export default rendaController 