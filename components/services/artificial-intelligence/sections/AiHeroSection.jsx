export default function AiHeroSection() {
  return (
    <section className="ai-hero" aria-label="Artificial intelligence service hero">
      <div className="ai-hero-media" aria-hidden="true">
        <video className="ai-hero-video" autoPlay muted loop playsInline preload="auto">
          <source src="/assets/videos/business-ai-video-hero-ai.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="ai-shell ai-hero-grid">
        <div className="ai-hero-copy">
          <span className="ai-eyebrow">Artificial Intelligence Services</span>
          <h1>MindGen Business AI</h1>
          <p>
            Create transformative impact with powerful AI solutions and enterprise-ready agents, grounded in your business context,
            workflows, and data.
          </p>
          <div className="ai-hero-actions">
            <a className="learn-btn" href="#ai-contact">Request a Demo</a>
            <a className="service-btn" href="#ai-solutions">Sign Up for Updates</a>
          </div>
        </div>
        <div className="ai-hero-spacer" aria-hidden="true"></div>
      </div>
    </section>
  );
}
