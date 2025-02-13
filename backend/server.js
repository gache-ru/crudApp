import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
const app = express();

app.use(express.json()); //Middleware that allows us to accept json data in the req.body before the data is sent
const PORT = 5000;

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products");
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/products", async (req, res) => {
  const product = req.body; //user will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(200).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in create product", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res
  //     .status(400)
  //     .json({ success: false, message: "Invalid Product Id" });
  // }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting product", error.message);
    res.status(404).json({ success: false, message: "product not found" });
  }
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${5000}`);
});
