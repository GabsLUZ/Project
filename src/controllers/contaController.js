import contas from "../models/Conta.js"


class ContaController{
    
    static listarcontas = (req, res) => {
        contas.find((err, contas) => {
            res.status(200).json(contas)
        })
    } 

    static cadastrarcontas = (req, res) => {
        let conta = new contas(req.body)
        conta.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar a conta`})
            } else{
                res.status(201).send(conta.toJSON())
            }
        })
    }

    static atualizarcontas = (req, res) => {
        const id = req.params.id
        contas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: "Conta atualizada com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

    static listarContaPorId = (req, res) => {
        const id = req.params.id
        contas.findById(id, (err, contas) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id da conta não foi encontrado`})
            } else {
                res.status(200).send(contas)
            }
        })
    }

    static excluirConta = (req, res) => {
        const id = req.params.id
        contas.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "Conta removida com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }
}

export default ContaController 