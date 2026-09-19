import React from 'react'

export function Page() {
  return (
    <main className="legal-page">
      <div className="container legal-card">
        <h1>Privacy Policy · गोपनीयता नीति</h1>
        <p className="updated">Last updated: 19 Sep 2026</p>
        <p>
          GreenकBadi (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the GreenकBadi customer
          mobile app (Android), staff app, admin tools and website
          (greenkabadi.in). This Privacy Policy explains what personal data we
          collect, how we use it, and your choices. It applies when you use our
          apps or website to book scrap pickup, chat with collectors, or manage
          your account.
        </p>
        <p>
          By using GreenकBadi you agree to this policy. If you do not agree,
          please do not use the service.
        </p>

        <h2>1. Who we are · हम कौन हैं</h2>
        <p>
          GreenकBadi is a scrap pickup marketplace serving Siliguri and nearby
          areas (Phase 1). Operator contact for privacy:
        </p>
        <ul>
          <li>
            Email:{' '}
            <a href="mailto:hello@greenkabadi.in">hello@greenkabadi.in</a>
          </li>
          <li>
            Address: Milanmore, Maheshmari, Champasari, Siliguri, West Bengal,
            India
          </li>
        </ul>

        <h2>2. Data we collect · हम क्या एकत्र करते हैं</h2>
        <p>Depending on how you use the app, we may collect:</p>
        <ul>
          <li>
            <strong>Account:</strong> name, phone number, email, password (stored
            hashed), optional profile photo
          </li>
          <li>
            <strong>Location:</strong> pickup / saved addresses and approximate
            or precise GPS when you set an address or share location for pickup
          </li>
          <li>
            <strong>Content you provide:</strong> scrap photos, categories,
            descriptions, order history, in-app chat messages
          </li>
          <li>
            <strong>Transactions:</strong> weight, rates, payment amounts, payment
            mode (cash / UPI) and digital receipt records
          </li>
          <li>
            <strong>Device &amp; usage:</strong> device type, OS version, app
            version, language preference (English, Hindi, Bengali, Nepali), and
            basic logs needed to run and secure the service
          </li>
          <li>
            <strong>Support:</strong> messages you send via Contact us or email
          </li>
        </ul>

        <h2>3. App permissions · ऐप अनुमतियाँ</h2>
        <p>The Android customer app may request:</p>
        <ul>
          <li>
            <strong>Location</strong> - to set pickup address and help collectors
            reach you
          </li>
          <li>
            <strong>Camera / photos</strong> - to upload scrap pictures for your
            listing
          </li>
          <li>
            <strong>Notifications</strong> - for order status and pickup updates
          </li>
          <li>
            <strong>Internet</strong> - to sync bookings, chat and receipts
          </li>
        </ul>
        <p>
          You can revoke permissions in Android Settings. Some features will not
          work without the related permission.
        </p>

        <h2>4. How we use data · उपयोग</h2>
        <ul>
          <li>Create and manage your account</li>
          <li>Schedule pickups and assign collectors</li>
          <li>Show rates, track orders and issue digital receipts</li>
          <li>Send status notifications and respond to support requests</li>
          <li>Prevent fraud, abuse and improve service quality</li>
          <li>Comply with applicable law</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal data to third parties for
          advertising.
        </p>

        <h2>5. Sharing · साझा करना</h2>
        <ul>
          <li>
            <strong>Collectors:</strong> assigned staff see address, contact and
            item details needed for pickup
          </li>
          <li>
            <strong>Admin / support:</strong> may access orders when you contact
            us or for operations and safety
          </li>
          <li>
            <strong>Service providers:</strong> hosting, SMS/OTP or push
            notification vendors that process data on our instructions
          </li>
          <li>
            <strong>Legal:</strong> when required by law or to protect rights and
            safety
          </li>
        </ul>

        <h2>6. Retention · कितने समय तक रखते हैं</h2>
        <p>
          We keep account, order and receipt data while your account is active
          and for a reasonable period after for disputes, accounting and legal
          requirements. You may request deletion (see below). Backups may retain
          data for a limited additional time.
        </p>

        <h2>7. Security · सुरक्षा</h2>
        <p>
          We use industry-standard measures such as hashed passwords, access
          controls for staff/admin, and HTTPS for data in transit. No method of
          transmission or storage is 100% secure; please keep your login details
          confidential.
        </p>

        <h2>8. Children · बच्चे</h2>
        <p>
          GreenकBadi is not directed at children under 13. We do not knowingly
          collect personal data from children under 13. If you believe a child
          has provided data, contact us and we will delete it.
        </p>

        <h2>9. Your choices · आपके विकल्प</h2>
        <ul>
          <li>Update profile, addresses and language in the app</li>
          <li>
            Request access, correction or deletion of your account from Profile
            settings or by emailing{' '}
            <a href="mailto:hello@greenkabadi.in">hello@greenkabadi.in</a>
          </li>
          <li>Opt out of non-essential notifications in device settings</li>
        </ul>
        <p>
          Account deletion removes or anonymises personal data that is no longer
          required, except where we must retain records by law (for example
          completed payment receipts for a limited period).
        </p>

        <h2>10. Changes · बदलाव</h2>
        <p>
          We may update this policy. The &quot;Last updated&quot; date will
          change. Material updates may also be shown in the app or on this page.
          Continued use after changes means you accept the updated policy.
        </p>

        <h2>11. Contact · संपर्क</h2>
        <p>
          Privacy questions:{' '}
          <a href="mailto:hello@greenkabadi.in">hello@greenkabadi.in</a>
          <br />
          Or use the{' '}
          <a href="/#contact">website contact form</a>.
        </p>

        <p className="legal-nav">
          <a href="/terms">Terms &amp; Conditions</a>
          <span aria-hidden="true"> · </span>
          <a href="/">← Back to website</a>
        </p>
      </div>
    </main>
  )
}

export const title = 'Privacy Policy - GreenकBadi'
export const description =
  'Privacy Policy for the GreenकBadi Android app and website - data collection, permissions, sharing and your rights.'
