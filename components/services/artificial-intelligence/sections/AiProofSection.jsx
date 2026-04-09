const logos = [
  ["DXC", "AI workflow modernization"],
  ["Wawa", "Intelligent service operations"],
  ["PBS", "Content intelligence enablement"],
  ["Allsteel", "Commerce and planning insights"],
  ["CHASE", "Process acceleration programs"],
  ["Coca-Cola", "AI-enhanced campaign performance"],
];

export default function AiProofSection() {
  return (
    <section className="ai-proof" aria-label="Customer proof">
      <div className="ai-shell">
        <div className="ai-section-heading">
          <span className="ai-eyebrow">Proof</span>
          <h2>See how customers and partners build momentum with MindGen AI.</h2>
        </div>

        <div className="ai-logo-grid">
          {logos.map(([name, copy]) => (
            <article className="ai-logo-card" key={name}>
              <strong>{name}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
