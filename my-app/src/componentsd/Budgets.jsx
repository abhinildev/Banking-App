import React, { useEffect, useState } from 'react';
import Sidebar from '../Pages/Sidebar';
import BudgeChart from '../Pages/BudgeChart';
import axios from '../Api/axios.js';

/* ─────────────────────────────────── */
/* small inline component for setting budget */
const BudgetLimitForm = ({ currentLimit, onSaved }) => {
  const [limit, setLimit] = useState(currentLimit ?? '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/budget/set-budget',
        { limit: parseFloat(limit) },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onSaved(parseFloat(limit));
    } catch (err) {
      console.error('Error saving limit', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 bg-[#1e293b] p-4 rounded-xl shadow-lg">
      <label className="block text-sm">Monthly Budget Limit (₹)</label>
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        className="w-full px-3 py-2 rounded text-black"
        placeholder="e.g. 5000"
        required
      />
      <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
        Save Limit
      </button>
    </form>
  );
};
/* ─────────────────────────────────── */

const Budgets = () => {
  const [summary, setSummary] = useState(null);
  const [budgetLimit, setBudgetLimit] = useState(null);

  /* fetch summary & limit */
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const token = localStorage.getItem('token');
        // summary
        const sumRes = await axios.get('/budget/summary', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setSummary(sumRes.data);
        // limit
        const limRes = await axios.get('/budget', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBudgetLimit(limRes.data.budgetLimit);
      } catch (err) {
        console.error('Error fetching budget data', err);
      }
    };
    fetchAll();
  }, []);

  /* spending progress bar helper */
  const percentUsed =
    summary && budgetLimit
      ? (summary.avgMonthlySpend / budgetLimit) * 100
      : 0;

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />

      <main className="flex-1 p-6 space-y-8">
        <h1 className="text-3xl font-bold">Budgets Overview</h1>

        {/* Budget Limit Form */}
        <BudgetLimitForm
          currentLimit={budgetLimit}
          onSaved={(newLimit) => setBudgetLimit(newLimit)}
        />

        {summary && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-400">Balance (Today)</p>
                <h2 className="text-2xl font-bold">
                  ₹{summary.currentBalance.toFixed(2)}
                </h2>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-400">Avg. Monthly Spend</p>
                <h2 className="text-2xl font-bold">
                  ₹{summary.avgMonthlySpend.toFixed(2)}
                </h2>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-400">Projected Next Month</p>
                <h2 className="text-2xl font-bold">
                  ₹{summary.projectedNextMonth.toFixed(2)}
                </h2>
              </div>
            </div>

            {/* Progress Indicator */}
            {budgetLimit && (
              <div className="bg-[#1e293b] p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-400 mb-1">
                  Budget Usage ({percentUsed.toFixed(1)}%)
                </p>
                <div className="w-full bg-gray-700 h-3 rounded">
                  <div
                    className={`h-3 rounded ${
                      percentUsed > 85 ? 'bg-red-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(percentUsed, 100)}%` }}
                  />
                </div>
                {percentUsed > 85 && (
                  <p className="text-red-400 text-xs mt-2">
                    ⚠ You have used over 85% of your limit!
                  </p>
                )}
              </div>
            )}

            {/* Chart */}
            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold mb-4">
                Budgets{' '}
                <span className="text-xs text-gray-400">(* projected)</span>
              </h2>
              <BudgeChart data={summary.monthlyData} />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Budgets;
