import mongoose from "mongoose";



const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String, required: true},
        nome_Usuario: {type: String, required: true},
        senha: {type: String, required: true}
    }
)

const usuarios = mongoose.model('usuario', usuarioSchema)

export default usuarios
