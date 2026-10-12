import { useEffect, useState } from "react";

const nodes = [
  { label: "Trigger", sub: "New email, form or message", tools: ["Webhook"] },
  { label: "Data Processing", sub: "Clean, extract & structure", tools: ["JSON"] },
  { label: "AI Agent", sub: "Understand intent & decide", tools: ["LLM", "RAG"] },
  { label: "Connected Tools", sub: "CRM, sheets, messaging", tools: ["API"] },
  { label: "Automated Result", sub: "Reply sent, team notified", tools: ["Done"] },
];

/** Hero workflow illustration. Readable without animation. */
export function Workflow() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = window.setInterval(() => {
      setActive(i % nodes.length);
      i++;
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <figure className="workflow" aria-label="Example automation workflow: trigger, data processing, AI agent, connected tools, automated result">
      <div className="wf-head">
        <span><span className="wf-dot" />workflow.running</span>
        <span>5 steps</span>
      </div>
      <ol className="wf-list">
        {nodes.map((n, i) => (
          <li key={n.label}>
            <div className={`wf-node${active === i ? " is-active" : ""}`}>
              <span className="icon-box" style={{ width: 38, height: 38 }} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong>{n.label}</strong>
                <small>{n.sub}</small>
              </div>
              <div className="wf-tools">{n.tools.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            {i < nodes.length - 1 && <div className="wf-connector" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </figure>
  );
}
