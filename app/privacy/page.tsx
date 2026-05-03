import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Coldpapa handles early-access waitlist information, product communications, and privacy choices.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy · Coldpapa",
    description:
      "How Coldpapa handles early-access waitlist information, product communications, and privacy choices.",
    url: "/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: (
      <>
        <p>
          When you join the waitlist, we may collect your email address and any optional details you
          choose to provide, such as your name, trading experience, or assets you are interested in.
        </p>
        <p>
          If you interact with the website, basic technical information such as device type, browser,
          pages viewed, and approximate usage patterns may be collected to improve the landing page
          and early-access experience.
        </p>
      </>
    ),
  },
  {
    title: "How we use information",
    body: (
      <>
        <p>
          We use waitlist information to manage early access, send product updates, understand
          interest in features, and improve Coldpapa before launch.
        </p>
        <p>
          We do not sell personal information. We do not use waitlist information to provide
          financial advice or make trading recommendations.
        </p>
      </>
    ),
  },
  {
    title: "Service providers",
    body: (
      <p>
        Coldpapa may use trusted service providers for hosting, analytics, email delivery, form
        handling, and product operations. These providers should only process information as needed
        to support the service.
      </p>
    ),
  },
  {
    title: "Cookies and analytics",
    body: (
      <p>
        The current landing page does not require advertising cookies. If analytics or additional
        tracking tools are added later, the policy should be updated to describe what is collected
        and how users can manage preferences.
      </p>
    ),
  },
  {
    title: "Data retention",
    body: (
      <p>
        Waitlist information is kept as long as needed to provide early-access updates, operate the
        waitlist, comply with legal obligations, resolve disputes, or improve the product. Users may
        request removal from future communications.
      </p>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        We use reasonable administrative, technical, and organizational safeguards for information
        handled through the landing page. No system can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <p>
        You can choose not to provide optional waitlist details. You may unsubscribe from product
        emails or request updates to your waitlist information through the contact path provided on
        this site.
      </p>
    ),
  },
  {
    title: "Policy updates",
    body: (
      <p>
        We may update this policy as Coldpapa evolves. Material updates should be reflected on this
        page with a new last-updated date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains how Coldpapa handles information submitted through the landing page and early-access waitlist."
      updated="May 3, 2026"
      sections={sections}
    />
  );
}
