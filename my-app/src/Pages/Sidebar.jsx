// Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiBarChart2,
  FiSettings,
  FiInfo,
  FiMail,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';
import { FaChartPie } from 'react-icons/fa';

const linkClasses =
  'flex items-center gap-3 py-2 px-3 rounded transition hover:bg-[#334155]';

const Sidebar = () => (
  <aside className="min-h-screen w-60 bg-[#1e293b] text-white p-4 space-y-6">
    <h2 className="text-2xl font-bold tracking-wide px-2">Nexus</h2>

    <nav className="space-y-1">
      <NavLink to="/personalPage" end className={linkClasses}>
        <FiHome /> Dashboard
      </NavLink>
      <NavLink to="/budgets" className={linkClasses}>
        <FiBarChart2 /> Budgets
      </NavLink>
      <NavLink to="/settings" className={linkClasses}>
        <FiSettings /> Settings
      </NavLink>
      <NavLink to="/about" className={linkClasses}>
        <FiInfo /> About Us
      </NavLink>
      <NavLink to="/contact" className={linkClasses}>
        <FiMail /> Contact Us
      </NavLink>
      <NavLink to="/security" className={linkClasses}>
        <FiShield /> Security
      </NavLink>
      <NavLink to="/upgrade" className={linkClasses}>
        <FiTrendingUp /> Upgrade Plan
      </NavLink>
      <NavLink to='/categories' className={linkClasses}>
          <FaChartPie/> Categories
      </NavLink>
    </nav>
  </aside>
);

export default Sidebar;
