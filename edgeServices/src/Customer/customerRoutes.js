import express from "express";
import {getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer } from "./customerController.js";
const router = express.Router();
router.get("/getCustomers", getCustomers);
router.get("/getCustomerById/:id", getCustomerById);
router.post("/createCustomer", createCustomer);
router.put("/updateCustomer/:id", updateCustomer);
router.delete("/deleteCustomer/:id", deleteCustomer);
export default router;
