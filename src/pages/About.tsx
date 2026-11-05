
type AboutProps = {
  go: (page: string) => void;
};

const VALUES = [
  {
    name: 'Integrity',
    desc: 'Understanding, firm but fair, honest and transparent.',
  },
  {
    name: 'Teamwork',
    desc: 'Encouraging collaboration and mutual support to reinforce our one-team approach.',
  },
  {
    name: 'Respect',
    desc: 'With due regard to the feelings, wishes, contributions and opinions of others.',
  },
  {
    name: 'Commitment',
    desc: 'Dedication to achieving excellence in all aspects of our business.',
  },
  {
    name: 'Innovation',
    desc: 'Embracing and using new technology and innovations in the industry, and encouraging new ideas that contribute to the success of the company.',
  },
];

const TEAM = [
  { name: 'Alhaji Ahmed Usman Danmalam', role: 'Founder & Managing Director/CEO' },
  { name: 'Technical Director', role: 'Engineering & Project Delivery' },
  { name: 'Operations Manager', role: 'Site Operations & Logistics' },
];

function About({ go }: AboutProps) {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero about-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>
        <div className="wrap">
          <span className="pill">
            <i />
            About SGSML
          </span>
          <h1>
            An indigenous contractor, <span className="grad">built for Nigeria.</span>
          </h1>
          <p className="lead" style={{ maxWidth: '56ch' }}>
            Sayaya General Supply Merchant Limited (SGSML) is a 100% Nigerian-owned
            general contracting company working across construction, engineering
            and infrastructure since 2022.
          </p>
        </div>
        <div className="hero-fade" aria-hidden="true" />
      </section>

      {/* ============ COMPANY STORY ============ */}
      <section className="sec">
        <div className="wrap two">
          <h2>Our story.</h2>
          <div>
            <p className="lead">
              SGSML was established in August 2022 with a clear mandate: to
              deliver infrastructure that lasts — built by Nigerians, for Nigeria.
            </p>
            <p>
              In a short period we have completed and delivered successful projects
              across three states, earning the trust of government agencies, NGOs,
              corporate clients and private individuals. What began as a small,
              focused team has grown into a multi-sector contractor with a broad
              portfolio spanning roads, bridges, housing and general contracts.
            </p>
            <p>
              We are a private limited company (RC: 1965290) with a Tax
              Identification Number of 31117005-0001, registered with the Corporate
              Affairs Commission of Nigeria. Our strength comes from our people,
              our deep community roots, and close relationships with customers,
              partners and key stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="grid g2" style={{ gap: '1.2rem' }}>
            <div className="card mv-card">
              <div className="badge">M</div>
              <h3>Mission</h3>
              <p>
                To become the leading indigenous general contracting company,
                while delivering projects that consistently exceed international
                standards and provide exceptional customer satisfaction.
              </p>
              <p style={{ marginTop: '.8rem' }}>
                To continually deliver excellent value and innovative contracting
                solutions to meet our clients' expectations.
              </p>
            </div>
            <div className="card mv-card">
              <div className="badge">V</div>
              <h3>Vision</h3>
              <p>
                To be a company positioned to take on any challenge in the
                construction, engineering and infrastructure industry — a role
                model for other upcoming companies in the sector.
              </p>
              <p style={{ marginTop: '.8rem' }}>
                Using modern principles and sophisticated technologies, we aim to
                be the choice at all times, nationwide, for our renowned
                excellence, quality, performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <h2>Core values</h2>
            <p className="lead">The principles behind every project we deliver.</p>
          </div>
          <div className="grid g3 values-grid">
            {VALUES.map((v) => (
              <div className="card value-card" key={v.name}>
                <h3>{v.name}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MD/CEO MESSAGE ============ */}
      <section className="sec deep">
        <div className="wrap">
          <div className="ceo-layout">
            <div className="ceo-portrait">
              <img
                src="/images/ceo.jpeg"
                alt="Alhaji Ahmed Usman Danmalam — Founder & Managing Director/CEO"
                width="360"
                height="420"
                loading="lazy"
              />
            </div>
            <div className="ceo-message">
              <span className="ceo-pill">Message from the MD/CEO</span>
              <blockquote>
                “Our work to transform SGSML for our commitments in the
                infrastructural sector of Nigeria has just begun. While we
                recognise that there are challenges ahead, we are confident that
                the business pillars we have laid in construction and housing
                will play an important role in bringing the company to greater
                heights.”
              </blockquote>
              <p>
                Being one of the indigenous private construction companies in
                Nigeria, SGSML has accumulated wide and diversified experience
                since coming on board. We have not only succeeded in completing
                the given projects and services in a timely and effective manner,
                but have also become a major competitor in the construction and
                housing industry — while building respect among competitors,
                clientele and employees alike.
              </p>
              <p>
                As a company, our strength comes from our team's solid experience
                in the field, deep community roots, and close relationships with
                customers, partners and key stakeholders. To us, success is
                mirrored in what we build as well as how we build it. That's why
                we never stop raising the bar.
              </p>
              <div className="ceo-sig">
                <strong>Alhaji Ahmed Usman Danmalam</strong>
                <span>Founder & Managing Director/CEO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANAGEMENT ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <h2>Management</h2>
            <p className="lead">
              The people carrying SGSML from the first drawing to long-term upkeep.
            </p>
          </div>
          <div className="grid g3 team-grid">
            {TEAM.map((m) => (
              <div className="card team-card" key={m.role}>
                <div className="team-photo ph">
                  <span>Photo</span>
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>Let's build something lasting.</h2>
            <p>
              Share your brief or drawings and we'll come back with a detailed
              quote.
            </p>
            <button className="btn" onClick={() => go('contact')}>
              Send a project request
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
