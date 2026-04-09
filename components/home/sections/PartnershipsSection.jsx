const partners = [
  ["aws", "Advanced Tier Services Partner"],
  ["Adobe", "Gold Solution Partner"],
  ["Microsoft", "Microsoft Cloud Partner"],
  ["Google", "Top Reseller and Provider"],
  ["salesforce", "Summit-Level Partner"],
  ["Acquia", "Elite Partner"],
  ["snowflake", "Services Partner Select Tier"],
  ["ANTHROPIC", "Service Partner"],
  ["optimizely", "Platinum Partner"],
  ["fabric", "Solution Partner"],
  ["Iterable", "Innovator Solution Partner"],
  ["servicenow", "Solution Partner"],
];

export default function PartnershipsSection() {
  return (
    <section id="partnerships" className="partners" aria-label="Our partnerships" data-component="partnerships">
      <div className="partners-container">
        <h2>Our Partnerships Accelerate Innovation</h2>
        <p className="partners-intro">We elevate brand experiences through our partnerships and unparalleled platform expertise</p>

        <div className="partners-grid">
          {partners.map(([name, description]) => (
            <article className="partner-card" key={name}>
              <h3 className="partner-logo">{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <button className="partners-btn">VIEW ALL PARTNERS</button>
      </div>
    </section>
  );
}
