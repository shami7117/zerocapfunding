import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
export const metadata: Metadata = {
  title: "Terms and Conditions | ZeroCap Funding",
  description: "General Terms and Conditions for ZeroCap Funding services and programs.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 font-montserrat">GENERAL TERMS AND CONDITIONS</h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-800 font-montserrat leading-relaxed">
            <p className="text-base mb-8">
              These General Terms and Conditions (the "Terms and Conditions") form part of and govern the Service
              Agreement (the "Agreement") between Zero Cap Funding, including its affiliates (the "Company" or
              "Consulting Firm"), and the person or entity identified as the "Client" in the Agreement. By signing the
              Agreement and/or receiving services from Zero Cap Funding, the Client agrees to be bound by these Terms
              and Conditions.
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Definitions</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>1.1 Affiliate</strong> – Any entity under common control with, controlling, or controlled by
                  Zero Cap Funding or the Client.
                </p>

                <p>
                  <strong>1.2 Confidential Information</strong> – Any non-public information shared by one party to the
                  other, including but not limited to business strategies, trade secrets, client lists, methodologies,
                  or financial information.
                </p>

                <p>
                  <strong>1.3 Intellectual Property (IP)</strong> – All methods, tools, training materials, processes,
                  software, trademarks, and proprietary content owned or licensed by Zero Cap Funding, including any
                  adaptations or derivative works.
                </p>

                <p>
                  <strong>1.4 Services</strong> – Consulting, training, and related deliverables offered by Zero Cap
                  Funding under the Agreement, including but not limited to the Business Credit Blueprint Program.
                </p>

                <p>
                  <strong>1.5 Client Obligations</strong> – Duties and responsibilities the Client must fulfill under
                  the Agreement and these Terms and Conditions.
                </p>

                <p>
                  <strong>1.6 Programs</strong> – Proprietary training, consulting, and funding solutions provided by
                  Zero Cap Funding.
                </p>

                <p>
                  <strong>1.7 Applicable Laws</strong> – All relevant federal, state, and local laws, including Nevada
                  law, the Fair Credit Reporting Act (FCRA), and other U.S. regulations.
                </p>

                <p>
                  <strong>1.8 Personal Information</strong> – Any data from the Client that falls under applicable
                  privacy laws, such as personally identifiable information (PII) and financial records.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Scope of Services</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>2.1 Description of Services</strong> – Zero Cap Funding agrees to provide consulting,
                  training, and related services as outlined in the Agreement, which may include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>One-on-one consulting with a Funding Supervisor.</li>
                  <li>Access to proprietary materials, tools, and resources.</li>
                  <li>Step-by-step guidance for business funding applications.</li>
                </ul>

                <p>
                  <strong>2.2 Limitations of Services</strong> – Zero Cap Funding does not guarantee any specific
                  approval amount, funding outcome, or timeline. Results depend on the Client's compliance and active
                  participation.
                </p>

                <p>
                  <strong>2.3 Service Modifications</strong> – Zero Cap Funding reserves the right to update, adjust, or
                  discontinue parts of the Services, provided such changes do not substantially reduce the Client's
                  rights under the Agreement.
                </p>

                <p>
                  <strong>2.4 Third-Party Services</strong> – Zero Cap Funding may work with outside service providers.
                  The Client acknowledges that the Company is not liable for the acts or omissions of third parties.
                </p>

                <p>
                  <strong>2.5 Support Packages</strong> – Services are offered in tiered packages:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Business Credit Blueprint (Basic Package):</strong> One-on-one support continues until the
                    Client secures up to $100,000 in 0% interest business credit approvals. Upon reaching that
                    milestone, services are deemed fully delivered, with no further obligations.
                  </li>
                  <li>
                    <strong>Unlimited Business Credit Blueprint:</strong> Provides the same one-on-one support until
                    $100,000 is achieved, after which additional support is offered primarily via email. Clients may
                    request updated Funding Action Plans for as long as the program remains active.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Fees and Payment Terms</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>3.1 Program Fee</strong> – The Client agrees to pay the full program fee outlined in the
                  Agreement. Fees are non-refundable except as provided in Section 4.
                </p>

                <p>
                  <strong>3.2 Payment Methods</strong> – Payments must be made in the form specified in the Agreement.
                </p>

                <p>
                  <strong>3.3 Collection Costs</strong> – Any overdue payments will require the Client to cover
                  associated collection costs, including attorney and agency fees.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Refund Policy</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>4.1 Eligibility</strong> – Refunds are only considered if the Client:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Follows all directions provided by the Funding Supervisor.</li>
                  <li>Applies to every institution listed in their Funding Action Plan.</li>
                  <li>Receives no approvals despite full compliance.</li>
                </ul>

                <p>
                  <strong>4.2 Review Process</strong> – Refund requests must be submitted in writing. Zero Cap Funding
                  will review within seven (7) business days, and approved refunds will be processed within the
                  following seven (7) business days.
                </p>

                <p>
                  <strong>4.3 Exclusions</strong> – Refunds will not be issued if the Client fails to comply with
                  requirements or disputes charges through their bank or financial institution.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Right to Cancel (Cooling-Off Period)</h2>

              <div className="space-y-4 text-base">
                <p>
                  The Client may cancel their purchase up to midnight of the third business day after receiving the
                  Agreement or program access, whichever is later.
                </p>
                <p>After this period, all sales are final.</p>
                <p>Cancellations must be in writing and submitted either by mail to:</p>
                <p className="pl-4">Zero Cap Funding, 30 N Gloud St. Ste N, Sheridan, WY, United States, Wyoming</p>
                <p>
                  or by email to:{" "}
                  <a href="mailto:help@zerocapfundingpromo.com" className="text-[#39BF00] hover:underline">
                    help@zerocapfundingpromo.com
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Complaints & Dispute Escalation</h2>

              <div className="space-y-4 text-base">
                <p>
                  The Client must first notify Zero Cap Funding in writing regarding any concerns before initiating
                  refund requests, chargebacks, or legal action. The Company will respond within ten (10) business days.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>

              <div className="space-y-4 text-base">
                <p>
                  All training materials, tools, guides, and deliverables remain proprietary. The Client may not copy,
                  distribute, or reverse engineer them without written approval.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Updates to Terms</h2>

              <div className="space-y-4 text-base">
                <p>
                  Zero Cap Funding may update these Terms and Conditions at any time. Notice will be provided for
                  significant changes. Continued use of services constitutes acceptance.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Breach of Agreement</h2>

              <div className="space-y-4 text-base">
                <p>A breach includes but is not limited to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Non-payment of fees.</li>
                  <li>Unauthorized use or sharing of proprietary materials.</li>
                  <li>Violation of confidentiality terms.</li>
                </ul>
                <p>
                  Zero Cap Funding may immediately terminate services upon breach, while still pursuing outstanding
                  payments and legal remedies.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Ownership of Intellectual Property</h2>

              <div className="space-y-4 text-base">
                <p>
                  All intellectual property created during the delivery of services remains the sole property of Zero
                  Cap Funding. The Client agrees to assist in confirming the Company's ownership rights if necessary.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Survival of Terms</h2>

              <div className="space-y-4 text-base">
                <p>
                  Clauses related to confidentiality, IP rights, indemnification, dispute resolution, non-solicitation,
                  and non-disparagement shall survive the end of this Agreement.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Dispute Resolution</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>12.1 Governing Law</strong> – This Agreement is governed by the laws of Nevada.
                </p>
                <p>
                  <strong>12.2 Dispute Process</strong> – Any disputes will first be mediated. If unresolved, disputes
                  will be submitted to binding arbitration in Nevada.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Termination</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>13.1 By Zero Cap Funding</strong> – Services may be terminated for non-payment, breach, or
                  misconduct.
                </p>
                <p>
                  <strong>13.2 Effect of Termination</strong> – Upon termination, all rights granted to the Client
                  cease, while outstanding obligations remain enforceable.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Miscellaneous</h2>

              <div className="space-y-4 text-base">
                <p>
                  <strong>14.1 Amendments</strong> – Any modifications must be in writing and signed by both parties.
                </p>
                <p>
                  <strong>14.2 Notices</strong> – All official communications must be sent to{" "}
                  <a href="mailto:help@zerocapfundingpromo.com" className="text-[#39BF00] hover:underline">
                    help@zerocapfundingpromo.com
                  </a>
                  .
                </p>
                <p>
                  <strong>14.3 Entire Agreement</strong> – These Terms, together with the signed Agreement, represent
                  the full and complete understanding between the parties and override all prior arrangements.
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
