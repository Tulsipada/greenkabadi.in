import React from 'react'

export function Page() {
  return (
    <main className="legal-page">
      <div className="container legal-card">
        <h1>Privacy Policy · गोपनीयता नीति</h1>
        <p className="updated">Last updated: 1 Sep 2026</p>
        <p>
          GreenकBadi (“we”, “us”) operates the customer app, staff app and admin
          platform to schedule scrap pickups, assign collectors and record
          payments. This policy explains what we collect and how we use it.
        </p>
        <h2>What we collect · हम क्या एकत्र करते हैं</h2>
        <ul>
          <li>Name, phone number, email and profile photo (optional)</li>
          <li>Pickup addresses, GPS location when you add an address</li>
          <li>Scrap photos, categories, order history and chat messages</li>
          <li>Payment amounts and digital receipt records</li>
          <li>Device language preference (English, Hindi, Bengali, Nepali)</li>
        </ul>
        <h2>How we use it · उपयोग</h2>
        <p>
          To schedule pickups, assign collectors, send status notifications,
          process payments, provide support and improve our service. We do{' '}
          <strong>not</strong> sell your personal data to third parties.
        </p>
        <h2>Sharing · साझा करना</h2>
        <p>
          Assigned collectors see the information needed for your pickup
          (address, contact, item details). Admin and support staff may access
          orders when you contact us or for operational needs.
        </p>
        <h2>Security · सुरक्षा</h2>
        <p>
          Accounts are protected by passwords. Staff and admin access is limited
          to authorised personnel. We aim to store data securely and retain it
          only as long as needed for legal and operational purposes.
        </p>
        <h2>Your choices · आपके विकल्प</h2>
        <ul>
          <li>Update profile and language in the app</li>
          <li>Request account deletion from Profile settings</li>
          <li>Contact hello@greenkabadi.in for privacy questions</li>
        </ul>
        <p>
          <a href="/">← Back to website</a>
        </p>
      </div>
    </main>
  )
}

export const title = 'Privacy Policy - GreenकBadi'
