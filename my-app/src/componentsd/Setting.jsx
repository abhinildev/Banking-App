import React, { useState } from 'react';
import Sidebar from '../Pages/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '/home/abhinildev/Codes/Frontends/my-app/ThemeContext.jsx'; // ⬅️

const Setting = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // ⬅️
  const [email, setEmail] = useState('daniel@gmail.com');
  const [name, setName] = useState('Daniel Lewis');

  const handleSave = (e) => {
    e.preventDefault();
    alert('Changes Saved!');
  };

  const handleLogout = () => {
    alert('Logged out');
    navigate('/');
  };

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-[#0f172a] text-white' : 'bg-gray-100 text-black'}`}>
      <Sidebar />
      <main className="flex-1 p-6 space-y-8">
        <h1 className="text-3xl font-bold">Settings</h1>
        <form
          onSubmit={handleSave}
          className={`${theme === 'dark' ? 'bg-[#1e293b] text-white' : 'bg-white text-black'} p-6 rounded-xl shadow-lg space-y-4 max-w-lg`}
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full px-3 py-2 rounded text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              className="w-full px-3 py-2 rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between pt-4">
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
              Save Changes
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </form>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Logout
        </button>
      </main>
    </div>
  );
};

export default Setting;
