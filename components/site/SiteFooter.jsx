export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brandline">
            <img
              src="/assets/images/mindgen-logo.svg"
              alt="MindGen logo"
              className="footer-logo"
              data-light-logo="/assets/images/mindgen-logo.svg"
              data-dark-logo="/assets/images/mindgen-logo-dark.svg"
            />
          </div>

          <nav className="footer-links" aria-label="Footer primary">
            <a href="#">Co-Innovation</a>
            <a href="#">Partners</a>
            <a href="#">Client Stories</a>
            <a href="#">Training</a>
            <a href="#">Perspectives</a>
            <a href="#">Events</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="/#contact">Contact</a>
          </nav>

          <div className="footer-contact-row">
            <span className="footer-phone">PHONE: 00000 00000</span>
            <div className="footer-social" aria-label="Social media links">
              <a href="#" aria-label="LinkedIn">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="9" width="4" height="12"></rect>
                  <circle cx="5" cy="5" r="2"></circle>
                  <path d="M11 21V9h4v2c.8-1.2 2-2 3.6-2 3 0 4.4 2 4.4 5.4V21h-4v-5.7c0-1.6-.5-2.6-1.8-2.6-1 0-1.7.7-2 1.6-.1.2-.1.5-.1.8V21h-4z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="4" ry="4"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <circle cx="17.5" cy="6.5" r="1.2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H9v3h2.4v8h3.1z"></path>
                </svg>
              </a>
              <a href="#" aria-label="X">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 4l5.7 7.8L5.5 20H8l4-5.3L16 20h3L13 11.6 18.2 4h-2.5L12 8.8 8.5 4H5z"></path>
                </svg>
              </a>
              <a href="#" aria-label="RSS">
                <svg className="footer-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="6" cy="18" r="2"></circle>
                  <path d="M4 11a9 9 0 0 1 9 9"></path>
                  <path d="M4 6a14 14 0 0 1 14 14"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-divider"></div>

          <nav className="footer-regions" aria-label="Regions">
            <a href="#">United States</a>
            <a href="#">Europe</a>
            <a href="#">Canada</a>
            <a href="#">India</a>
            <a href="#">Mexico</a>
            <a href="#">Singapore</a>
          </nav>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">
          <div className="footer-legal">
            <span>&copy; 2026 MindGen</span>
            <a href="#">LEGAL NOTICES</a>
            <a href="#">NEWSROOM</a>
            <a href="#">PRIVACY</a>
            <a href="#">ACCESSIBILITY</a>
            <a href="#">COOKIE SETTINGS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
