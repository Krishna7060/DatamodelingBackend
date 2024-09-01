import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
orderPrice:{
    type:Number,
    required:true
},
customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",


},
orderItem:{
    type:[]
}

},{timestamps:true})
export const oreder = mongoose.model('Order',orderSchema)