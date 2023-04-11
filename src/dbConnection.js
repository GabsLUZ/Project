mongoose.set("strictQuery", true);
import mongoose from "mongoose"


mongoose.connect('mongodb+srv://Marcus:Ma123456@webii.dfhdxjh.mongodb.net/financas')

let db = mongoose.connection

export default db
