// ContactUs.jsx
import React from 'react';
import PageShell from './PageShell';

const ContactUs = () => (
  <PageShell title="Contact Nexus">
    <p className="text-lg">
      Our client success team is available <strong>24 × 7 × 365</strong>.
    </p>
    <ul className="space-y-2">
      <li>📧 Email: <a className="text-blue-400" href="mailto:support@nexus.ai">support@nexus.ai</a></li>
      <li>📞 Phone: +1 (800) 123‑4567</li>
      <li>🏢 HQ: 123 Finance Boulevard, Palo Alto, CA 94301</li>
    </ul>
  </PageShell>
);

export default ContactUs;
