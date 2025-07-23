import TransactionsModel from "../models/TransactionsModel.js";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionsModel.find({
      userId: req.user.id,
    });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const addTransactions = async (req, res) => {
  try {
    // console.log("Request Body: ", req.body);
    // console.log("User From middleware", req.user);
    const { type, category, amount } = req.body;
    if (!type || !category || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const transactions = new TransactionsModel({
      userId: req.user.id,
      type,
      category,
      amount,
    });
    await transactions.save();

    res.status(201).json(transactions);
  } catch (error) {
    console.error("Add transaction ", error.message);
    res.status(500).json({ message: " Server error " });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    await TransactionsModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Transaction Deleted " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
