export default function HeroSection() {
  return (
    <section id="hero" className="hero" aria-label="Hero section" data-component="hero">
      <div className="hero-video-wrap" aria-hidden="true">
        <iframe
          className="hero-video"
          src="https://www.youtube.com/embed/6NQ2fRlWARQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=6NQ2fRlWARQ&iv_load_policy=3&disablekb=1"
          title="Hero background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Innovation.<br />Intelligence.<br />Impact.</h1>
        <p>
          We harness Co-Innovation and AI
          to spark bold ideas, power smarter solutions,
          and deliver lasting value.
        </p>
      </div>
    </section>
  );
}
