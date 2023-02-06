import mongoose from "mongoose";



const rendaSchema = new mongoose.Schema(
    {
        id: {type: String},
        valor: {type: Number, required: true},
        tipo_renda:{type:String},
        id_conta:{type:Number, required:true}
    }
)

const rendas = mongoose.model('rendas', rendaSchema)

export default rendas