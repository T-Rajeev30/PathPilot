import React from "react";
import { motion } from "framer-motion";

const SummaryCard = ({ title, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition-transform"
  >
    <p className="text-sm text-gray-500">{title}</p>
    <p className="mt-2 text-2xl font-bold">{value}</p>
  </motion.div>
);

export default SummaryCard;
