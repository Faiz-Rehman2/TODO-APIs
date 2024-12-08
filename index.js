import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/db.js";
import todoRoutes from "./routes/index.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Use the routes
app.use("/api/todos", todoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
