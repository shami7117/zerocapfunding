import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
export const metadata: Metadata = {
  title: "Privacy Policy | ZeroCap Funding",
  description:
    "Privacy Statement for ZeroCap Funding - Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 font-montserrat">PRIVACY STATEMENT</h1>
          <p className="text-gray-600 mb-12 text-lg">Last Updated: March 18, 2025</p>

          <div className="space-y-8 text-gray-800 leading-relaxed">
            <p>
              Zero Cap Funding ("us," "we," or "our") thanks you for visiting the online and mobile resources we
              publish. We use the words "you" and "your" to mean you, the visitor, and other users of our online and
              mobile resources who are, in all cases, over the age of 13.
            </p>

            <div>
              <p className="mb-4">
                This Privacy Statement ("this statement," "our statement," or "the policy") explains:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>From whom and what types of personal information we collect</li>
                <li>How we use it</li>
                <li>With whom we share it</li>
                <li>How we protect it</li>
              </ul>
            </div>

            <p>
              "Online and mobile resources" refers to the websites and internet-based features we operate, as well as
              apps developed and distributed by Zero Cap Funding to allow customers and visitors to access content,
              interact with our services, or engage with our resources.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                California Notice of Collection of Personal Information:
              </h3>
              <p>
                For details on California-specific privacy rights, see the section THE CALIFORNIA CONSUMER PRIVACY ACT.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">WHO WE ARE</h2>
              <p className="mb-4">Zero Cap Funding is a business consulting and funding solutions company.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  For residents of jurisdictions covered by the GDPR and certain U.S. state privacy laws, Zero Cap
                  Funding is the data controller.
                </li>
                <li>
                  For California residents, Zero Cap Funding is considered a Business under the California Consumer
                  Privacy Act (CCPA).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">WHO WE COLLECT INFORMATION FROM</h2>
              <p className="mb-4">We may collect personal information from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Visitors and users of our online and mobile resources</li>
                <li>Customers and clients</li>
                <li>Current and prospective workforce members</li>
                <li>Vendors, affiliates, and business partners</li>
              </ul>
              <p className="mt-4">
                Personal Information refers to data that identifies or can reasonably be linked to an individual (e.g.,
                name, address, phone number, email, financial information, social security number, date of birth).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">WHAT WE COLLECT</h2>
              <p className="mb-4">We collect two types of information:</p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>
                  <strong>Non-Personal Information</strong> – Automatically collected details such as your device type,
                  browser, and operating system.
                </li>
                <li>
                  <strong>Personal Information</strong> – Data you voluntarily provide (e.g., name, email, address,
                  payment details) or information automatically gathered through tracking technologies.
                </li>
              </ol>
              <p className="mb-4">
                By using our websites, apps, or services, you consent to our collection and use of your information as
                described in this statement.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Voluntarily Provided Information (examples):</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Emails & Online Forms</li>
                    <li>Account Registration</li>
                    <li>Event Sign-Ups</li>
                    <li>Customer Subscriptions</li>
                    <li>Social Features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Automatically Collected Information (examples):</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address, domain, and browser details</li>
                    <li>Device information and geolocation</li>
                    <li>Pages visited, links clicked, and time spent</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">HOW WE USE YOUR INFORMATION</h2>
              <p className="mb-4">We may process personal information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Delivering and managing services</li>
                <li>Managing accounts and subscriptions</li>
                <li>Improving our website and customer support</li>
                <li>Processing transactions securely</li>
                <li>Protecting against fraud and unauthorized use</li>
                <li>Sending service-related updates</li>
                <li>Marketing and promotional communications (with your consent where required)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                WHEN & WITH WHOM WE SHARE INFORMATION
              </h2>
              <p className="mb-4">
                We do not sell or rent your personal information. We may share it in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Affiliates</strong> (within the Zero Cap Funding family of companies)
                </li>
                <li>
                  <strong>Vendors & Business Partners</strong> (for service delivery)
                </li>
                <li>
                  <strong>Legal Obligations</strong> (valid legal requests)
                </li>
                <li>
                  <strong>Business Transfers</strong> (merger, acquisition, reorganization)
                </li>
                <li>
                  <strong>To Prevent Harm</strong> (rights, property, safety)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                EMAILS, MARKETING & COMMUNICATIONS
              </h2>
              <p className="mb-4">We may send newsletters, promotional offers, or updates.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can opt out anytime via unsubscribe link or by contacting us.</li>
                <li>Transactional communications (billing, account updates) cannot be unsubscribed.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">PAYMENTS</h2>
              <p className="mb-2">Payments are processed via secure third-party providers.</p>
              <p>Zero Cap Funding does not store your card or payment details.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">YOUR RIGHTS & OPTIONS</h2>
              <p className="mb-4">
                Depending on your jurisdiction (California, Virginia, EU, UK, etc.), you may have rights to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access, correct, or delete personal data</li>
                <li>Request information about how data is collected, shared, or used</li>
                <li>Opt out of targeted advertising or "sale" of data where applicable</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
              <p>
                <strong>Requests:</strong> help@zerocapfundingpromo.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">CHILDREN'S PRIVACY</h2>
              <p className="mb-2">Our services are not directed toward individuals under 18.</p>
              <p>If we learn that a minor has provided personal information, we will delete it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">SECURITY MEASURES</h2>
              <p className="mb-2">
                We maintain administrative, technical, and organizational safeguards consistent with industry standards.
              </p>
              <p>However, no system is fully secure, and we cannot guarantee absolute protection.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                STATE & INTERNATIONAL PRIVACY LAWS
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>California (CCPA):</strong> Rights to access, deletion, opt-out
                </li>
                <li>
                  <strong>Virginia:</strong> Rights to access, correction, deletion, opt-out of targeted advertising
                </li>
                <li>
                  <strong>GDPR Jurisdictions:</strong> Transparency, access, rectification, erasure, portability,
                  objection
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">ONLINE TRACKING & ADVERTISING</h2>
              <p className="mb-4">
                We and third parties may use cookies, pixels, and similar technologies for analytics, personalization,
                and targeted advertising.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manage cookies in browser settings</li>
                <li>Opt-out via Global Privacy Control (GPC) signals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">CHANGES TO THIS STATEMENT</h2>
              <p className="mb-2">This Privacy Statement is effective as of March 18, 2025.</p>
              <p>We may revise it periodically. Continued use constitutes acceptance of changes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">CONTACTING US</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Legal Department</p>
                <p>Zero Cap Funding</p>
                <p>30 N Gloud St. Ste N</p>
                <p>Sheridan, WY, United States, Wyoming</p>
                <p className="mt-3">
                  <a href="mailto:help@zerocapfundingpromo.com" className="text-[#39BF00] hover:underline">
                    help@zerocapfundingpromo.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
