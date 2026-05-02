import BodyClassName from "../BodyClassName";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

const growthCards = [
  {
    title: "Amplify Your Digital Influence",
    copy: "Work on programs that combine strategy, product thinking, AI, and engineering delivery at meaningful scale.",
  },
  {
    title: "Expand Your Horizons",
    copy: "Collaborate across disciplines, learn from senior teammates, and grow through real ownership instead of narrow tasks.",
  },
  {
    title: "Elevate Your Impact",
    copy: "Help organizations make confident transformation decisions and see your work shape products people actually use.",
  },
];

const cultureCards = [
  {
    title: "Work You Want",
    copy: "Choose projects where your curiosity, craft, and problem-solving style can do their best work.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Empowered by Belonging",
    copy: "We build teams where people can contribute fully, speak candidly, and keep learning from one another.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Innovative Client Work",
    copy: "Our delivery teams move between AI strategy, digital products, experience design, and modernization programs.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Stay Connected",
    copy: "Remote-friendly collaboration, intentional planning, and healthy communication are built into the day-to-day.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
];

const benefits = [
  "Award-winning culture centered on collaboration, trust, and thoughtful delivery.",
  "Flexible working options across home, hub, and client environments when the work calls for it.",
  "Hands-on growth through mentorship, cross-functional teaming, and visible ownership.",
  "Professional development support for certifications, workshops, and emerging tools.",
  "Competitive benefits that support both long-term growth and day-to-day wellbeing.",
  "A chance to contribute to work that creates measurable business and customer impact.",
];

const roleGroups = [
  {
    title: "Experience Innovation",
    openings: "2 roles available",
    team: "Design systems, service design, and product strategy",
    copy: "Shape customer journeys, product direction, and experience systems for high-impact transformation work.",
  },
  {
    title: "Engineering & AI",
    openings: "4 roles available",
    team: "Application engineering, AI workflows, and platform delivery",
    copy: "Build modern applications, intelligent workflows, and reliable technical foundations that scale with confidence.",
  },
  {
    title: "Data & Delivery",
    openings: "3 roles available",
    team: "Analytics, delivery leadership, and transformation operations",
    copy: "Lead analytics programs, orchestration across teams, and the operational rhythm behind complex initiatives.",
  },
];

const reputationLogos = ["Built In", "Out in Tech", "Glassdoor", "The Muse"];

const awards = [
  {
    title: "WorkLife Awards",
    meta: "News",
    copy: "MindGen recognized for building a modern culture shaped by trust, learning, and shared ownership.",
  },
  {
    title: "Delivery Excellence",
    meta: "Awards",
    copy: "Our teams continue to earn recognition for partnering closely and delivering complex work with rigor.",
  },
  {
    title: "Women in Leadership",
    meta: "Culture",
    copy: "We celebrate the people and practices helping our teams become stronger, more inclusive, and more ambitious.",
  },
];

export default function CareersPage() {
  return (
    <>
      <BodyClassName className="company-page-body" />
      <SiteHeader />
      <main className="company-page careers-page">
        <section className="company-hero company-hero-careers careers-hero">
          <div className="company-shell careers-hero-inner">
            <p className="company-eyebrow">Careers</p>
            <h1>Shape the Future of AI</h1>
            <p className="company-hero-copy">
              Join a global team working at the intersection of engineering, experience, and AI. We&apos;re growing with people who
              want to build excellent work and keep evolving while they do it.
            </p>
            <form className="careers-search-bar" action="#" method="get">
              <span className="careers-search-icon" aria-hidden="true"></span>
              <input type="text" name="keywords" placeholder="Search jobs and keywords" aria-label="Search jobs and keywords" />
              <button type="submit" aria-label="Search careers">→</button>
            </form>
          </div>
        </section>

        <section className="careers-growth-section">
          <div className="company-shell">
            <div className="careers-split-heading">
              <div>
                <p className="careers-mini-label">Grow</p>
                <h2>With Us</h2>
              </div>
              <p>
                Our teams are built for people who want to solve meaningful problems, contribute across disciplines, and develop in
                public through real collaboration.
              </p>
            </div>

            <div className="careers-growth-grid">
              {growthCards.map((item) => (
                <article key={item.title} className="careers-growth-card">
                  <span className="careers-growth-line" aria-hidden="true"></span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="careers-culture-grid">
              {cultureCards.map((item) => (
                <article
                  key={item.title}
                  className="careers-culture-card"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 18, 36, 0.04), rgba(10, 18, 36, 0.76)), url(${item.image})` }}
                >
                  <div className="careers-culture-copy">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-benefits-section">
          <div className="company-shell careers-benefits-grid">
            <div className="careers-benefits-copy">
              <p className="careers-mini-label">Value-driven</p>
              <h2>Benefits</h2>
              <p>
                We care about the conditions that help great work happen: flexibility, support, strong communication, and room to
                grow. Benefits should make work better, not noisier.
              </p>
            </div>
            <div className="careers-benefits-list">
              {benefits.map((item) => (
                <div key={item} className="careers-benefit-item">
                  <span aria-hidden="true">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-openings-section">
          <div className="company-shell careers-openings-grid">
            <div className="careers-openings-copy">
              <p className="careers-mini-label">Career openings</p>
              <h2>Find Your Team</h2>
              <p>
                Explore the capability areas where we&apos;re hiring now. Each track combines ownership, cross-functional partnership,
                and real delivery exposure.
              </p>
              <div className="careers-openings-meta">
                <div>
                  <strong>9+</strong>
                  <span>Open roles</span>
                </div>
                <div>
                  <strong>Remote-first</strong>
                  <span>Across core teams</span>
                </div>
              </div>
              <a href="mailto:careers@mindgen.in" className="company-pill-btn">Apply now</a>
            </div>

            <div className="careers-openings-content">
              <article className="careers-openings-feature">
                <p className="careers-openings-feature-label">Featured team</p>
                <h3>Engineering &amp; AI</h3>
                <span>4 roles available</span>
                <p>
                  Join the team building production-grade applications, AI-enabled workflows, and modern delivery foundations for
                  ambitious client programs.
                </p>
                <ul>
                  <li>Full Stack Engineer</li>
                  <li>AI Product Strategist</li>
                  <li>Cloud Architect</li>
                </ul>
              </article>

              <div className="careers-role-list">
                {roleGroups.map((item) => (
                  <article key={item.title} className="careers-role-row">
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.team}</p>
                    </div>
                    <div className="careers-role-row-meta">
                      <span>{item.openings}</span>
                      <strong>{item.copy}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="careers-opportunity-band">
          <div className="company-shell careers-opportunity-inner">
            <h2>Equal Opportunity</h2>
            <p>
              MindGen is proud to be an equal opportunity employer. We welcome candidates from all backgrounds and believe better
              outcomes are built by diverse, thoughtful teams.
            </p>
          </div>
        </section>

        <section className="careers-reputation-section">
          <div className="company-shell careers-reputation-grid">
            <div className="careers-reputation-copy">
              <p className="careers-mini-label">Our reputation</p>
              <h2>Discover the MindGen Experience</h2>
              <p>See how people describe the culture, opportunities, and day-to-day experience of building with our teams.</p>
            </div>
            <div className="careers-logo-grid">
              {reputationLogos.map((item) => (
                <div key={item} className="careers-logo-card">{item}</div>
              ))}
            </div>
          </div>

          <div className="company-shell careers-awards-shell">
            <div className="careers-awards-heading">
              <p className="careers-mini-label">Awards & recognition</p>
              <h2>Celebrating Shared Success</h2>
            </div>
            <div className="careers-awards-grid">
              {awards.map((item, index) => (
                <article key={item.title} className={`careers-award-card careers-award-card-${index + 1}`}>
                  <div className="careers-award-art"></div>
                  <div className="careers-award-copy">
                    <span>• {item.meta}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="careers-awards-actions">
              <a href="#" className="careers-awards-btn">View more perspectives</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
