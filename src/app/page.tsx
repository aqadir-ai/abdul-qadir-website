const expertise = [
  {
    title: "Artificial Intelligence",
    copy: "End-to-end AI systems for production — from model design to reliable deployment across real-world products.",
  },
  {
    title: "Deep Learning",
    copy: "Neural architectures, training pipelines, and evaluation for perception, language, and decision-making systems.",
  },
  {
    title: "Agentic AI",
    copy: "Autonomous agents that plan, use tools, and collaborate — built for robustness, observability, and control.",
  },
  {
    title: "Security in Robotics",
    copy: "Research-grade focus on securing intelligent robotic systems — integrity, resilience, and trustworthy autonomy.",
  },
];

const experience = [
  {
    org: "Embedica.ai",
    role: "AI Engineer",
    period: "2023 — Present",
    href: "https://embedica.ai",
    copy: "Building production AI and agentic systems for real products — model development, deep learning workflows, and intelligent automation.",
  },
  {
    org: "Universitat Rovira i Virgili (URV)",
    role: "PhD · Computer Science & Mathematics",
    period: "Security in Robotics & AI",
    href: "https://www.urv.cat",
    copy: "Doctoral research spanning computer science and mathematics, with emphasis on security in robotics and AI engineering.",
  },
];

const regions = ["Spain", "European Union", "Türkiye"];

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-[rgba(244,247,250,0.72)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="font-[family-name:var(--font-instrument)] text-xl tracking-tight text-ink"
          >
            Abdul Qadir
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a href="#expertise" className="nav-link">
              Expertise
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#availability" className="nav-link">
              Availability
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <a
            href="mailto:qadirabdul20@yahoo.com"
            className="text-sm font-semibold text-accent hover:text-accent-bright"
          >
            Email
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero — one composition, brand first */}
        <section className="relative flex min-h-[100svh] items-end overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-24 lg:items-center lg:pb-20">
          <div className="hero-orbit" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 55% 40% at 78% 42%, rgba(12,107,92,0.14), transparent 70%)",
            }}
          />
          <div className="relative mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="section-label animate-rise">
                AI Engineer · Researcher · Lleida, Spain
              </p>
              <h1 className="animate-rise animate-rise-delay-1 mt-5 font-[family-name:var(--font-instrument)] text-[clamp(3.4rem,11vw,7.5rem)] leading-[0.9] tracking-[-0.03em] text-ink">
                Abdul
                <br />
                Qadir
              </h1>
              <span className="brand-underline" aria-hidden />
              <p className="animate-rise animate-rise-delay-2 mt-8 max-w-xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
                AI systems that learn, act, and stay secure.
              </p>
              <p className="animate-rise animate-rise-delay-3 mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Five years building deep learning and agentic AI — AI Engineer at
                Embedica, PhD researcher in computer science and mathematics at
                URV.
              </p>
              <div className="animate-rise animate-rise-delay-4 mt-10 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Get in touch
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-qadir-009607bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="animate-rise animate-rise-delay-3 relative hidden min-h-[22rem] lg:block">
              <div className="absolute inset-0 overflow-hidden rounded-none">
                <svg
                  viewBox="0 0 480 520"
                  className="h-full w-full"
                  fill="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="mesh" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0c6b5c" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#2d4e6e" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>
                  <rect width="480" height="520" fill="url(#mesh)" opacity="0.35" />
                  {[80, 160, 240, 320, 400].map((x) => (
                    <line
                      key={`v-${x}`}
                      x1={x}
                      y1="40"
                      x2={x}
                      y2="480"
                      stroke="#132029"
                      strokeOpacity="0.1"
                    />
                  ))}
                  {[80, 160, 240, 320, 400].map((y) => (
                    <line
                      key={`h-${y}`}
                      x1="40"
                      y1={y}
                      x2="440"
                      y2={y}
                      stroke="#132029"
                      strokeOpacity="0.1"
                    />
                  ))}
                  <circle cx="240" cy="260" r="88" stroke="#0c6b5c" strokeOpacity="0.55" />
                  <circle cx="240" cy="260" r="48" stroke="#132029" strokeOpacity="0.25" />
                  <circle cx="240" cy="260" r="6" fill="#0c6b5c" />
                  <path
                    d="M120 180 C180 120, 300 120, 360 180 C400 220, 400 300, 360 340 C300 400, 180 400, 120 340 C80 300, 80 220, 120 180Z"
                    stroke="#0c6b5c"
                    strokeOpacity="0.4"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M160 260 L240 140 L320 260 L240 380 Z"
                    stroke="#132029"
                    strokeOpacity="0.28"
                  />
                </svg>
              </div>
              <p className="absolute bottom-4 left-4 right-4 font-[family-name:var(--font-instrument)] text-lg italic text-ink-soft">
                Agentic systems · Deep learning · Trustworthy robotics
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Expertise</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-instrument)] text-4xl leading-tight text-ink sm:text-5xl">
              Where research meets production AI.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted">
              A focused practice across intelligent systems — from neural models
              to secure, agentic deployments.
            </p>
            <div className="mt-12 border-b border-line">
              {expertise.map((item) => (
                <article key={item.title} className="expertise-row">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-24 border-y border-line bg-[rgba(255,255,255,0.4)] px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Experience</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-instrument)] text-4xl leading-tight text-ink sm:text-5xl">
              Industry and academia, in parallel.
            </h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              {experience.map((job) => (
                <article key={job.org} className="timeline-item">
                  <p className="text-sm font-semibold tracking-wide text-accent">
                    {job.period}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-instrument)] text-3xl text-ink">
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {job.org}
                    </a>
                  </h3>
                  <p className="mt-1 text-base font-medium text-ink-soft">{job.role}</p>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    {job.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Availability */}
        <section id="availability" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="section-label">Availability</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-instrument)] text-4xl leading-tight text-ink sm:text-5xl">
              Open for professional work.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Based in Lleida, Spain — available for collaborations, consulting,
              and engineering engagements across:
            </p>
            <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {regions.map((region) => (
                <li
                  key={region}
                  className="font-[family-name:var(--font-instrument)] text-3xl text-ink sm:text-4xl"
                >
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-line bg-ink px-5 py-20 text-[#eef3f6] sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7ecfbf]">
              Contact
            </p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-instrument)] text-4xl leading-tight sm:text-5xl">
              Let&apos;s build something rigorous.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-[#a8b8c4]">
              Reach out for professional collaborations, research discussions, or
              AI engineering work.
            </p>

            <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#7ecfbf]">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href="mailto:qadirabdul20@yahoo.com"
                    className="text-lg text-[#eef3f6] underline-offset-4 hover:underline"
                  >
                    qadirabdul20@yahoo.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#7ecfbf]">
                  Phone
                </dt>
                <dd className="mt-2">
                  <a
                    href="tel:+34624568203"
                    className="text-lg text-[#eef3f6] underline-offset-4 hover:underline"
                  >
                    +34 624 568 203
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#7ecfbf]">
                  Location
                </dt>
                <dd className="mt-2 text-lg">Lleida, Spain</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-[#7ecfbf]">
                  LinkedIn
                </dt>
                <dd className="mt-2">
                  <a
                    href="https://www.linkedin.com/in/abdul-qadir-009607bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#eef3f6] underline-offset-4 hover:underline"
                  >
                    abdul-qadir-009607bb
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-ink px-5 py-6 text-sm text-[#7a8b98] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Abdul Qadir</p>
          <p>AI Engineer · PhD Researcher · Embedica.ai · URV</p>
        </div>
      </footer>
    </>
  );
}
