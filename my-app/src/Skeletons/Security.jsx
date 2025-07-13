// Security.jsx
import React from 'react';
import PageShell from './PageShell';

const Security = () => (
  <PageShell title="Security & Compliance">
    <p>
      Nexus is engineered with a <strong>defense‑in‑depth</strong> model:
      zero‑trust networking, AES‑256 encryption at rest, TLS 1.3 in transit,
      and real‑time anomaly detection backed by machine‑learning heuristics.
    </p>
    <p>
      We are SOC 2 Type II certified and fully compliant with GDPR, PCI‑DSS,
      and ISO 27001 frameworks. Independent audits are performed semi‑annually.
    </p>
  </PageShell>
);

export default Security;
