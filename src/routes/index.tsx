import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  about, brand, contact, expectations, faqs, isPlaceholder, navLinks, pricing,
  processSteps, projects, services, showPricing, showTestimonials, skillGroups, testimonials,
} from "@/content/site";
import { Icon } from "@/components/Icon";
import { Workflow } from "@/components/Workflow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riyad — AI Automation Developer | AI Agents, RAG & n8n" },
      { name: "description", content: "Riyad builds practical AI agents, RAG systems and n8n automation workflows that reduce repetitive work for businesses." },
      { property: "og:title", content: "Riyad — AI Automation Developer" },
      { property: "og:description", content: "Practical AI agents and automation workflows that turn repetitive business processes into intelligent systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------- Hooks ---------- */
function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach((l) => { const el = document.getElementById(l.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

/* ---------- Shared bits ---------- */
function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <header className="reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}

const emailHref = isPlaceholder(contact.email) ? null : `mailto:${contact.email}`;
const waHref = isPlaceholder(contact.whatsapp) ? null : `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`;

function SocialLinks() {
  return (
    <ul className="social-list">
      {contact.socials.map((s) =>
        isPlaceholder(s.url) ? (
          <li key={s.label}>
            <span className="social-item disabled" title="Link not added yet">
              {s.label}<small>{s.url}</small>
            </span>
          </li>
        ) : (
          <li key={s.label}>
            <a className="social-item" href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          </li>
        ),
      )}
    </ul>
  );
}

/* ---------- Sections ---------- */
function Header() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const links = navLinks.map((l) => (
    <a key={l.id} href={`#${l.id}`} className="nav-link" aria-current={active === l.id ? "true" : undefined} onClick={() => setOpen(false)}>
      {l.label}
    </a>
  ));
  return (
    <header className="site-header">
      <div className="container-x inner">
        <a href="#home" className="logo" aria-label={`${brand.name} — home`}>
          <span className="logo-mark">R</span>{brand.name}
        </a>
        <nav className="nav-links" aria-label="Main">{links}</nav>
        <a href="#contact" className="btn btn-primary btn-sm header-cta">Let's Talk</a>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {links}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)} style={{ marginTop: ".5rem" }}>Let's Talk</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="grid-bg" />
      <div className="ambient" style={{ width: 480, height: 480, background: "var(--primary)", top: -120, right: -80 }} />
      <div className="container-x hero-grid">
        <div className="reveal">
          <p className="eyebrow">{brand.name} · {brand.title}</p>
          <h1 id="hero-title" style={{ marginTop: "1rem" }}>
            Turn Repetitive Business Processes Into <span className="text-gradient">Intelligent Automated Systems.</span>
          </h1>
          <p className="hero-desc">{brand.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem", marginTop: "2rem" }}>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <a href="#projects" className="btn btn-ghost">Explore My Work</a>
          </div>
          <p className="capabilities" aria-label="Capabilities">
            {brand.capabilities.map((c) => <span key={c}>{c}</span>)}
          </p>
        </div>
        <div className="reveal"><Workflow /></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-alt" aria-labelledby="about-title">
      <div className="container-x grid-2" style={{ alignItems: "start", gap: "3rem" }}>
        <div className="reveal">
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">Practical automation, built to be understood.</h2>
          <p className="section-lead">{about.intro}</p>
        </div>
        <div className="grid-2">
          {about.pillars.map((p) => (
            <div key={p.title} className="card reveal">
              <h3 style={{ fontSize: "1.05rem", fontWeight: 600 }}>{p.title}</h3>
              <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container-x">
        <SectionHead eyebrow="Services" title="Automation services for real business problems" lead="Each service starts with the task you want to remove from your team's plate." />
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {services.map((s) => (
            <article key={s.title} className="card reveal" style={{ display: "flex", flexDirection: "column", gap: ".9rem" }}>
              <span className="icon-box"><Icon name={s.icon} /></span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>{s.title}</h3>
              <p className="muted">{s.text}</p>
              <p style={{ fontSize: ".9rem" }}><span className="eyebrow" style={{ fontSize: ".7rem" }}>Use case</span><br />{s.useCase}</p>
              <a href="#contact" className="link-arrow" style={{ marginTop: "auto" }}>Discuss this service →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-title">
      <div className="container-x">
        <SectionHead eyebrow="Projects" title="Featured automation demonstrations" lead="These are demonstration projects showing approaches I use — not client case studies." />
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {projects.map((p) => (
            <article key={p.name} className="card reveal" style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="icon-box"><Icon name={p.icon} /></span>
                <span className="badge-demo">Demo</span>
              </div>
              <div>
                <p className="eyebrow" style={{ fontSize: ".72rem" }}>{p.category}</p>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginTop: ".3rem" }}>{p.name}</h3>
              </div>
              <p className="muted" style={{ fontSize: ".93rem" }}><strong style={{ color: "var(--foreground)" }}>Problem: </strong>{p.problem}</p>
              <p className="muted" style={{ fontSize: ".93rem" }}><strong style={{ color: "var(--foreground)" }}>Approach: </strong>{p.approach}</p>
              <ul className="check-list" style={{ margin: 0 }}>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginTop: "auto" }}>
                {p.tools.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.demoUrl && <a href={p.demoUrl} className="link-arrow" target="_blank" rel="noopener noreferrer">View demo →</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container-x">
        <SectionHead eyebrow="Skills & Tools" title="The toolkit behind the workflows" />
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {skillGroups.map((g) => (
            <div key={g.title} className="card reveal">
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "1rem" }}>{g.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: ".5rem" }}>
                {g.items.map((s) => (
                  <li key={s.name} className="skill-chip"><strong style={{ fontWeight: 500 }}>{s.name}</strong><p>{s.desc}</p></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section section-alt" aria-labelledby="process-title">
      <div className="container-x">
        <SectionHead eyebrow="Process" title="How a project comes together" />
        <ol className="timeline">
          {processSteps.map((s, i) => (
            <li key={s.title} className="reveal">
              <span className="num">STEP {String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p className="muted" style={{ fontSize: ".92rem" }}>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Pricing() {
  if (!showPricing) return null;
  return (
    <section id="pricing" className="section" aria-labelledby="pricing-title">
      <div className="container-x">
        <SectionHead eyebrow="Packages" title="Illustrative packages" lead="Final pricing and scope are agreed after discussing your requirements." />
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {pricing.map((p) => (
            <div key={p.name} className={`card price-card reveal${p.featured ? " featured" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600 }}>{p.name}</h3>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", marginTop: ".75rem" }} className={isPlaceholder(p.price) ? "placeholder" : ""}>{p.price}</p>
              <p className={isPlaceholder(p.scope) ? "placeholder" : "muted"} style={{ fontSize: ".9rem" }}>{p.scope}</p>
              <ul className="check-list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="#contact" className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`} style={{ marginTop: "auto" }}>Discuss this package</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section id="trust" className="section section-alt" aria-labelledby="trust-title">
      <div className="container-x">
        <SectionHead eyebrow="What to expect" title="Clarity, reliability, documentation" />
        <div className="grid-3" style={{ marginTop: "3rem" }}>
          {expectations.map((e) => (
            <div key={e.title} className="card reveal">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{e.title}</h3>
              <p className="muted" style={{ marginTop: ".5rem" }}>{e.text}</p>
            </div>
          ))}
        </div>
        {showTestimonials && (
          <div className="grid-2" style={{ marginTop: "1.25rem" }}>
            {testimonials.map((t, i) => (
              <figure key={i} className="card reveal" style={{ borderStyle: "dashed" }}>
                <span className="badge-demo">Placeholder testimonial</span>
                <blockquote className="placeholder" style={{ marginTop: "1rem" }}>"{t.quote}"</blockquote>
                <figcaption className="muted" style={{ marginTop: ".75rem", fontSize: ".9rem" }}>{t.author} — {t.role}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container-x" style={{ maxWidth: 860 }}>
        <SectionHead eyebrow="FAQ" title="Common questions" />
        <div style={{ marginTop: "2rem" }}>
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-item">
              <h3>
                <button className="faq-btn" aria-expanded={open === i} aria-controls={`faq-${i}`} id={`faq-btn-${i}`} onClick={() => setOpen(open === i ? null : i)}>
                  {f.q}<span className="plus" aria-hidden="true">+</span>
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={open !== i} className="faq-panel">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title" style={{ paddingTop: 0 }}>
      <div className="container-x">
        <div className="contact-panel reveal">
          <div className="grid-bg" />
          <div style={{ position: "relative" }}>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title" className="section-title">Have a Repetitive Process Worth Automating?</h2>
            <p className="section-lead">Tell me about the workflow you want to improve, the tools you currently use, and the outcome you are looking for.</p>
            <div className="contact-row">
              {emailHref ? <a href={emailHref} className="btn btn-primary">Email me</a>
                : <span className="btn btn-ghost" aria-disabled="true">Email: <span className="placeholder">{contact.email}</span></span>}
              {waHref ? <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Chat on WhatsApp</a>
                : <span className="btn btn-ghost" aria-disabled="true">WhatsApp: <span className="placeholder">{contact.whatsapp}</span></span>}
            </div>
            <div style={{ marginTop: "1.75rem" }}><SocialLinks /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-x" style={{ display: "grid", gap: "2rem" }}>
        <div className="grid-2" style={{ alignItems: "start" }}>
          <div>
            <a href="#home" className="logo"><span className="logo-mark">R</span>{brand.name}</a>
            <p className="muted" style={{ marginTop: ".75rem", maxWidth: "42ch" }}>{brand.title}. {brand.footerStatement}</p>
          </div>
          <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: ".25rem" }}>
            {navLinks.map((l) => <a key={l.id} href={`#${l.id}`} className="nav-link">{l.label}</a>)}
          </nav>
        </div>
        <SocialLinks />
        <p className="muted" style={{ fontSize: ".85rem" }}>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main">
        <Hero /><About /><Services /><Projects /><Skills /><Process /><Pricing /><Trust /><Faq /><Contact />
      </main>
      <Footer />
    </>
  );
}
