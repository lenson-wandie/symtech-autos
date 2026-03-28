import axios from "axios";
import {CORE_BASE_URL,CORE_API_KEY} from "../Config/env.js"


const core = axios.create({
    baseURL:CORE_BASE_URL,
    headers:{
    "Content-Type":"application/json",
     Authorization:`Bearer ${CORE_API_KEY}`
    }
   })
export const getCustomers = async (req, res) => {
    try {
        const response = await core.get("/customers");
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Get customers error:",{
            message:error.message,
            status:error?.response?.status,
            data:error?.response?.data,
            url: error?.config?.url,
            method: error?.config?.method
        })
        const status = error?.response?.status || 500;
        res.status(status).json({
            message: error?.response?.data?.message || error.message || "Internal Server Error"
        });
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const response = await core.get(`/customers/${req.params.id}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Get Customers By Id error:",{
            message:error.message,
            status:error?.response?.status,
            data:error?.response?.data,
            url: error?.config?.url,
            method: error?.config?.method
        })
        const status = error?.response?.status || 500;
        res.status(status).json({
            message: error?.response?.data?.message || error.message || "Internal Server Error"
        });
    }
};

export const createCustomer = async (req, res) => {
    try {

        console.log("AXIOS BASE URL:", core.defaults.baseURL);
      console.log("Request URL test:", `${core.defaults.baseURL}/customers`);
      const response = await core.post("/customers", req.body);
      res.status(201).json(response.data);
    } catch (error) {
      console.error("create customer error:", {
        message: error.message,
        status: error?.response?.status,
        data: error?.response?.data,
        url: error?.config?.url,
        baseURL: error?.config?.baseURL,
        method: error?.config?.method,
      });
  
      const status = error?.response?.status || 500;
      res.status(status).json({
        message:
          error?.response?.data?.message ||
          error.message ||
          "Internal Server Error",
      });
    }
  };
export const updateCustomer = async (req, res) => {
    try {
        const response = await core.put(`/customers/${req.params.id}`, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("update customer error:",{
            message:error.message,
            status:error?.response?.status,
            data:error?.response?.data,
            url: error?.config?.url,
            method: error?.config?.method
        })
        const status = error?.response?.status || 500;
        res.status(status).json({
            message: error?.response?.data?.message || error.message || "Internal Server Error"
        });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const response = await core.delete(`/customers/${req.params.id}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error("delete customer error:",{
            message:error.message,
            status:error?.response?.status,
            data:error?.response?.data,
            url: error?.config?.url,
            method: error?.config?.method
        })
        const status = error?.response?.status || 500;
        res.status(status).json({
            message: error?.response?.data?.message || error.message || "Internal Server Error"
        });
    }
};