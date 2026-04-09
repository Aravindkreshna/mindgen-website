export default function ContactSection() {
  return (
    <section id="contact" className="innovate-contact" aria-label="Let&apos;s innovate together" data-component="contact">
      <div className="innovate-container">
        <div className="innovate-title-wrap">
          <button className="innovate-toggle" type="button" aria-expanded="true" aria-controls="innovateBody">
            Let&apos;s innovate together
            <span className="innovate-caret" aria-hidden="true"></span>
          </button>
        </div>

        <div className="innovate-body" id="innovateBody">
          <div className="innovate-testimonial">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <p>
              Thank you so much for asking the right questions, co-innovating with us along the way, and always being receptive and
              providing us valid feedback on the solution and code. On behalf of the member portal technical team, thank you again for
              all the hard work and effort that you have put in to get our project to production. It was great working with you.
            </p>
            <div className="author-block">
              <span className="author-line"></span>
              <h3>Linitha Balan</h3>
              <p>SENIOR APPLICATION DEVELOPER, VSP</p>
              <div className="author-brand">vsp.</div>
            </div>
          </div>

          <form className="innovate-form" action="#" method="post">
            <label htmlFor="biz-email">Business Email*</label>
            <input id="biz-email" name="biz-email" type="email" />

            <label htmlFor="first-name">First Name*</label>
            <input id="first-name" name="first-name" type="text" />

            <label htmlFor="last-name">Last Name*</label>
            <input id="last-name" name="last-name" type="text" />

            <label htmlFor="company-name">Company Name*</label>
            <input id="company-name" name="company-name" type="text" />

            <div className="captcha-box" aria-hidden="true">
              <span className="captcha-check"></span>
              <span className="captcha-label">I&apos;m not a robot</span>
              <span className="captcha-badge">reCAPTCHA</span>
            </div>

            <button className="innovate-submit" type="submit">SUBMIT</button>
            <p className="consent-copy">
              By clicking submit, you consent to us sending you the communications requested above in accordance with our
              <a href="#"> privacy policy</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
