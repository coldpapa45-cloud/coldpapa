# AGENTS.md

Guidance for agents working in this repository.

## Project Mission

Build a premium landing page for **Coldpapa**, a cryptocurrency trading app.

The page should convert visitors into waitlist signups or early-access leads while making the product feel modern, credible, secure, fast, and investor-ready. It should look like a serious fintech product, not a generic crypto template.

Primary conversion goal:

- Get users to join the waitlist or request early access.

Secondary goals:

- Explain the product clearly within the first viewport.
- Communicate trust, security, and responsible trading.
- Show a polished app experience with dashboard, market, portfolio, alert, and trading visuals.
- Make the brand feel modern, calm, and premium.

## Product Positioning

Present Coldpapa as:

- A clean crypto trading and portfolio app.
- Useful for beginners, but capable enough for active traders.
- Built around real-time market insight, portfolio clarity, smart alerts, and simple execution.
- Secure, fast, and uncluttered.

Use direct fintech language. Avoid meme culture, hype, or speculative wealth promises.

Good copy direction:

- "Trade crypto with clarity and control."
- "Track markets, manage your portfolio, and act on price moves faster."
- "Built for real-time decisions without the clutter."
- "A cleaner way to follow markets, set alerts, and manage your crypto portfolio."

Never claim or imply:

- Guaranteed profit.
- Risk-free trading.
- Guaranteed returns.
- Market-beating performance.
- Asset insurance, licensing, or country availability unless explicitly provided.
- Support for every coin, chain, exchange, or country unless explicitly implemented or confirmed.

## Tech Stack

Use the existing repository stack if present. If the app is being created from scratch, prefer:

- Next.js App Router.
- TypeScript.
- Tailwind CSS.
- shadcn/ui where it fits the project.
- Framer Motion for subtle motion.
- lucide-react for icons.
- React Hook Form and Zod for waitlist form validation if a form library is warranted.

Keep dependencies minimal. Do not add a dependency for something that can be implemented cleanly with existing code.

Preferred deployment targets:

- Vercel.
- Cloudflare Pages.
- Netlify.

## Design Direction

The visual direction is **white fintech interface with dark premium contrast**, not noisy neon crypto.

Use:

- White or near-white app surfaces.
- Deep navy, black, charcoal, electric blue, cyan, restrained violet, and green accents.
- Premium glass effects where they support hierarchy.
- Soft gradients used sparingly.
- Crisp typography.
- Large, confident hero headline.
- Floating app cards and phone/dashboard mockups.
- Trading chart visuals.
- Crypto price cards.
- Portfolio and alert previews.
- Motion-driven polish without distraction.

Reference feel:

- Coinbase.
- Kraken.
- Robinhood.
- Revolut.
- Linear.
- Ramp.
- Stripe.
- Phantom.
- Binance institutional pages.

Avoid:

- Meme coin aesthetics.
- Random neon clutter.
- Decorative coin spam.
- Stock-photo-heavy layouts.
- Low-contrast text.
- Generic SaaS cards with no product-specific visuals.
- Huge gradient blobs or one-note color palettes.
- Tiny unreadable financial UI.

## Required Page Structure

Build a complete landing page with these sections. Every major section should include a visual element, not just text.

### 1. Hero

Must include:

- Strong headline.
- Clear subheadline.
- Primary CTA for waitlist or early access.
- Secondary CTA only if useful.
- Highly visual app/dashboard mockup.
- Static market widgets or price cards.

The first viewport must communicate the product value in under five seconds.

### 2. Trust Bar

Use concise trust indicators such as:

- Secure account controls.
- Real-time market views.
- Smart price alerts.
- Portfolio tracking.

Do not fake partner logos, press logos, compliance badges, user counts, or funding claims.

### 3. Features

Cover:

- Real-time market data.
- Portfolio tracking.
- Smart price alerts.
- Fast trading experience.
- Advanced charting.
- Secure account controls.

Each feature should have a distinct icon or visual treatment.

### 4. App Preview

Show realistic static product UI:

- Dashboard.
- Portfolio view.
- Asset detail view.
- Alert card.
- Trading ticket or order preview.

Use sample data only. Do not connect to live market APIs unless explicitly requested.

Mobile app design reference:

- https://www.figma.com/design/Kn17AqMI1XJyhcGXNX8CC8/Coldpapa-App?node-id=1736-29512&t=Jy52kM4AnvRofb5H-4

If using the Figma design, inspect it through available Figma tooling before implementing visual details. If tooling is unavailable, use the link only as a design reference and do not invent exact implementation details from it.

### 5. How It Works

Use a simple four-step flow:

- Create account.
- Track assets.
- Trade or monitor.
- Manage portfolio.

Keep it practical and product-focused.

### 6. Security / Trust

