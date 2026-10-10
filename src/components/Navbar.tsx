import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navbar, footer } = content;

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Logo only: text 'Celestarc Industries' removed since it is inside the logo graphic */}
        <a href="#" className="brand-link" aria-label="Celestarc Industries Home">
          <img
            src="/image/logo.webp"
            alt="Celestarc Industries"
            className="brand-logo"
          />
        </a>

        <nav className="nav-desktop">
          <a href="#u-box" className="nav-link">{navbar.links.ubox}</a>
          <a href="#other-projects" className="nav-link">{navbar.links.projects}</a>
          <a href="#about" className="nav-link">{navbar.links.about}</a>
          <a href="#contact" className="nav-link">{navbar.links.contact}</a>
        </nav>

        <div className="nav-actions">
          <a
            href={footer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
          >
            <span>{navbar.githubButton}</span>
            <ArrowUpRight className="icon-sm" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn-mobile-toggle"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="icon-md" /> : <Menu className="icon-md" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav-mobile-dropdown">
          <a href="#u-box" onClick={() => setMobileMenuOpen(false)}>{navbar.links.ubox}</a>
          <a href="#other-projects" onClick={() => setMobileMenuOpen(false)}>{navbar.links.projects}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>{navbar.links.about}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{navbar.links.contact}</a>
          <a
            href={footer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-github-link"
          >
            {navbar.githubButton} &rarr;
          </a>
        </div>
      )}
    </header>
  );
};
