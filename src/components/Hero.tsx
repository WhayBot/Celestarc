import { ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';

export const Hero = () => {
  const { hero } = content;

  return (
    <section className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Full Studio Profile */}
        <div className="hero-content">
          <div className="hero-studio-block">
            <h1 className="hero-studio-title">{hero.studioTitle}</h1>
            <p className="hero-studio-desc">{hero.studioDescription}</p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn-primary">
                {hero.ctaSecondary}
              </a>
              <a
                href={content.footer.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>GitHub</span>
                <ArrowUpRight className="icon-sm" />
              </a>
            </div>
          </div>

          {/* ============================================================
              DORMANT / HIDDEN: U-BOX FEATURED HEADLINE
              Disimpan untuk kebutuhan aktivasi kembali di masa depan.
              Hapus komentar di bawah jika ingin menampilkan kembali.
             ============================================================ */}
          {/*
          <div className="hero-divider-line"></div>
          <div className="hero-product-block">
            <h2 className="hero-product-title">{hero.title}</h2>
            <p className="hero-subtitle">{hero.subtitle}</p>

            <div className="hero-cta-group">
              <a
                href="https://github.com/WhayBot/U-BOX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowUpRight className="icon-sm" />
              </a>
              <a href="#contact" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>
          </div>
          */}
        </div>

        {/* Right Column: Hero Image Frame */}
        <div className="hero-visual">
          <div className="image-placeholder-frame hero-placeholder-frame">
            <img
              src={hero.imageUrl}
              alt={hero.imageAlt}
              className="hero-image"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="image-placeholder-label">[FOTO PROTOTIPE / STUDIO]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
