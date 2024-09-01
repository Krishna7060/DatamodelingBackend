import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    discription: {
      required: true,
      type: String,
    },

    name: {
      required: true,
      type: String,
    },
    product: {
      // so stroing image in data we use diffrent folder or third party bucket because if store img in database it makes our database heavy that is why we use a string url in type
      type: String,
    },
    price:{
    type:Number,
    default:0,
    },
    stock:{
type:Number,
default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }
  },
  { timestamps: true }
);
export const product = mongoose.model("Product", productSchema);
