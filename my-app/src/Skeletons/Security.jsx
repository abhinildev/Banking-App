import React from 'react';
import Sidebar from '../Pages/Sidebar'; // adjust path as needed

const Security = () => (
  <div className="flex min-h-screen bg-[#0f172a] text-white">
    <Sidebar />
    <main className="flex-1 p-6 space-y-6">
      <h1 className="text-3xl font-bold">Security & Compliance</h1>
      <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4">
        <p>
          Nexus is engineered with a <strong>defense‑in‑depth</strong> model:
          zero‑trust networking, AES‑256 encryption at rest, TLS 1.3 in transit,
          and real‑time anomaly detection backed by machine‑learning heuristics.
        </p>
        <p>
          We are SOC 2 Type II certified and fully compliant with GDPR, PCI‑DSS,
          and ISO 27001 frameworks. Independent audits are performed semi‑annually.
        </p>
      </div>
    </main>
  </div>
);

export default Security;
