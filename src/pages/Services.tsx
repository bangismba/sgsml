
import { useState } from 'react';
import { SERVICES, CATS } from '../data';
import Head from '../components/Head';

function Services() {
  const [cat, setCat] = useState("All");

  const list = SERVICES.filter(
    s => cat === "All" || s[0] === cat
  );

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero services-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>

        <div className="wrap">
          <span className="pill">
            <i />
            What We Do
          </span>

          <h1>
            Our <span className="grad">Services.</span>
          </h1>

          <p className="lead" style={{ maxWidth: '56ch' }}>
            From engineering design to infrastructure development,
            we deliver practical solutions built around quality,
            reliability and long-term value.
          </p>
        </div>

        <div className="hero-fade" aria-hidden="true" />
      </section>

      {/* ============ SERVICES LIST ============ */}
      <section className="sec">
        <div className="wrap">
          <Head
            t="Explore Our Services"
            d="Eleven services across six categories."
          />

          <div
            className="chips"
            role="group"
            aria-label="Filter by category"
          >
            {["All", ...CATS].map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                className={"tag" + (cat === c ? " on" : "")}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid g3">
            {list.map(s => (
              <div className="card" key={s[1]}>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
                <span
                  className="tag"
                  style={{ marginTop: "1rem" }}
                >
                  {s[0]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
