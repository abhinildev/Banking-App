import React, { useEffect, useState, useCallback } from 'react';
import Sidebar from '../Pages/Sidebar';
import LineChart from '../Pages/LineChart';
import TransactionItem from '../Pages/TransactionItems';
import AddTransaction from '../Pages/AddTransaction.jsx';
import axios from '../Api/axios.js';

const PersonalPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userName = user?.name || 'User';
  const [transactions, setTransactions] = useState([]);

 
  const fetchTransactions = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      
      const res = await axios.get('/transaction/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data);
    } catch (err) {
      console.error('Error while fetching transactions', err);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-400">Your Contribution</p>
            <h2 className="text-2xl font-bold">$541,840.00</h2>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-400">Your Required Fund</p>
            <h2 className="text-2xl font-bold">$285,371.00</h2>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
            <p className="text-sm text-gray-400">Your Charity Fund</p>
            <h2 className="text-2xl font-bold">$120,184.34</h2>
            <button className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Add Funds
            </button>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Donation Statistics</h2>
          <LineChart />
        </div>

        {/* ➕ Add Transaction Form */}
        <AddTransaction onTransactionAdded={fetchTransactions} />

        {/* Transactions */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {transactions.length === 0 ? (
              <p className="text-gray-400">No transactions found.</p>
            ) : (
              transactions.slice(0, 5).map((t, index) => (
                <TransactionItem
                  key={index}
                  name={userName}
                  type={t.type}
                  amount={t.amount}
                  date={new Date(t.date).toDateString()}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalPage;
