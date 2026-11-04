import { useEffect, useRef, useState } from 'react';
import type { Project } from '../data';

const Arrow = ({ dir }: { dir: 'l' | 'r' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={dir === 'l' ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ProjectCarousel({ items, go }: { items: Project[]; go: (p: string) => void }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const n = items.length;
  console.log('Projects:', n, 'Current slide:', i);
  const goTo = (k: number) => setI(((k % n) + n) % n);
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setI(v => (v + 1) % n), 6000);
    return () => clearInterval(id);
  }, [paused, reduce, n]);

  return (
    <div
      className="car"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === 'ArrowLeft') goTo(i - 1);
        if (e.key === 'ArrowRight') goTo(i + 1);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={e => { startX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 50) goTo(i + (dx < 0 ? 1 : -1));
        startX.current = null;
      }}
    >
      <div className="car-track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {items.map((p, k) => (
          <figure className="car-slide" key={p[0]} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`} aria-hidden={k !== i}>
            <div className="car-img" style={p[5] ? { backgroundImage: `url(${p[5]})` } : undefined}>
              {!p[5] && <span>Project photo</span>}
            </div>
            <figcaption className="car-cap">
              <span className="tag on">{p[4]}</span>
              <h3>{p[0]}</h3>
              <p>{p[1]} · {p[2]} · {p[3]}</p>
              <div className="btns" style={{ marginTop: '1rem' }}>
                <button className="btn" tabIndex={k === i ? 0 : -1} onClick={() => go('projects')}>Detail</button>
                <button className="btn ghost" tabIndex={k === i ? 0 : -1} onClick={() => go('projects')}>All projects</button>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="car-ctl">
        <div className="car-dots">
          {items.map((_, k) => (
            <button key={k} aria-label={`Go to project ${k + 1}`} aria-current={k === i} className={k === i ? 'on' : ''} onClick={() => goTo(k)} />
          ))}
        </div>
        <button className="car-nav" aria-label="Previous project" onClick={() => goTo(i - 1)}><Arrow dir="l" /></button>
        <button className="car-nav" aria-label="Next project" onClick={() => goTo(i + 1)}><Arrow dir="r" /></button>
      </div>
    </div>
  );
}
