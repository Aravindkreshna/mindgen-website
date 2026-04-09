export default function SiteHeader() {
  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <a href="/" className="brand" aria-label="MindGen Home">
          <img
            src="/assets/images/mindgen-logo.svg"
            alt="MindGen logo"
            className="brand-logo"
            data-light-logo="/assets/images/mindgen-logo.svg"
            data-dark-logo="/assets/images/mindgen-logo-dark.svg"
          />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#" className="has-mega" data-mega-target="whatwedo">
            What We Do
          </a>
          <a href="#" className="has-mega nav-industries-link" data-mega-target="industries">
            Industries We Serve
          </a>
          <a href="#" className="has-mega" data-mega-target="ourwork">
            Our Work
          </a>
          <a href="#">Thought Leadership</a>
          <a href="#">Who We Are</a>
        </nav>
        <div className="header-actions">
          <button
            id="themeToggle"
            className="theme-toggle-btn"
            type="button"
            aria-label="Switch to dark mode"
            aria-pressed="false"
          >
            Dark
          </button>
          <button className="icon-btn icon-btn-search" aria-label="Search">
            <span className="search-icon"></span>
          </button>
          <button className="contact-btn">CONTACT US</button>
          <button className="menu-btn" aria-label="Open menu" aria-expanded="false">
            Menu
          </button>
        </div>
      </div>

      <div className="mega-nav" id="mega-whatwedo" data-mega-panel="whatwedo">
        <div className="mega-nav-inner">
          <div className="mega-col">
            <div className="mega-feature">
              <h3 className="mega-feature-title">
                <span className="mega-feature-arrow">&#8250;</span>
                Expertise
              </h3>
              <p>Learn more about our services, capabilities, and industry experience</p>
            </div>

            <div className="mega-feature">
              <h3 className="mega-feature-title">
                <span className="mega-feature-arrow">&#8250;</span>
                Partners
              </h3>
              <p>Delivering tailored solutions for your business challenges with enterprise technology partners</p>
            </div>

            <div className="mega-feature">
              <h3 className="mega-feature-title">
                <span className="mega-feature-arrow">&#8250;</span>
                Training
              </h3>
              <p>Offering in-person and online expert training courses to meet your company&apos;s training needs</p>
            </div>
          </div>

          <div className="mega-col">
            <h3>Solutions</h3>
            <p>Value-oriented offerings supporting companies at all stages of AI maturity</p>
            <ul>
              <li><a href="#">AI-Enhanced Experience Transformation</a></li>
              <li><a href="#">Agentic Business Reinvention</a></li>
              <li><a href="#">Intelligent Product Engineering</a></li>
              <li><a href="#">Modern Business Platforms</a></li>
            </ul>
          </div>

          <div className="mega-col">
            <h3>Services</h3>
            <p>Brand experiences &amp; engineered solutions that drive transformative results</p>
            <ul>
              <li><a href="/services/artificial-intelligence">Artificial Intelligence</a></li>
              <li><a href="/#services">Data &amp; Analytics</a></li>
              <li><a href="/#services">Experience Innovation &amp; Design</a></li>
              <li><a href="/#services">Digital Product &amp; Platform Engineering</a></li>
              <li><a href="/#services">Enterprise Digital Transformation</a></li>
              <li><a href="/#services">Cloud Enablement &amp; Modernization</a></li>
              <li><a href="/#services">Marketing Activation &amp; Loyalty</a></li>
              <li><a href="/#services">Digital Commerce</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mega-nav" id="mega-industries" data-mega-panel="industries">
        <div className="mega-nav-inner industries-mega-inner">
          <div className="mega-col">
            <h3>Industries</h3>
            <p>Industry-specific digital solutions &amp; case studies</p>
          </div>

          <div className="mega-col">
            <ul>
              <li><a href="/#industries" className="industries-link">Consumer Goods</a></li>
              <li><a href="/#industries" className="industries-link">Financial Services</a></li>
              <li><a href="/#industries" className="industries-link">Healthcare</a></li>
              <li><a href="/#industries" className="industries-link">Industrial &amp; Manufacturing</a></li>
              <li><a href="/#industries" className="industries-link">Logistics</a></li>
            </ul>
          </div>

          <div className="mega-col">
            <ul>
              <li><a href="/#industries" className="industries-link">Media, Entertainment, Technology</a></li>
              <li><a href="/#industries" className="industries-link">Restaurant &amp; Convenience</a></li>
              <li><a href="/#industries" className="industries-link">Retail</a></li>
              <li><a href="/#industries" className="industries-link">Telecommunications</a></li>
              <li><a href="/#industries" className="industries-link">Travel &amp; Hospitality</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mega-nav" id="mega-ourwork" data-mega-panel="ourwork">
        <div className="mega-nav-inner ourwork-mega-inner">
          <div className="mega-col">
            <h3>Case Studies</h3>
            <p>Collaborative brand innovation that drives client success</p>

            <h3>Co-Innovation</h3>
            <p>Working together to accelerate digital transformation through our Co-Innovation methodology</p>
          </div>

          <article className="work-card">
            <div className="work-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=1200&q=80"
                alt="Man reviewing telecom dashboard"
              />
              <span className="work-tag">LEADING TELECOM COMPANY</span>
            </div>
            <h4>Leading Telecom Company Reimagines Risk Analysis with Generative AI</h4>
          </article>

          <article className="work-card">
            <div className="work-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1542838687-0f8857dbd8b6?auto=format&fit=crop&w=1200&q=80"
                alt="Consumer campaign visual"
              />
              <span className="work-tag">COCA-COLA</span>
            </div>
            <h4>Delighting Consumers With a New Channel for a Beloved Brand</h4>
          </article>
        </div>
      </div>
    </header>
  );
}
