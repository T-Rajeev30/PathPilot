import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ExpensePieChart from "../components/ExpensePieChart";
import SummaryCard from "../components/SummaryCard";
import CustomLineChart from "../components/CustomLineChart";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#FFF1E6] text-gray-800">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="p-6 space-y-6 max-w-7xl mx-auto w-full">
          {/* Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SummaryCard title="Total Balance" value="₹12,000" />
            <SummaryCard title="Monthly Goal" value="₹5,000 / ₹10,000" />
            <SummaryCard title="Savings Rate" value="24%" />
          </section>

          <div className="bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Monthly Trend</h3>

            <div className="flex  h-[250px] gap-6">
              <ExpensePieChart />
              <CustomLineChart />
            </div>
          </div>

          {/* Recent Transactions */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold mb-4">Recent Transactions</h3>
            <p className="text-gray-500 text-sm">
              Table or data will go here...
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
