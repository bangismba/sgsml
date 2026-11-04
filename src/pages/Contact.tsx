import { useState } from 'react';
import { SERVICES } from '../data';
import Head from '../components/Head';

function Contact() {
  const [sent, setSent] = useState(false);
  const [file, setFile] = useState("");

  return (
    <section className="sec">
      <div className="wrap">
        <Head
          t="Contact us"
          d="Send a project request or ask a question. We reply within two working days."
        />

        <div className="grid g2" style={{ alignItems: "start" }}>
          {sent ? (
            <div className="ok" role="status">
              Request received. We will reply within two working days.
            </div>
          ) : (
            <form
              className="card form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <h3>Quote or project request</h3>

              <label>
                Full name
                <input required autoComplete="name" />
              </label>

              <label>
                Organisation (optional)
                <input autoComplete="organization" />
              </label>

              <label>
                Email
                <input type="email" required autoComplete="email" />
              </label>

              <label>
                Phone
                <input type="tel" autoComplete="tel" />
              </label>

              <label>
                Service needed
                <select required defaultValue="">
                  <option value="" disabled>
                    Choose a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s[1]}>{s[1]}</option>
                  ))}
                </select>
              </label>

              <label>
                Project details
                <textarea rows={5} required />
              </label>

              <label>
                Attach drawings or brief
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={(e) => setFile(e.target.files?.[0]?.name || "")}
                />
              </label>

              {file && <span className="mute">Selected: {file}</span>}

              <button className="btn" type="submit">
                Send request
              </button>
            </form>
          )}

          <div className="card">
            <h3>Reach us</h3>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+2348034026858">(+234) 0803 402 6858</a>
              {" / "}
              <a href="tel:+2348088888875">(+234) 0808 888 8875</a>
            </p>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:audanmalikil@gmail.com">
                contact@sayayaGSML.com
              </a>
            </p>

            <p>
              <strong>Address:</strong> No. 6 Musa Abdullahi Road, Opposite
              Royal Sign Board, Ungunar Mu'azu Nnamdi Azikwe By-pass, Kaduna
              State, Nigeria
            </p>

            <iframe
              title="Sayaya General Supply Merhant Limited Office Location"
              src="https://www.google.com/maps?q=No.+6+Musa+Abdullahi+Road,+Opposite+Royal+Sign+Board,+Ungunar+Mu'azu+Nnamdi+Azikwe+By-pass,+Kaduna+State,+Nigeria&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: 8, marginTop: "1rem" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;