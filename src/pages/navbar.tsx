import { useState, useEffect, useRef } from 'react';
import { PAGES } from '../data';
import type { Theme } from '../hooks/useTheme';
import { I } from '../components/icons';

type Props = {
  page: string;
  go: (p: string) => void;
  theme: Theme;
  toggle: () => void;
};

function Navbar({ page, go, theme, toggle }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const pick = (p: string) => {
    go(p);
    setOpen(false);
  };

  const dark = theme === 'dark';

  /* Scroll behaviour: shrink + auto-hide */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // hide when scrolling down past 200px, show when scrolling up
      if (y > 200 && y > lastY.current) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer on Escape */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={
        'site-header' +
        (scrolled ? ' scrolled' : '') +
        (hidden && !open ? ' hidden' : '')
      }
    >
      {/* Utility bar — scrolls away */}
      <div className="util">
        <div className="wrap util-in">
          <span>RC: 1965290</span>
          <span>
            <button onClick={() => pick('contact')}>Contact</button>
            <button onClick={() => pick('contact')}>Request a quote</button>
          </span>
        </div>
      </div>

      {/* Sticky bar */}
      <div className="bar-wrap">
        <div className="wrap bar">
          <button
            className="brand"
            onClick={() => pick('home')}
            aria-label="Sayaya home"
          >
            <img
              className="brand-logo"
              src="/logo.png"
              alt="Sayaya General Supply Merchant Ltd"
              width="120"
              height="40"
            />
          </button>

          <nav aria-label="Main">
            <ul className="links">
              {PAGES.map(([k, l]) => (
                <li key={k}>
                  <button
                    onClick={() => pick(k)}
                    aria-current={page === k ? 'page' : undefined}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="tools">
            <button
              className="ic"
              onClick={toggle}
              aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'}
              title={dark ? 'Day mode' : 'Night mode'}
            >
              {dark ? I.sun : I.moon}
            </button>

            <button
              className="ic burger"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? I.close : I.menu}
            </button>
          </div>
        </div>

        {/* Drawer — anchored to the sticky bar */}
        <div
          className={'drawer' + (open ? ' open' : '')}
          aria-hidden={!open}
        >
          <nav aria-label="Mobile">
            <ul>
              {PAGES.map(([k, l]) => (
                <li key={k}>
                  <button
                    className="l"
                    onClick={() => pick(k)}
                    aria-current={page === k ? 'page' : undefined}
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;