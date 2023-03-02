import mongoose from "mongoose"

mongoose.connect('mongodb+srv://Marcus:Ma123456789@webii.dfhdxjh.mongodb.net/financas')

let db = mongoose.connection

export default db