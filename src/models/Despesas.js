import mongoose from "mongoose";



const despesaSchema = new mongoose.Schema(
    {
        id: {type: String},
        valor: {type: Number, required: true},
        tipo_despesas:{type:String},
        conta_paga:{type:Number, required:true}
    }
)

const despesas = mongoose.model('despesas', despesaSchema)

export default despesas 