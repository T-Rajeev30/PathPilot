import express from "express";

import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  addTransactions,
  deleteTransaction,
  getTransactions,
} from "../controllers/TransactionController.js";

const transactionsrouter = express.Router();

// Add  Transaction

transactionsrouter.post("/", authMiddleware, addTransactions);

/// Get all transaction for Logged-in User
transactionsrouter.get("/", authMiddleware, getTransactions);

// Delete transaction

transactionsrouter.delete("/:id", authMiddleware, deleteTransaction);

export default transactionsrouter;
