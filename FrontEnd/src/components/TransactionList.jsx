import axios from "axios";

const TransactionList = ({ transactions, onDelete }) => {
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/transactions/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("🗑️ Deleted:", id);
      onDelete(id);
    } catch (err) {
      console.error("❌ Delete Error:", err.message);
    }
  };

  return (
    <ul>
      {transactions.map((t) => (
        <li key={t._id}>
          {t.title} - ₹{t.amount} [{t.type}]
          <button onClick={() => handleDelete(t._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
