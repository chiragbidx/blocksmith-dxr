// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ─── Sponsors ───────────────────────────────────────────────────────────────
export type SponsorItem = { icon: string; name: string };
export type SponsorsContent = {
  heading: string;
  items: SponsorItem[];
};

// ─── Benefits ───────────────────────────────────────────────────────────────
export type BenefitItem = { icon: string; title: string; description: string };
export type BenefitsContent = {
  eyebrow: string;
  heading: string;
  description: string;
  items: BenefitItem[];
};

// ─── Feature Grid ───────────────────────────────────────────────────────────
export type FeatureItem = { icon: string; title: string; description: string };
export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: FeatureItem[];
};

// ─── Services ───────────────────────────────────────────────────────────────
export type ServiceItem = { title: string; description: string; pro: boolean };
export type ServicesContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ServiceItem[];
};

// ─── Testimonials ───────────────────────────────────────────────────────────
export type TestimonialItem = {
  image: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
};
export type TestimonialsContent = {
  eyebrow: string;
  heading: string;
  reviews: TestimonialItem[];
};

// ─── Team ───────────────────────────────────────────────────────────────────
export type SocialLink = { name: string; url: string };
export type TeamMember = {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialLink[];
};
export type TeamContent = {
  eyebrow: string;
  heading: string;
  members: TeamMember[];
};

// ─── Pricing ────────────────────────────────────────────────────────────────
export type PricingPlan = {
  title: string;
  popular: boolean;
  price: number;
  description: string;
  buttonText: string;
  benefits: string[];
};
export type PricingContent = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  priceSuffix: string;
  plans: PricingPlan[];
};

// ─── Contact ────────────────────────────────────────────────────────────────
export type ContactInfoBlock = { label: string; value: string | string[] };
export type ContactContent = {
  eyebrow: string;
  heading: string;
  description: string;
  mailtoAddress: string;
  info: {
    address: ContactInfoBlock;
    phone: ContactInfoBlock;
    email: ContactInfoBlock;
    hours: ContactInfoBlock;
  };
  formSubjects: string[];
  formSubmitLabel: string;
};

// ─── FAQ ────────────────────────────────────────────────────────────────────
export type FaqItem = { question: string; answer: string };
export type FaqContent = {
  eyebrow: string;
  heading: string;
  items: FaqItem[];
};

