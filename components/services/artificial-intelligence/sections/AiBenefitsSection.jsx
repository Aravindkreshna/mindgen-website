const benefits = [
  ["&raquo;", "AI that fits the flow of work", "Drive efficiency across every business function with AI embedded into the tools, workflows, and decisions your teams already use.", "#ai-solutions", "Explore use cases"],
  ["&#9881;", "One AI operating system for enterprise delivery", "Accelerate AI innovation with tools to build, run, and integrate advanced AI solutions and agents at scale.", "#ai-delivery", "Explore AI foundations"],
  ["&#9670;", "Unified, always-on, proactive AI experience", "Harmonise the AI experience across your business with intuitive interfaces that proactively serve AI into every workflow.", "#ai-resources", "Explore MindGen AI"],
  ["&#10022;", "Agentic AI that works like a teammate", "Empower employees to solve complex challenges with role-based assistants that orchestrate agents across every function.", "#ai-faq", "Explore AI agents"],
];

export default function AiBenefitsSection() {
  return (
    <section className="ai-benefits" aria-label="Artificial intelligence benefits">
      <div className="ai-shell">
        <div className="ai-section-heading ai-benefits-heading">
          <h2>Why MindGen AI?</h2>
        </div>

        <div className="ai-benefit-grid">
          {benefits.map(([icon, title, copy, href, cta]) => (
            <article className="ai-benefit-card" key={title}>
              <span className="ai-benefit-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }}></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href={href}>{cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
