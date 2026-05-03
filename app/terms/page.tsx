import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { RISK_DISCLAIMER } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using the Coldpapa landing page, waitlist, and early-access product information.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Use · Coldpapa",
    description:
      "Terms for using the Coldpapa landing page, waitlist, and early-access product information.",
    url: "/terms",
  },
};

const sections = [
  {
    title: "Use of the site",
    body: (
      <p>
        The Coldpapa website provides product information, illustrative previews, and an
        early-access waitlist. You may use the site only for lawful purposes and in a way that does
        not interfere with the site or other users.
      </p>
    ),
  },
  {
    title: "Early-access status",
    body: (
      <p>
        Coldpapa is presented as an early-access product. Joining the waitlist does not guarantee
        access, availability in your region, support for any specific asset, or future product
        functionality.
      </p>
    ),
  },
  {
    title: "No financial advice",
    body: (
      <>
        <p>{RISK_DISCLAIMER}</p>
        <p>
          Product copy, sample charts, market cards, alerts, and interface previews are for
          informational and illustrative purposes only. They are not investment advice, tax advice,
          legal advice, trading instructions, or recommendations to buy or sell any asset.
        </p>
      </>
    ),
  },
  {
    title: "Crypto risk",
    body: (
      <p>
        Crypto assets can be highly volatile and may lose value quickly. You are responsible for
        evaluating your own financial situation, risk tolerance, and legal obligations before making
        any trading decision.
      </p>
    ),
  },
  {
    title: "Illustrative product information",
    body: (
      <p>
        Prices, portfolio balances, charts, alerts, and product screens shown on the site use static
        sample data unless clearly stated otherwise. They should not be treated as live market data
        or a representation of actual account performance.
      </p>
    ),
  },
  {
    title: "Accounts and availability",
    body: (
      <p>
        Future access may require eligibility checks, identity verification, security setup, and
        compliance review. Coldpapa does not currently claim availability in all countries or support
        for all assets.
      </p>
    ),
  },
  {
    title: "Intellectual property",
    body: (
      <p>
        The Coldpapa name, product visuals, interface concepts, copy, and site materials are owned by
        Coldpapa or its licensors. You may not copy, modify, or redistribute them except as permitted
        by law or with written permission.
      </p>
    ),
  },
  {
    title: "Limitation of liability",
    body: (
      <p>
        The site is provided on an as-is and as-available basis. To the maximum extent allowed by
        law, Coldpapa is not liable for indirect, incidental, consequential, or special damages
        arising from use of the site or reliance on illustrative product information.
      </p>
    ),
  },
  {
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms as the product evolves. Continued use of the site after updates
        means you accept the revised terms.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These terms govern use of the Coldpapa landing page, product previews, and early-access waitlist."
      updated="May 3, 2026"
      sections={sections}
    />
  );
}
