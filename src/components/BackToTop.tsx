import { useEffect, useState } from 'react';

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: 'fixed',
        right: '1.25rem',
        bottom: '1.25rem',
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: 'none',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        fontSize: '1.1rem',
        lineHeight: 1,
        background: 'var(--accent, #c9a227)',
        color: '#fff',
        boxShadow: '0 6px 18px rgba(0,0,0,.25)',
        zIndex: 50,
        transition: 'opacity .2s ease, transform .2s ease',
      }}
    >
      ↑
    </button>
  );
}

export default BackToTop;