import { PAGES, SERVICES } from '../data';

type Props = {
  brand?: {
    name: string;
    tagline: string;
    rc: string;
    tin: string;
    phone: string;
    phoneAlt?: string;
    email: string;
    address: string[];
    socials?: { label: string; href: string }[];
  };
};

function Footer({ brand }: Props) {
  const year = new Date().getFullYear();

  const b =
    brand ??
    {
      name: 'Sayaya General Supply Merchant Ltd',
      tagline: 'New Generation, Solutions for Today.',
      rc: '1965290',
      tin: '31117005-0001',
      phone: '+2348034026858',
      phoneAlt: '+2348088888875',
      email: 'contact@sayayagsml.com',
      address: [
        'No. 6 Musa Abdullahi Road, Opposite Royal Sign Board,',
        "Ungunar Mu'azu Nnamdi Azikwe By-pass, Kaduna State, Nigeria",
      ],
      socials: [
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
      ],
    };

  return (
    <footer className="deep">
      <div className="wrap fg">
        {/* Brand column */}
        <div>
          <img
            className="brand-logo foot-logo"
            src="/logo.png"
            alt={b.name}
            width="132"
            height="44"
          />
          <p style={{ marginTop: '1rem' }}>{b.tagline}</p>
          <p className="mute" style={{ fontSize: '.85rem' }}>
            RC: {b.rc} &middot; TIN: {b.tin}
          </p>

          <p style={{ marginTop: '1rem', fontSize: '.9rem' }}>
            <a href={`tel:${b.phone}`}>{b.phone}</a>
            {b.phoneAlt && (
              <>
                {' / '}
                <a href={`tel:${b.phoneAlt}`}>{b.phoneAlt}</a>
              </>
            )}
            <br />
            <a href={`mailto:${b.email}`}>{b.email}</a>
          </p>

          <p
            className="mute"
            style={{ fontSize: '.85rem', marginTop: '.5rem' }}
          >
            {b.address.map((line, i) => (
              <span key={i}>
                {line}
                {i < b.address.length - 1 && <br />}
              </span>
            ))}
          </p>

          {b.socials && (
            <div
              style={{ display: 'flex', gap: '.75rem', marginTop: '1rem' }}
            >
              {b.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Company links */}
        <div>
          <strong>Company</strong>
          {PAGES.slice(0, 3).map(([k, l]) => (
            <div key={k}>
              <a href={'#' + k}>{l}</a>
            </div>
          ))}
        </div>

        {/* Work links */}
        <div>
          <strong>Work</strong>
          {PAGES.slice(3).map(([k, l]) => (
            <div key={k}>
              <a href={'#' + k}>{l}</a>
            </div>
          ))}
        </div>

        {/* Services column */}
        <div>
          <strong>Services</strong>
          {SERVICES.slice(0, 6).map((s) => (
            <div key={s[1]}>
              <a href="#services">{s[1]}</a>
            </div>
          ))}
          <div>
            <a href="#services">
              <em>View all services →</em>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="wrap fbot">
        <span>
          © {year} {b.name}. All rights reserved.
        </span>
        <span style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;