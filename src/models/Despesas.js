import mongoose from "mongoose";



const despesaSchema = new mongoose.Schema(
    {
        id: {type: String},
        valor: {type: Number, required: true},
        tipo_despesas:{type:String, required: true},
        nome_banco:{type:String},
        usuario:{type:String},
        conta_paga:{type:String}
    }
)

const despesas = mongoose.model('despesas', despesaSchema)

export default despesas 