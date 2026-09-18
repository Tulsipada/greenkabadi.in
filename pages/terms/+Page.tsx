import React from 'react'

export function Page() {
  return (
    <main className="legal-page">
      <div className="container legal-card">
        <h1>Terms of Service · सेवा की शर्तें</h1>
        <p className="updated">Last updated: 1 Sep 2026</p>
        <p>
          By using GreenकBadi apps or website you agree to these terms. If you do
          not agree, please do not use the service.
        </p>
        <h2>Service · सेवा</h2>
        <p>
          GreenकBadi connects customers who wish to sell scrap with authorised
          collectors. We facilitate scheduling, assignment and payment records.
          Final rates depend on item quality, weight and market conditions at
          pickup time.
        </p>
        <h2>Your responsibilities · ग्राहक की जिम्मेदारी</h2>
        <ul>
          <li>Provide accurate address and contact details</li>
          <li>Post honest descriptions and photos of scrap</li>
          <li>
            Follow category instructions (e.g. no leaking batteries, sealed
            fridge gas)
          </li>
          <li>Be available or designate someone for pickup at agreed time</li>
        </ul>
        <h2>Payments · भुगतान</h2>
        <p>
          Payment is made by the collector at pickup after verification. The
          amount recorded in the app is the official receipt. Disputes should be
          raised promptly via in-app chat or Contact us.
        </p>
        <h2>Staff &amp; admin · कर्मी और एडमिन</h2>
        <p>
          Collector accounts are created by admin only. Staff must complete
          pickups honestly and record correct weights and amounts. Admin may
          adjust transaction records for corrections with an audit trail.
        </p>
        <h2>Liability · दायित्व</h2>
        <p>
          GreenकBadi is not liable for delays caused by weather, traffic or
          incorrect customer information. Hazardous or prohibited materials may
          be refused. Institutional pickups may require separate agreements.
        </p>
        <p>
          <a href="/">← Back to website</a>
        </p>
      </div>
    </main>
  )
}

export const title = 'Terms of Service - GreenकBadi'
