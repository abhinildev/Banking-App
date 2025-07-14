import React from 'react';
import Sidebar from '../Pages/Sidebar'; // adjust path as necessary

const AboutUs = () => (
  <div className="flex min-h-screen bg-[#0f172a] text-white">
    <Sidebar />
    <main className="flex-1 p-6 space-y-6">
      <h1 className="text-3xl font-bold">About Nexus</h1>
      <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-4">
        <p>
          At <strong>Nexus</strong>, we orchestrate secure, scalable, and insightful
          financial solutions for modern enterprises and discerning individuals.
          By fusing advanced analytics with intuitive design, we help clients
          anticipate risk, optimize capital allocation, and accelerate growth.
        </p>
        <p>
          Founded in 2025, Nexus has established strategic alliances with Tier‑1
          banks, cloud providers, and global regulators, ensuring our platform
          meets—and often exceeds—international compliance standards.
        </p>
      </div>
    </main>
  </div>
);

export default AboutUs;
