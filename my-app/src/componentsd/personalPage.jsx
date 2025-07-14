import React, { useEffect, useState, useCallback, useRef } from 'react';
import Sidebar from '../Pages/Sidebar';
import LineChart from '../Pages/LineChart';
import TransactionItem from '../Pages/TransactionItems';
import AddTransaction from '../Pages/AddTransaction.jsx';
import axios from '../Api/axios.js';
import { downloadCSV, downloadPDF } from '../Api/pdf.js';

const PersonalPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userName = user?.name || 'User';

  const [transactions, setTransactions] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    startDate: '',
    endDate: '',
  });
  const addFormRef = useRef();

  const fetchTransactions = useCallback(async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/transaction/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTransactions(res.data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const filteredTransactions = transactions.filter((tx) => {
    const date = new Date(tx.createdAt);
    const matchSearch =
      !filters.search ||
      (tx.category || '')
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      tx.type.toLowerCase().includes(filters.search.toLowerCase());
    const matchType =
      !filters.type || tx.type.toLowerCase() === filters.type.toLowerCase();
    const matchStart =
      !filters.startDate || new Date(filters.startDate) <= date;
    const matchEnd = !filters.endDate || new Date(filters.endDate) >= date;
    return matchSearch && matchType && matchStart && matchEnd;
  });

  const totalContribution = filteredTransactions
    .filter((t) => t.type.toLowerCase() === 'donation')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalRequired = filteredTransactions
    .filter((t) =>
      ['withdrawal', 'withdrawel', 'debit'].includes(t.type.toLowerCase())
    )
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const handleAddFundsClick = () => {
    addFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>

        <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row flex-wrap gap-3">
            <input
              type="text"
              placeholder="Search category / type"
              className="px-3 py-2 rounded text-black flex-1 min-w-[150px]"
              onChange={(e) =>
                setFilters((f) => ({ ...f, search: e.target.value }))
              }
            />

            <select
              className="px-3 py-2 rounded text-black flex-1 min-w-[120px]"
              onChange={(e) =>
                setFilters((f) => ({ ...f, type: e.target.value }))
              }
            >
              <option value="">All Types</option>
              <option value="donation">Donation (credit)</option>
              <option value="debit">Debit / Withdrawal</option>
            </select>

            <input
              type="date"
              className="px-3 py-2 rounded text-black flex-1 min-w-[120px]"
              onChange={(e) =>
                setFilters((f) => ({ ...f, startDate: e.target.value }))
              }
            />
            <input
              type="date"
              className="px-3 py-2 rounded text-black flex-1 min-w-[120px]"
              onChange={(e) =>
                setFilters((f) => ({ ...f, endDate: e.target.value }))
              }
            />

            <div className="flex gap-2">
              <button
                onClick={() => downloadCSV(filteredTransactions)}
                className="bg-green-600 px-4 py-2 rounded text-white whitespace-nowrap"
              >
                Export CSV
              </button>
              <button
                onClick={() => downloadPDF(filteredTransactions)}
                className="bg-red-600 px-4 py-2 rounded text-white whitespace-nowrap"
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg text-center">
            <p className="text-sm text-gray-400">Your Contribution</p>
            <h2 className="text-2xl font-bold">
              ₹{totalContribution.toFixed(2)}
            </h2>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg text-center">
            <p className="text-sm text-gray-400">Your Required Fund</p>
            <h2 className="text-2xl font-bold">
              ₹{totalRequired.toFixed(2)}
            </h2>
          </div>
          <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg text-center">
            <p className="text-sm text-gray-400">Net Balance</p>
            <h2 className="text-2xl font-bold">
              ₹{(totalContribution - totalRequired).toFixed(2)}
            </h2>
            <button
              className="mt-3 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleAddFundsClick}
            >
              Add Funds
            </button>
          </div>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Donation Statistics</h2>
          <LineChart transactions={filteredTransactions} />
        </div>

        <div ref={addFormRef}>
          <AddTransaction onTransactionAdded={fetchTransactions} />
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <div className="space-y-3">
            {filteredTransactions.length === 0 ? (
              <p className="text-gray-400">No transactions found.</p>
            ) : (
              filteredTransactions.slice(0, 5).map((t) => {
                const isNegative = ['withdrawal', 'withdrawel', 'debit'].includes(
                  t.type.toLowerCase()
                );
                const signedAmount = isNegative
                  ? -Number(t.amount)
                  : Number(t.amount);

                return (
                  <TransactionItem
                    key={t.id}
                    name={userName}
                    type={t.type}
                    amount={signedAmount}
                    date={new Date(t.createdAt).toDateString()}
                  />
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PersonalPage;
