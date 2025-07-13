
import React from 'react';

const PageShell = ({ title, children }) => (
  <main className="flex-1 p-10 text-gray-100">
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-white">{title}</h1>
      <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg space-y-4">
        {children}
      </div>
    </div>
  </main>
);

export default PageShell;
