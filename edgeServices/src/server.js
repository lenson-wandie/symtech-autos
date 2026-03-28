import express from "express";
import dotenv from "dotenv";
import customerRoutes from "./Customer/customerRoutes.js"

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/customer", customerRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});