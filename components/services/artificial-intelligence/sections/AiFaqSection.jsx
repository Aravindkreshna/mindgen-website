const faqs = [
  ["What kinds of AI engagements does MindGen typically lead?", "We support strategy, governance, prototyping, platform integration, workflow automation, agentic experiences, and enterprise rollout planning."],
  ["Can you work with our existing cloud and data platforms?", "Yes. We design around your current ecosystem and only recommend change where it materially improves scalability, quality, or governance."],
  ["How do you approach responsible AI and governance?", "We establish guardrails for access, prompts, observability, review, and change management so teams can scale confidently and transparently."],
  ["Do you help with adoption after launch?", "Yes. We treat enablement, measurement, and continuous improvement as part of delivery so the solution actually changes how teams work."],
];

export default function AiFaqSection() {
  return (
    <section className="ai-faq" id="ai-faq" aria-label="Frequently asked questions">
      <div className="ai-shell">
        <div className="ai-section-heading">
          <h2>Frequently asked questions</h2>
        </div>
        <div className="ai-faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
