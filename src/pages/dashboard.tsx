import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSyncAlt } from "react-icons/fa";
import img from "../assets/person_1.jpg";
import BottomNav from "./stickyNav";

const Dashboard = () => {
  const navigate = useNavigate();

  const allTransactions = [
    { type: "Credit", amount: 1000.00, date: "2025-22-04 05:55:00" },
    { type: "Credit", amount: 500.00, date: "2025-25-02 09:00:00" },
    { type: "Debit", amount: -200.0, date: "2025-02-07 14:30:00" },
    { type: "Credit", amount: 75000.0, date: "2025-01-02 16:00:00" },
    { type: "Debit", amount: -1500.0, date: "2025-01-02 10:20:00" },
    { type: "Credit", amount: 200000.0, date: "2025-01-01 10:00:00" },
    { type: "Debit", amount: -5000.0, date: "2025-01-01 12:30:00" },
    { type: "Debit", amount: -200.0, date: "2024-12-31 18:45:00" },
    { type: "Credit", amount: 100000.0, date: "2024-12-31 10:15:00" },
    { type: "Credit", amount: 180000.0, date: "2024-12-15 08:30:00" },
    { type: "Debit", amount: -3000.0, date: "2024-12-15 14:50:00" },
    { type: "Debit", amount: -800.0, date: "2024-12-10 11:00:00" },
    { type: "Credit", amount: 95000.0, date: "2024-12-10 09:45:00" },
    { type: "Debit", amount: -600.0, date: "2024-12-05 17:20:00" },
    { type: "Credit", amount: 300000.0, date: "2024-12-05 10:10:00" },
    { type: "Debit", amount: -12000.0, date: "2024-11-30 15:40:00" },
    { type: "Credit", amount: 400000.0, date: "2024-11-30 08:00:00" },
    { type: "Debit", amount: -500.0, date: "2024-11-25 13:25:00" },
    { type: "Credit", amount: 175000.0, date: "2024-11-25 07:45:00" },
    { type: "Credit", amount: 250000.0, date: "2024-11-20 09:15:00" },
    { type: "Debit", amount: -3200.0, date: "2024-11-20 19:50:00" },
    { type: "Debit", amount: -900.0, date: "2024-11-15 18:30:00" },
    { type: "Credit", amount: 60000.0, date: "2024-11-15 07:00:00" },
    { type: "Debit", amount: -1000.0, date: "2024-11-10 20:10:00" },
    { type: "Credit", amount: 80000.0, date: "2024-11-10 08:30:00" },
    { type: "Debit", amount: -2500.0, date: "2024-11-05 13:45:00" },
    { type: "Credit", amount: 120000.0, date: "2024-11-05 07:15:00" },
    { type: "Debit", amount: -300.0, date: "2024-10-31 22:30:00" },
    { type: "Credit", amount: 90000.0, date: "2024-10-31 10:00:00" },
    { type: "Debit", amount: -4500.0, date: "2024-10-25 15:00:00" },
    { type: "Credit", amount: 250000.0, date: "2024-10-25 08:15:00" },
    { type: "Credit", amount: 100000.0, date: "2024-10-20 09:30:00" },
    { type: "Debit", amount: -5500.0, date: "2024-10-20 12:50:00" },
    { type: "Debit", amount: -600.0, date: "2024-10-15 14:00:00" },
    { type: "Credit", amount: 70000.0, date: "2024-10-15 08:45:00" },
    { type: "Debit", amount: -3500.0, date: "2024-10-10 13:20:00" },
    { type: "Credit", amount: 220000.0, date: "2024-10-10 08:00:00" },
    { type: "Debit", amount: -2500.0, date: "2024-10-05 19:30:00" },
    { type: "Credit", amount: 140000.0, date: "2024-10-05 07:10:00" },
    { type: "Credit", amount: 50000.0, date: "2024-10-01 09:40:00" },
    { type: "Debit", amount: -700.0, date: "2024-10-01 20:30:00" },
  ];

  const [visibleTransactions, setVisibleTransactions] = useState(4);

  const loadMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 4, allTransactions.length));
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}
        <div className="bg-purple-700 text-white p-4 flex justify-between items-center sticky top-0 z-10">
          <img src={img} alt="Profile" className="h-10 w-10 rounded-full" />
          <h1 className="text-lg text-white font-semibold">Dashboard</h1>
          <div className="cursor-pointer text-white" onClick={refreshPage}>
            <FaSyncAlt />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 lg:px-6 mt-8">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Total Balance Section */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-700 font-medium">Total Balance</h2>
                <button className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                  <span className="material-icons">content_copy</span>
                </button>
              </div>
              <h1 className="text-3xl font-bold mt-2">$2,501,661.00</h1>
            </div>

            {/* Actions Section */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <button
                className="flex items-center text-purple-600 p-4 bg-purple-50 rounded-lg"
                onClick={() => navigate("/send")}
              >
                <div className="bg-purple-100 p-4 rounded-lg">
                  <span className="material-icons">send</span>
                </div>
                <p className="ml-4 text-sm font-semibold">Send Money</p>
              </button>
              <button
                className="flex items-center text-pink-600 p-4 bg-pink-50 rounded-lg"
                onClick={() => navigate("/deposit")}
              >
                <div className="bg-red-500 p-4 rounded-lg">
                  <span className="material-icons text-white">add</span>
                </div>
                <p className="ml-4 text-sm font-semibold">Add Money</p>
              </button>
              <button
                className="flex items-center text-yellow-600 p-4 bg-yellow-50 rounded-lg"
                onClick={() => navigate("/loan")}
              >
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <span className="material-icons">account_balance_wallet</span>
                </div>
                <p className="ml-4 text-sm font-semibold">Loan</p>
              </button>
              <button
                className="flex items-center text-green-600 p-4 bg-green-50 rounded-lg"
                onClick={() => navigate("/overview")}
              >
                <div className="bg-green-100 p-4 rounded-lg">
                  <span className="material-icons">help</span>
                </div>
                <p className="ml-4 text-sm font-semibold">Need Help?</p>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/3 mt-6 lg:mt-0">
            {/* Recent Transactions */}
            <h2 className="text-gray-700 font-medium mb-4 px-4 lg:px-0">
              Recent Transactions
            </h2>
            <div className="space-y-4 px-4 lg:px-0">
              {allTransactions.slice(0, visibleTransactions).map((transaction, index) => (
                <div key={index} className="bg-white shadow-lg p-4 rounded-lg">
                  <div className="flex justify-between">
                    <p className="font-semibold">{transaction.type}</p>
                    <p
                      className={`font-bold ${
                        transaction.amount < 0 ? "text-red-500" : "text-green-500"
                      }`}
                    >
                      {transaction.amount < 0
                        ? `-$${Math.abs(transaction.amount)}.00`
                        : `+$${transaction.amount}.00`}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              ))}
              <button
                onClick={loadMoreTransactions}
                className="mt-4 bg-purple-600 w-full text-white px-4 py-2 rounded-lg"
                disabled={visibleTransactions >= allTransactions.length}
              >
                {visibleTransactions >= allTransactions.length
                  ? "No More Transactions"
                  : "Load More"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Dashboard;
