import mongoose from "mongoose";

const contaSchema = new mongoose.Schema(
    {
        id_conta: {type: Number},
        nome_conta: {type: String, required: true},
        usuario: {type: mongoose.Schema.Types.ObjectId, ref:'usuario', required: true},
        valor: {type:Number, required:true}
    },
    {
        versionKey: false
    }
)

const contas = mongoose.model("contas", contaSchema)

export default contas