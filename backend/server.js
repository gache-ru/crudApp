import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();
const app = express();

app.use(express.json()); //Middleware that allows us to accept json data in the req.body before the data is sent
const PORT = 5000;

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${5000}`);
});
