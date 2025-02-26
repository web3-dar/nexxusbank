import React, { useState } from "react";
import BottomNav from "./stickyNav";

import img from '../assets/person_1.jpg'
const SendMoney = () => {
//   const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendMoney = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setError("Minimum deposit required to make a transaction is $1000. Please increase your deposit to proceed.");
    }, 2000); // Simulate a 2-second loading screen
  };

  return (
    <>

    <div className="h-[100vh]">

    
     <div className="bg-purple-700 text-white p-4 flex justify-between items-center sticky top-0 z-10">
          <img src={img} alt="Profile" className="h-10 w-10 rounded-full" />
          <h1 className="text-lg text-white font-semibold">Dashboard</h1>
         
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 lg:px-6 mt-8">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Total Balance Section */}
            <div className="bg-white  rounded-xl p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-700 font-medium">Total Balance</h2>
                <button className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                  <span className="material-icons">content_copy</span>
                </button>
              </div>
              <h1 className="text-3xl font-bold mt-2">$2,500,661.00</h1>
            </div>
            </div>
            </div>

            <hr />
    <div className="flex items-center justify-center mt-5 ">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Send Money</h2>
        <form onSubmit={handleSendMoney} className="space-y-4">
          <div>
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Bank Account Number
            </label>
            <input
              type="number"
              id="accountNumber"
              
            
              placeholder="Enter account number"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="accountNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Bank Routing Number
            </label>
            <input
              type="number"
              id="accountNumber"
             
              placeholder="Enter routing number"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-600"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-400 focus:outline-none disabled:opacity-50"
          >
            {loading ? "Processing..." : "Send Money"}
          </button>
        </form>
        {error && (
          <div className="mt-4 text-sm text-center text-red-500">
            {error}
          </div>
        )}
      </div>
    </div></div>
    <BottomNav/>
    </>
  );
};

export default SendMoney;
