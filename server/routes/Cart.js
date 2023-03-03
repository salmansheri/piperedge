import express from "express";
import cartModel from "../mongodb/models/cartModel.js";

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const getVendors = await cartModel.find({});
    res.status(200).json({ message: getVendors });
    console.log("successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err.message);
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { id, name, price, tags, vendors, discountedPrice } = req.body;
    const newVendors = await cartModel.create({
      id, 
      name,
      price,
      tags,
      vendors,
      discountedPrice,
    });
    res.status(200).json({newVendors}); 
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err); 
  }
});

router.route('/:id').delete(async (req, res) => {
    try {
        const {id} = req.params; 
        const deleteVendor = await cartModel.findByIdAndRemove({
            _id: id,
        })

        console.log("Deleted successfully")
        res.status(200).json({message: "Deleted Successfully"})
    } catch (err) {
        res.status(500).json({message: err.message}); 
    }
}); 

export default router; 
