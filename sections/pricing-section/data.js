export const plans = [
  {
    name: " Business",
    price: "Starting from £650",
    description:
      "Custom-designed website tailored to your brand — no templates, fully flexible, and easy to update.",
    includes: "Comprehensive setup including:",
    features: [
      " Unique, handcrafted design",
      " Mobile-responsive (all devices)",
      " SEO-friendly pages",
      "Contact & enquiry forms",
      "Social media & map integration",
      "Built with WordPress or lightweight CMS",
      "Optional training for easy edits",
    ],
    sub_heading: "",
    footer: (
      <div className="pt-3">
        <span className="font-bold mx-1">Perfect for:</span>
        Local businesses, professionals, creatives
      </div>
    ),
  },
  {
    name: "Enterprise",
    price: "Starting from £1000",
    description:
      "Scalable applications engineered for custom business logic and workflows.",
    includes: "Comprehensive setup including:",
    features: [
      "UX research & high-fidelity design",
      "Backend development (Node.js, .NET, Django)",
      "SQL/NoSQL database integration",
      "RESTful or GraphQL APIs",
      " CI/CD pipeline & auto testing",
      " Agile-based development",
      " QA & deployment included",
    ],
    sub_heading: "",

    footer: (
      <div className="pt-3">
        <span className="font-bold mx-1">Perfect for:</span>
        SaaS, CRMs, dashboards, portals
      </div>
    ),
  },
  {
    name: "Bespoke Enterprise Systems",
    price: "Contact for Quote",
    description:
      "Tailored infrastructure and apps for high-performance, enterprise-level operations.",
    includes: "Comprehensive setup including:",

    features: [
      " Microservices or monolithic architecture",
      " Docker/Kubernetes containerization",
      "Identity & access control (OAuth2, SSO, LDAP)",
      "Compliance-ready (GDPR, HIPAA, SOC2)",
      "SLA-based support & DevOps",
      "Dedicated development & infra team",
      "End-to-end project management",
    ],
    sub_heading: "",

    footer: (
      <div className="pt-3">
        <span className="font-bold mx-1">Perfect for:</span>
        Fintech, healthcare, logistics, scalable platforms
      </div>
    ),
  },
];