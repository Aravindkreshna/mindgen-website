import BodyClassName from "../BodyClassName";
import SiteFooter from "../site/SiteFooter";
import SiteHeader from "../site/SiteHeader";

const contactCards = [
  {
    title: "New Business",
    detail: "share@mindgen.in",
    copy: "Tell us what you're building, where you're stuck, and what success looks like.",
  },
  {
    title: "Careers",
    detail: "careers@mindgen.in",
    copy: "Questions about open roles, hiring timelines, or team expectations are welcome.",
  },
  {
    title: "Partnerships",
    detail: "partners@mindgen.in",
    copy: "Reach out if you want to collaborate on delivery, platforms, or go-to-market programs.",
  },
];

const offices = [
  "Chennai",
  "Mumbai",
];

export default function ContactUsPage() {
  return (
    <>
      <BodyClassName className="company-page-body" />
      <SiteHeader />
      <main className="company-page">
        <section className="company-hero company-hero-contact">
          <div className="company-shell company-hero-inner">
            <p className="company-eyebrow">Contact Us</p>
            <h1>Let&apos;s talk about the outcomes you need and the path to get there.</h1>
            <p className="company-hero-copy">
              Whether you&apos;re shaping an AI roadmap, modernizing operations, or looking for a hands-on delivery partner, we&apos;re
              ready to help you turn momentum into execution.
            </p>
          </div>
        </section>

        <section className="company-cards-section">
          <div className="company-shell">
            <div className="company-card-grid">
              {contactCards.map((item) => (
                <article key={item.title} className="company-feature-card">
                  <h3>{item.title}</h3>
                  <a href={`mailto:${item.detail}`} className="company-contact-link">{item.detail}</a>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="company-form-section">
          <div className="company-shell company-form-grid">
            <form className="company-form-card" action="#" method="post">
              <p className="company-section-kicker">Send us a note</p>
              <h2>We&apos;ll reply with the right team for your request.</h2>
              <label htmlFor="contact-name">Full name</label>
              <input id="contact-name" name="contact-name" type="text" placeholder="Your name" />

              <label htmlFor="contact-email">Business email</label>
              <input id="contact-email" name="contact-email" type="email" placeholder="you@company.com" />

              <label htmlFor="contact-company">Company</label>
              <input id="contact-company" name="contact-company" type="text" placeholder="Company name" />

              <label htmlFor="contact-message">How can we help?</label>
              <textarea id="contact-message" name="contact-message" rows="5" placeholder="Share a few details about your goals." />

              <button type="submit" className="company-pill-btn">Submit inquiry</button>
            </form>

            <div className="company-form-aside">
              <div className="company-aside-card">
                <p className="company-section-kicker">What to expect</p>
                <ul className="company-check-list">
                  <li>Response within 1 business day</li>
                  <li>Intro call tailored to your business context</li>
                  <li>Clear next steps after the conversation</li>
                </ul>
              </div>

              <div className="company-aside-card">
                <p className="company-section-kicker">Locations & remote</p>
                <div className="company-office-list">
                  {offices.map((office) => (
                    <span key={office}>{office}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="company-band-section">
          <div className="company-shell company-band-grid">
            <div>
              <p className="company-section-kicker">Need a faster path?</p>
              <h2>For active projects, we can move from intro to working session quickly.</h2>
            </div>
            <div className="company-band-copy">
              <p>
                If you already have a use case, challenge area, or transformation brief, include it in your note and we&apos;ll shape
                the first conversation around it.
              </p>
              <a href="/careers" className="company-text-link">Explore careers instead</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