// ─── Footer ─────────────────────────────────────────────────────────────────
export type FooterLink = { label: string; href: string };
export type FooterColumn = { heading: string; links: FooterLink[] };
export type FooterContent = {
  brandName: string;
  columns: FooterColumn[];
  copyright: string;
  attribution: { label: string; href: string };
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavRoute = { href: string; label: string };
export type NavFeature = { title: string; description: string };
export type NavbarContent = {
  brandName: string;
  routes: NavRoute[];
  featureDropdownLabel: string;
  featureImage: { src: string; alt: string };
  features: NavFeature[];
  signInLabel: string;
  signUpLabel: string;
  dashboardLabel: string;
  githubLink: { href: string; ariaLabel: string };
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "Launch",
    badgeOuter: "FlowPilot SaaS starter is ready",
    titleBefore: "Supercharge your SaaS with ",
    titleHighlight: "FlowPilot",
    titleAfter: "",
    subtitle:
      "FlowPilot delivers authentication, team, and dashboard infrastructure so you focus on product, not plumbing. Your SaaS foundation in days, not weeks.",
    primaryCta: { label: "Get Started", href: "#pricing" },
    secondaryCta: { label: "See Features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "FlowPilot dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Runs on trusted tech",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Squirrel", name: "Clerk" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why FlowPilot",
    heading: "A launchpad for real SaaS apps",
    description:
      "No more starting from a blog template. FlowPilot is for teams who need production authentication, a robust dashboard, and easy onward customization.",
    items: [
      {
        icon: "Blocks",
        title: "Production Auth",
        description: "Battle-tested signup, sign-in, email verification, password reset, and secure session flows.",
      },
      {
        icon: "LineChart",
        title: "Instant Team System",
        description: "Multi-tenant team architecture—invite, roles, and permissions are ready-to-go.",
      },
      {
        icon: "Wallet",
        title: "Save Months of Rework",
        description: "Built-in patterns for dashboard layout, settings, CRUD features, and user flows.",
      },
      {
        icon: "Sparkle",
        title: "Looks Polished Day 1",
        description: "Responsive, themeable, and accessible—all with shadcn for out-of-the-box design quality.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything SaaS builders expect, included",
    subtitle:
      "FlowPilot is a modern SaaS starter with all the foundations organizations need—ready to extend for your use case.",
    items: [
      { icon: "TabletSmartphone", title: "Responsive Layout", description: "Design adapts beautifully across devices—no extra styling needed." },
      { icon: "BadgeCheck", title: "Verified User Flows", description: "Email verification and reset flows that handle the edge-cases cleanly." },
      { icon: "Goal", title: "Team & Role Management", description: "Owners, admins, members, invitations, and permissions: all standard." },
      { icon: "PictureInPicture", title: "Wired Dashboard", description: "Clean dashboard shell, side-nav, and account/feature pages, all production style." },
      { icon: "MousePointerClick", title: "Easy Customization", description: "Swap out landing copy, add new dashboard features, update your theme—no scaffolding overhaul required." },
      { icon: "Newspaper", title: "Email with SendGrid", description: "Production-grade transactional email for invites, verification, and support." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "Services",
    heading: "Built-in for rapid SaaS launches",
    subtitle:
      "Perfect for founders, indies, or teams: skip the boring parts and focus on what makes your app unique.",
    items: [
      { title: "Auth System", description: "Production-ready email/password, verification, reset, secure cookies.", pro: false },
      { title: "Multi-Tenant Teams", description: "Each user gets a personal team on sign-up. Roles/invites built-in.", pro: false },
      { title: "Developer Tooling", description: "Next.js 16, React 19, TypeScript 5, ESLint 9, Drizzle ORM, and OpenAI integration.", pro: false },
      { title: "Production Hardened", description: "Audit-friendly DB, strong types, secure deployments. No take-home refactoring.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Teams building with FlowPilot",
    reviews: [
      { image: "/demo-img.jpg", name: "Aarav Shah", role: "Founder, FinchFlow", comment: "FlowPilot turned 'setup nightmare' into 'ready-to-demo' in a single afternoon. Highly recommend!", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Maya Patel", role: "Product Lead, OrbitDesk", comment: "Our auth and onboarding were ready for customer traffic instantly.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Nikhil Rao", role: "CTO, TeamForge", comment: "Nothing else ships this much working SaaS structure this fast.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Emma Brooks", role: "Head of Growth, Nimbus", comment: "Landing and dashboard looked on-brand right away—way easier than our last starter.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Engineering Manager, PulseOps", comment: "Fastest team onboarding in years. New engineers start with real business logic.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Sofia Green", role: "Founder, LaunchPad AI", comment: "Open source, battle-tested, and actually production-ready. The real deal.", rating: 4.9 },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Team",
    heading: "Meet the FlowPilot team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder", "Lead Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" }
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Elizabeth",
        lastName: "Moore",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/leopoldo-miranda/" }
        ],
      }
      // Expand with more team if desired.
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Pricing for every stage",
    subtitle: "Start free, then scale when you're ready. One template, all features, no lock-in.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Great for proof-of-concept and launching your first SaaS.",
        buttonText: "Launch Free",
        benefits: [
          "Up to 3 teammates",
          "Built-in auth & team system",
          "FlowPilot UI kit",
          "Deploy-ready out of the box"
        ],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For growing teams and customer-ready SaaS.",
        buttonText: "Start 14-day Trial",
        benefits: [
          "Unlimited teammates",
          "Priority support",
          "Stripe billing ready",
          "Advanced onboarding flows"
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Need SSO, audits, or Vercel private deploys? Let's talk.",
        buttonText: "Contact founder",
        benefits: [
          "SSO/SAML integration path",
          "Architecture advisory",
          "Dedicated onboarding",
          "Personal support line"
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Talk to FlowPilot team",
    description:
      "Questions about your SaaS, need consulting, or want to discuss customer launches? Reach out below.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first • Mumbai, India" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Support hours", value: ["Monday - Friday", "9AM - 6PM IST"] },
    },
    formSubjects: ["Template Inquiry", "Consulting", "Demo Request", "Custom Build", "Enterprise Plan"],
    formSubmitLabel: "Send inquiry",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      { question: "Is FlowPilot free to try?", answer: "Yes! You can fork, customize, and even launch your SaaS using the free plan." },
      { question: "Is this template ready for real production SaaS?", answer: "Yes. FlowPilot is designed for launch and scale, with security and patterns for growth." },
      { question: "Is backend, auth and dashboard truly working?", answer: "Yes, authentication, team, dashboard, feature CRUD, and all the data flows are real and cloud deployable." },
      { question: "Are emails real and can I use my own sender?", answer: "Yes, plug your own SendGrid key for production emails. Owner email is chirag@bidx.ai by default." },
      { question: "Can I hire you to help with customization?", answer: "Yes, reach out via contact and Chirag Dodiya will assist with consulting or feature work." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "FlowPilot",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/chiragdodiya" }
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" }
        ],
      },
    ],
    copyright: "© 2026 FlowPilot SaaS App Starter.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "FlowPilot",
    routes: [
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#team", label: "Team" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "FlowPilot preview" },
    features: [
      { title: "Auth, Teams, Email", description: "Email/password signup, team/invite flows, real email sending." },
      { title: "UI + Layout", description: "Polished dashboard, easily themeable." },
      { title: "Deploy Instantly", description: "Prod-ready, Vercel-compatible, one-click deploy." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya/flowpilot", ariaLabel: "View FlowPilot on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}