Include:

- 2FA.
- Encryption.
- Device/session controls.
- Compliance-aware wording.
- A crypto risk disclaimer.

Use careful wording: "designed for", "supports", "helps", and "built with" are usually safer than absolute claims.

### 7. Waitlist Momentum

If no real numbers are provided, use neutral language:

- "Join early users getting access first."
- "Get notified as new access windows open."
- "Be among the first to try Coldpapa."

Do not invent waitlist counts, revenue, trading volume, assets under management, testimonials, star ratings, or customer logos.

### 8. FAQ

Include at least:

- Is the app live?
- Which assets are supported?
- Is crypto trading risky?
- How are accounts protected?
- What countries are supported?

Answers must avoid unsupported claims. If something is unknown, say access and availability will be shared during onboarding or launch updates.

### 9. Final CTA

End with a short conversion section:

- Clear closing headline.
- Waitlist or early-access form.
- Subtle risk disclaimer nearby or in the footer.

## Visual Requirements

The page must feel highly visual and purpose-built.

Use:

- Product mockups.
- Trading charts.
- Market cards.
- Portfolio cards.
- Security visuals.
- Feature icons.
- Responsive phone or dashboard frames.
- Subtle dividers and section badges.
- Clean, well-spaced layouts.

Do not make a plain text stack. Do not put UI cards inside other UI cards unless it is a true mock product screen. Avoid decorative visual elements that do not support the product story.

Spacing:

- Use generous vertical padding.
- Keep consistent max-width containers.
- Preserve clear section separation.
- Ensure mobile layouts stack cleanly.

## Animation Requirements

Use Framer Motion only when the project already has it or when adding it is justified by the landing page experience.

Use subtle animation:

- Hero content entrance.
- Floating market/dashboard cards.
- Hover lift on feature cards.
- Scroll reveal for major sections.
- CTA hover states.

Avoid:

- Excessive bouncing.
- Slow motion.
- Distracting loops.
- Layout shift.
- Animations that make text harder to read.

Respect reduced motion with `prefers-reduced-motion` or Framer Motion reduced-motion APIs where practical.

## Waitlist Form

Required field:

- Email.

Optional fields:

- Name.
- Trading experience.
- Interested assets.

The form must:

- Validate email.
- Show error state.
- Show success state.
- Use accessible labels.
- Avoid console logs.
- Avoid fake production submission.

If no backend exists, use a local placeholder handler and clearly mark the integration point in code. Preferred future integrations:

- Resend.
- Tally.
- Formspree.
- Supabase.
- Custom API route.

## Compliance and Risk Language

Include a visible but subtle risk disclaimer, ideally near the final CTA or footer:

> Crypto assets are volatile and involve risk. Coldpapa does not provide financial advice. Always evaluate your own financial situation before trading.

Do not imply:

- Crypto trading is safe.
- Users will make money.
- Assets are insured.
- The app is licensed or regulated unless confirmed.
- The product supports all countries.

## Mock Data Rules

Use realistic static sample data and make it clear that visuals are illustrative.

Acceptable examples:

- BTC, ETH, SOL, USDC.
- +2.4%, -1.1%, +0.8%.
- $68,420, $3,180, $142.80.
- Portfolio allocation percentages.
- Static alert examples.

Do not:

- Fetch live APIs.
- Add API keys.
- Hardcode secrets.
- Present mock prices as current real-time market data.

Use labels such as "Sample market view", "Illustrative data", or "Preview" where needed.

## Component Guidelines

Prefer reusable components when the page becomes more than a few sections:

- `HeroSection`.
- `TrustBar`.
- `FeatureGrid`.
- `AppPreview`.
- `HowItWorks`.
- `SecuritySection`.
- `FAQSection`.
- `CTASection`.
- `Footer`.
- `WaitlistForm`.
- `MarketCard`.
- `PortfolioCard`.
- `TradingChartMockup`.

Keep components readable and scoped. Avoid one massive component when repeated structures or sections can be extracted cleanly.

## Responsive Requirements

Design mobile first. Start layout decisions at 360px width, then enhance for tablet, laptop, desktop, and large desktop. Desktop should feel richer, but it must not be the only polished version.

Support:

- Mobile: 360px and up.
- Tablet.
- Laptop.
- Desktop.
- Large desktop.

Mobile acceptance criteria:

- No horizontal scrolling.
- Hero text does not overflow.
- CTA buttons are easy to tap.
- App mockups scale properly.
- Cards stack cleanly.
- Financial labels remain readable.
- Decorative visuals do not hide content.

## Accessibility Requirements

Use:

- Semantic HTML.
- Proper heading order.
- Clear button and link labels.
- Labels for all form inputs.
- Visible focus states.
- Sufficient color contrast.
- `alt` text for meaningful images.
- `aria-hidden="true"` for decorative visuals.

