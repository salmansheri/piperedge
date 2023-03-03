import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose'; 
import Cart from './routes/Cart.js'; 
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json()); 
const port = process.env.PORT;
const connectionUrl = process.env.MONGO_URI; 

mongoose.set("strictQuery", true); 
mongoose.connect(connectionUrl).then(() => console.log("Database connection is Successfully established")).catch((err) => console.log(err)); 


app.use("/api/v1/cart", Cart); 
app.listen(port, () => {
    console.log('server is running on port ' + port);
});
