export default function AiOverviewSection() {
  return (
    <section className="ai-overview" aria-label="AI business overview">
      <div className="ai-shell">
        <div className="ai-section-heading ai-overview-heading">
          <h2>AI that drives your business</h2>
          <p>Help your teams get more done faster and more efficiently with AI and agents that actually understand all your business processes and data.</p>
        </div>

        <div className="ai-overview-grid">
          <div className="ai-video-card">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80" alt="Business AI workspace and assistant interface" />
            <button className="ai-play-btn" type="button" aria-label="Play overview video"></button>
          </div>
          <div className="ai-overview-points">
            <article>
              <h3>Complete enterprise context</h3>
              <p>Drive impact with AI grounded in your business data and embedded into every business function.</p>
            </article>
            <article>
              <h3>Unified delivery experience</h3>
              <p>Maximise the value of AI across your business with a single AI interface that seamlessly integrates data and workflows.</p>
            </article>
            <article>
              <h3>Unmatched agent-driven efficiency</h3>
              <p>Solve complex challenges with role-based AI assistants that orchestrate agents, accelerate workflows, and drive connected business outcomes at scale.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