Do not rely only on color to communicate positive/negative movement. Include signs, text labels, or icons where needed.

## Performance Requirements

Keep the landing page fast.

Avoid:

- Heavy image files.
- Unnecessary JavaScript.
- Large background video.
- Multiple animation libraries.
- Blocking third-party scripts.

Prefer:

- CSS/SVG product visuals when appropriate.
- Optimized images.
- Lazy loading non-critical media.
- Minimal client-side components.
- Static mock data.

## SEO Requirements

Add basic metadata in the appropriate framework location.

Required:

- Page title.
- Meta description.
- Open Graph title.
- Open Graph description.
- Twitter card metadata.
- Canonical placeholder if the production URL is unknown.

Suggested title:

- `Coldpapa | Crypto Trading with Real-Time Market Insight`

Suggested description:

- `A modern crypto trading platform for market tracking, portfolio clarity, smart alerts, and secure account controls.`

Do not overpromise in metadata.

## Code Quality Rules

Use:

- TypeScript.
- Functional React components.
- Clear prop names.
- Tailwind utilities or existing styling conventions.
- Small reusable components.
- Data arrays for repeated cards/FAQ/features.
- Consistent spacing and naming.

Avoid:

- `any` unless justified.
- Large unstructured files.
- Repeated markup that should be a component.
- Dead imports.
- Unused variables.
- Console logs in final code.
- Fake API integrations.
- Unsupported marketing claims.

## Reviewer Agent

For any meaningful design, layout, animation, or responsive change, use a reviewer pass before final handoff. If sub-agents are available and the user has authorized agent delegation, assign a dedicated reviewer agent after implementation. If sub-agents are unavailable, the implementing agent must perform the same review directly.

Reviewer role:

- Review the landing page as a skeptical product/design QA reviewer.
- Use Playwright to inspect the actual rendered page, not only source code.
- Start with mobile viewports first, then tablet and desktop.
- Prioritize conversion clarity, visual polish, responsiveness, accessibility, and unsupported claims.
- Report concrete findings with viewport, section, and file references where possible.
- Verify that fixes were applied before final handoff.

Required Playwright review coverage:

- Mobile: 360x800 and 390x844.
- Tablet: 768x1024.
- Desktop: 1440x900.
- Large desktop if practical: 1728x1117 or similar.

Review acceptance criteria:

- No horizontal scrolling on mobile.
- Hero headline, CTA, and product mockup are visible and balanced on mobile.
- Text does not overlap, clip, or become unreadable.
- Cards and mockups stack in a deliberate order.
- Tap targets are comfortable on mobile.
- Animations do not cause layout shift.
- Visual hierarchy is clear in each major section.
- Contrast is acceptable in light and dark surfaces.
- Waitlist form can show default, error, and success states.
- Risk disclaimer is present and readable.
- No fake metrics, fake partner logos, or unsupported financial claims are present.

Reviewer output should include:

- Screenshots or screenshot paths when Playwright is available.
- A short list of findings ordered by severity.
- The viewports tested.
- Any unresolved limitations.

## Verification Checklist

Before finishing implementation work, verify:

Design:

- Hero is visually strong.
- Every major section has a visual element.
- The page feels premium and modern.
- The page does not look like a generic SaaS template.
- Color, spacing, and typography are consistent.
- Mobile layout works at 360px width and is reviewed before desktop.
- Playwright screenshots have been checked for mobile, tablet, and desktop when a runnable app exists.

Messaging:

- Value proposition is clear within five seconds.
- CTA is obvious.
- Product feels trustworthy.
- Security and risk are addressed.
- No exaggerated financial claims are present.

Code:

- TypeScript compiles.
- Lint passes if available.
- No dead imports or unused variables.
- Components are reusable where practical.
- No secrets or API keys are included.
- No fake production endpoint is used.

Accessibility:

- Semantic HTML is used.
- Headings are ordered properly.
- Buttons and links are clear.
- Form inputs have labels.
- Contrast is acceptable.
- Keyboard focus is visible.

Performance:

- No unnecessary heavy assets.
- No avoidable layout shift from animation.
- Static mock data is used unless real integration was requested.

SEO:

- Metadata exists.
- Title and description are relevant.
- Social metadata is included if supported by the framework.

## Definition of Done

The task is complete only when:

- The landing page is implemented.
- The design is highly visual, modern, sleek, and responsive.
- The product positioning is clear and crypto/fintech appropriate.
- The waitlist or early-access CTA flow is present.
- Basic SEO metadata is included.
- Risk language is included.
- The app builds successfully.

Final responses for implementation work must include:

- What changed.
- Files changed.
- Commands run.
- Any limitations or recommended next steps.
