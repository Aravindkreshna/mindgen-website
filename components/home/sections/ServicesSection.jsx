const services = [
  {
    title: "Artificial intelligence",
    image: "https://picsum.photos/id/180/1100/680",
    alt: "Artificial intelligence concept visual",
    expanded: true,
    description: "Leverage the full potential of AI with transformative solutions to improve operations, drive growth and scalable innovation for long-term business agility.",
    link: "/services/artificial-intelligence",
    label: "LEARN MORE",
    ariaLabel: "Collapse artificial intelligence service",
    offerings: [
      "AI Co-Innovation Studio Workshops",
      "AI Strategy, Governance & Adoption",
      "Generative AI Development & Integration",
      "Data Modernization for AI Readiness",
      "AI-Driven Operational Efficiency & Automation",
      "Custom AI Product Engineering & Innovation",
      "Platform AI Optimization & Integration Services",
    ],
  },
  {
    title: "Experience Innovation & Design",
    image: "https://picsum.photos/id/366/1100/680",
    alt: "Design workshop board",
    description: "Elevate your digital presence by creating compelling, results-driven experiences and products that deeply engage customers with your brand.",
    label: "LEARN MORE",
    ariaLabel: "Expand experience innovation and design service",
    offerings: ["Customer Journey Strategy", "UX Research & Service Design", "Product Design Systems", "Conversion Optimization Programs"],
  },
  {
    title: "Digital Product & Platform Engineering",
    image: "https://picsum.photos/id/0/1100/680",
    alt: "Developer working on platform engineering",
    description: "Modernize legacy applications and optimize platforms to stay competitive and enhance user engagement.",
    label: "LEARN MORE",
    ariaLabel: "Expand digital product and platform engineering service",
    offerings: ["Cloud-native Product Engineering", "API & Microservices Architecture", "Quality Engineering Automation", "Performance & Scalability Optimization"],
  },
  {
    title: "Enterprise Digital Transformation",
    image: "https://picsum.photos/id/48/1100/680",
    alt: "Business digital transformation",
    description: "Empower your organization with our collaborative approach to digital transformation, optimizing processes, change management, and driving business growth.",
    label: "LEARN MORE",
    ariaLabel: "Expand enterprise digital transformation service",
    offerings: ["Digital Roadmap Development", "Operating Model Transformation", "Enterprise Change Enablement", "Transformation Program Governance"],
  },
  {
    title: "Data & Analytics",
    image: "https://picsum.photos/id/119/1100/680",
    alt: "Data and analytics dashboard",
    description: "Discover how our expertise in data and analysis can transform your business through enhanced data visibility to drive success.",
    label: "LEARN MORE",
    ariaLabel: "Expand data and analytics service",
    offerings: ["Data Strategy & Governance", "Modern Data Platform Engineering", "Business Intelligence & Visualization", "Advanced Analytics & Forecasting"],
  },
  {
    title: "Cloud Enablement & Modernization",
    image: "https://picsum.photos/id/1011/1100/680",
    alt: "Cloud infrastructure engineering",
    description: "Unlock the full potential of your infrastructure with our comprehensive cloud services, designed to enhance scale, resilience, and cost efficiency.",
    label: "LEARN MORE",
    ariaLabel: "Expand cloud enablement and modernization service",
    offerings: ["Cloud Migration Strategy", "Platform Operations & SRE", "FinOps & Cost Optimization", "Security & Compliance Automation"],
  },
  {
    title: "Marketing Activation & Loyalty",
    image: "https://picsum.photos/id/64/1100/680",
    alt: "Marketing collaboration session",
    description: "Engage individuals at every stage of their journey with our comprehensive, data-driven marketing strategies.",
    label: "LEARN MORE",
    ariaLabel: "Expand marketing activation and loyalty service",
    offerings: ["Audience & Segmentation Strategy", "Campaign Orchestration & Automation", "Loyalty Program Design", "Attribution & Measurement"],
  },
  {
    title: "Digital Commerce",
    image: "https://picsum.photos/id/1060/1100/680",
    alt: "Digital commerce checkout experience",
    description: "Leverage our tailored digital commerce solutions to enhance customer satisfaction, streamline operations, and maximize conversions for your business.",
    label: "LEARN MORE",
    ariaLabel: "Expand digital commerce service",
    offerings: ["Composable Commerce Architecture", "Checkout & Conversion Optimization", "Marketplace Integration Services", "Merchandising & Personalization"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-results" aria-label="Services that drive real results" data-component="services">
      <div className="services-container">
        <h2>Services that Drive Real Results</h2>
        <p className="services-intro">
          We bring together a broad set of capabilities across our global integrated teams, harnessing cutting-edge technology, artificial
          intelligence, and deep industry expertise. With a focus on innovation and strategic execution, we create lasting impact.
        </p>

        <div className="services-list">
          {services.map((service) => (
            <article className={`service-item${service.expanded ? " expanded" : ""}`} key={service.title}>
              <img className="service-image" src={service.image} alt={service.alt} />
              <div className="service-content">
                <div className="service-head">
                  <h3>{service.title}</h3>
                  <button
                    className="service-toggle"
                    aria-label={service.ariaLabel}
                    aria-expanded={service.expanded ? "true" : "false"}
                  ></button>
                </div>
                <p>{service.description}</p>
                {service.link ? (
                  <a className="service-btn" href={service.link}>{service.label}</a>
                ) : (
                  <button className="service-btn">{service.label}</button>
                )}
                <div className="service-offerings">
                  <h4>Offerings</h4>
                  <ul>
                    {service.offerings.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
