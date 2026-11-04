import { CATS, SERVICES, PROJECTS, CLIENTS, CLIENTS2 } from '../data';
import ProjectCarousel from '../components/ProjectCarousel';

export default function Home({ go }: { go: (p: string) => void }) {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-photo" />
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>

        <div className="wrap">
          <span className="pill">
            <i />
            New Generation, Solutions for Today.
          </span>

          <h1>
            Infrastructure <span className="grad">built to last.</span>
          </h1>

          <p className="lead" style={{ maxWidth: '56ch' }}>
            Sayaya General Supply Merchant Limited is an indigenous general
            contractor delivering buildings, roads and bridges for government
            agencies, NGOs, corporate clients and private individuals across
            Nigeria.
          </p>

          <div className="btns">
            <button className="btn" onClick={() => go('contact')}>
              Request a quote
            </button>
            <button className="btn ghost" onClick={() => go('projects')}>
              View projects
            </button>
          </div>

          <div className="facts">
            <div>
              <b>3+</b>
              <span>States delivered</span>
            </div>
            <div>
              <b>2022</b>
              <span>Established</span>
            </div>
            <div>
              <b>100%</b>
              <span>Nigerian-owned</span>
            </div>
          </div>
        </div>

        <div className="hero-fade" aria-hidden="true" />
      </section>

      {/* ============ TRUSTED BY / CLIENTS ============ */}
      <section className="sec trusted" aria-label="Trusted by clients and partners">
        <div className="wrap">
          <p className="trusted-label">
            Trusted by government agencies, NGOs and private clients
          </p>
        </div>

        <div className="marquee">
          <div className="marquee-track marquee-left">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div className="marquee-item" key={`a-${i}`}>
                <img src={c.logo} alt={c.name} loading="lazy" height="36" />
              </div>
            ))}
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track marquee-right">
            {[...CLIENTS2, ...CLIENTS2].map((c, i) => (
              <div className="marquee-item" key={`b-${i}`}>
                <img src={c.logo} alt={c.name} loading="lazy" height="36" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap two">
          <h2>Practical engineering, delivered on time.</h2>
          <div>
            <p className="lead">
              We plan, build and maintain the structures communities rely on,
              with clear reporting at every stage.
            </p>
            <p>
              From architectural design and building works to roads, bridges,
              project monitoring and maintenance, one contractor can carry a
              project from the first drawing to long-term upkeep.
            </p>
            <button className="btn ghost" onClick={() => go('about')}>
              About SGSML
            </button>
          </div>
        </div>
      </section>

      {/* ============ STATS STRIP ============ */}
      <section className="deep sec" style={{ padding: '3rem 0' }}>
        <div className="wrap kf">
          <div>
            <b>11</b>
            <span>Services</span>
          </div>
          <div>
            <b>6</b>
            <span>Service categories</span>
          </div>
          <div>
            <b>Nationwide</b>
            <span>Project coverage</span>
          </div>
        </div>
      </section>

      {/* ============ EXPERTISE ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <h2>Our expertise</h2>
            <p className="lead">Six service categories, from design to maintenance.</p>
          </div>
          <div className="rows">
            {CATS.map((c) => (
              <button className="row" key={c} onClick={() => go('services')}>
                <span className="rn">{c}</span>
                <span className="rl">
                  {SERVICES.filter((s) => s[0] === c)
                    .map((s) => s[1])
                    .join(', ')}
                </span>
                <span className="ra" aria-hidden="true">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROJECTS ============ */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <h2 className="sec-title">Projects</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            Completed and ongoing work across Nigeria.
          </p>
        </div>
        <ProjectCarousel items={PROJECTS} go={go} />
      </section>


      {/* ============ CTA ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="cta">
            <h2>Have a project in mind?</h2>
            <p>
              Share your brief or drawings and we will come back with a quote.
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