import mongoose from "mongoose";



const usuarioSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome_usuario: {type: String, required: true},
        senha: {type: String, required: true}
    }
)

const usuarios = mongoose.model('usuario', usuarioSchema)

export default usuarios
