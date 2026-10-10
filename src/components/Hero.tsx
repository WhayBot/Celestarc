import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';
import { resolveImageUrl } from '../utils/image';

export const Hero = () => {
  const { hero } = content;
  const rawImages = hero.images && hero.images.length > 0 ? hero.images : [hero.imageUrl];
  const images = rawImages.map(resolveImageUrl);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

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
            {images.map((imgSrc, idx) => (
              <img
                key={imgSrc + idx}
                src={imgSrc}
                alt={`${hero.imageAlt} ${idx + 1}`}
                className={`hero-image ${idx === currentIndex ? 'active' : ''}`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            ))}
            <span className="image-placeholder-label">[FOTO PROTOTIPE / STUDIO]</span>
          </div>
        </div>
      </div>
    </section>
  );
};
