const tabs = [
  ["financial", "Financial", "Services"],
  ["healthcare", "Healthcare", ""],
  ["telecom", "Telecommunications", ""],
  ["retail", "Retail", ""],
  ["restaurant", "Restaurant &", "Convenience"],
  ["consumer", "Consumer", "Goods"],
  ["logistics", "Logistics", ""],
  ["travel", "Travel &", "Hospitality"],
  ["industrial", "Industrial &", "Manufacturing"],
  ["media", "Media, Tech, &", "Entertainment"],
];

const insightCards = [
  [
    "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1000&q=80",
    "Professional working on laptop",
    "LEADING TELECOM COMPANY",
    "Leading Telecom Company Reimagines Risk Analysis with Generative AI",
  ],
  [
    "https://images.unsplash.com/photo-1540339832862-474599807836?auto=format&fit=crop&w=1000&q=80",
    "Laptop near airplane window",
    "ARTICLE",
    "Taking Telcos to the Sky",
  ],
  [
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    "Person using phone in city street",
    "TELECOM OPERATOR",
    "Resolving Inefficiencies in Call Logging for a leading Telco",
  ],
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="industry-showcase" aria-label="Industry showcase" data-component="industries">
      <div className="industry-container">
        <h2>Empowering Industry Leaders to Navigate the Future with<br />End-to-End Innovation</h2>

        <div className="industry-tabs-shell">
          <button className="tab-arrow tab-arrow-left" type="button" aria-label="Scroll tabs left">&lt;</button>
          <div className="industry-tabs" role="tablist" aria-label="Industry categories">
            {tabs.map(([key, line1, line2], index) => (
              <button
                key={key}
                className={`industry-tab${index === 0 ? " active" : ""}`}
                data-industry={key}
                role="tab"
                aria-selected={index === 0 ? "true" : "false"}
              >
                {line1}
                {line2 ? <><br />{line2}</> : null}
              </button>
            ))}
          </div>
          <button className="tab-arrow tab-arrow-right" type="button" aria-label="Scroll tabs right">&gt;</button>
        </div>
        <div className="industry-mobile-meta"><span className="pause-mark-mobile">II</span></div>

        <div className="featured-row">
          <div className="featured-media">
            <picture>
              <source
                id="industryMainSource"
                media="(max-width: 720px)"
                srcSet="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80"
              />
              <img
                id="industryMainImage"
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=80"
                alt="Industry spotlight image"
              />
            </picture>
          </div>
          <div className="featured-copy">
            <div className="pause-mark">II</div>
            <h3 id="industryTitleDesktop" className="featured-title desktop-only">
              Enabling Seamless Customer Journeys and Unlocking New Revenue Through Modern Tech
            </h3>
            <h3 id="industryTitleMobile" className="featured-title mobile-only">
              Blending Brand, Tech, and Insight to Deepen Consumer Connections
            </h3>
            <p id="industryCopyDesktop" className="desktop-only">
              Partnering with telecom leaders to modernize digital systems, personalize customer touchpoints, and bring innovative services to market faster.
            </p>
            <p id="industryCopyMobile" className="mobile-only">
              Helping brands build deeper consumer relationships, adapt to evolving behaviors, and scale with efficiency.
            </p>
            <button className="learn-btn">LEARN MORE</button>
          </div>
        </div>

        <div className="insight-grid">
          {insightCards.map(([src, alt, tag, title], index) => (
            <article className="insight-card" data-card-slot={index} key={title}>
              <div className="insight-image-wrap">
                <img src={src} alt={alt} />
                <span className="insight-tag">{tag}</span>
              </div>
              <h4>{title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
