import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true}, 
    name: {type: String, required: true},
    price: {type: Number, required: true },
    tags : {type: Array, required: true}, 
    vendors: {type: String,required: true}, 
    discountedPrice: {type: Number, required: true}, 
}, {timestamps: true}); 

const cartModel = mongoose.model("cart", cartSchema); 

export default cartModel; 