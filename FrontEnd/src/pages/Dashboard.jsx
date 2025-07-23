import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ExpensePieChart from "../components/ExpensePieChart";
import SummaryCard from "../components/SummaryCard";
import CustomLineChart from "../components/CustomLineChart";
import { getTransactions, addTransactions } from "../api/transactionsApi.js";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const fetchTransaction = async () => {
    try {
      const { data } = await getTransactions();
      setTransactions(data);
    } catch (error) {
      console.error("Failed to fetch transaction :", error);
    }
  };

  const handleAddTransaction = async (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    try {
      await addTransactions({ type, category, amount }); // Call backend API
      setAmount("");
      setCategory("");
      fetchTransaction(); // Refresh transactions
    } catch (error) {
      console.error("Failed to add transaction: ", error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []); // run only once on mount

  return (
    <div className="flex min-h-screen bg-[#FFF1E6] text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          {/* Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SummaryCard title="Total Balance" value="₹12,000" />
            <SummaryCard title="Monthly Goal" value="₹5,000 / ₹10,000" />
            <SummaryCard title="Savings Rate" value="24%" />
          </section>

          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Monthly Trend</h3>
            <div className="flex h-[250px] gap-6">
              <ExpensePieChart />
              <CustomLineChart />
            </div>
          </div>

          {/* Recent Transactions */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold mb-4">Recent Transactions</h3>
            <form onSubmit={handleAddTransaction} className="flex gap-2 mb-4">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 rounded"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded">
                Add
              </button>
            </form>

            <ul className="space-y-2">
              {transactions.length > 0 ? (
                transactions.map((t) => (
                  <li key={t._id} className="flex justify-between">
                    <span>
                      {t.category} ({t.type})
                    </span>
                    <span>₹{t.amount}</span>
                  </li>
                ))
              ) : (
                <p className="text-gray-400">No transactions yet.</p>
              )}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
