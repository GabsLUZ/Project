import usuarios from "../models/Usuario.js"

class usuarioController{
    static listarusuarios = (req,res) => {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios)
        })
    
    }

    static cadastrarusuario = (req, res) => {
        let Usuario = new usuarios(req.body)
        Usuario.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar o usuario`})
            } else{
                res.status(201).send(Usuario.toJSON())
            }
        })
    }

    static atualizarusuario = (req, res) => {
        const id = req.params.id
        usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message: "usuario atualizado com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }

    static listarusuarioPorId = (req, res) => {
        const id = req.params.id
        usuarios.findById(id, (err, usuarios) => {
            if(err){
                res.status(400).send({message: `${err.message} - Id do usuarios não foi encontrado`})
            } else {
                res.status(200).send(usuarios)
            }
        })
    }

    static excluirusuario = (req, res) => {
        const id = req.params.id
        usuarios.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: "usuarios removido com sucesso"})
        } else{
            res.status(500).send({message: err.message})
        }
        })
    }
}



export default usuarioController

