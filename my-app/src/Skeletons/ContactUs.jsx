import React from 'react';
import Sidebar from '../Pages/Sidebar'; // Adjust the path based on your folder structure

const ContactUs = () => (
  <div className="flex min-h-screen bg-[#0f172a] text-white">
    <Sidebar />
    <main className="flex-1 p-6 space-y-6">
      <h1 className="text-3xl font-bold">Contact Nexus</h1>
      <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4">
        <p className="text-lg">
          Our client success team is available <strong>24 × 7 × 365</strong>.
        </p>
        <ul className="space-y-2">
          <li>
            📧 Email: <a className="text-blue-400" href="mailto:support@nexus.ai">support@nexus.ai</a>
          </li>
          <li>📞 Phone: +1 (800) 123‑4567</li>
          <li>🏢 HQ: 123 Finance Boulevard, Palo Alto, CA 94301</li>
        </ul>
      </div>
    </main>
  </div>
);

export default ContactUs;
