export default function AiDeliverySection() {
  return (
    <section className="ai-delivery" id="ai-delivery" aria-label="Artificial intelligence delivery model">
      <div className="ai-shell ai-delivery-grid">
        <div className="ai-delivery-copy">
          <span className="ai-eyebrow">Delivery Model</span>
          <h2>Accelerate AI programs and platform transformations with a practical roadmap.</h2>
          <p>
            We start with value prioritization, move quickly into prototyping, and then scale through platform integration, governance,
            and adoption planning. The result is a delivery system designed for durable impact instead of disconnected pilots.
          </p>
          <ul className="ai-check-list">
            <li>Opportunity framing and business case definition</li>
            <li>Architecture, data readiness, and model selection</li>
            <li>Responsible AI guardrails and governance workflows</li>
            <li>Change enablement, measurement, and optimization</li>
          </ul>
        </div>
        <aside className="ai-delivery-panel">
          <div className="ai-stat">
            <strong>6-10 weeks</strong>
            <span>to move from discovery sprint to production-ready pilot</span>
          </div>
          <div className="ai-stat">
            <strong>3 layers</strong>
            <span>strategy, delivery, and adoption aligned in one engagement model</span>
          </div>
          <a className="learn-btn" href="#ai-contact">Plan your roadmap</a>
        </aside>
      </div>
    </section>
  );
}
