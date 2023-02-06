import mongoose from "mongoose";



const despesaSchema = new mongoose.Schema(
    {
        id: {type: String},
        valor: {type: Number, required: true},
        tipo_despesas:{type:String},
        conta_paga:{type:mongoose.Schema.Types.ObjectId, ref: 'id_conta', required:true}
    }
)

const despesas = mongoose.model('despesas', despesaSchema)

export default despesas 