import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';
import { resolveImageUrl } from '../utils/image';
import { scrollToSection } from '../utils/navigation';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navbar, footer } = content;

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Logo only: links to root and smoothly scrolls to top without /# in URL */}
        <a
          href="/"
          className="brand-link"
          aria-label="Celestarc Industries Home"
          onClick={(e) => scrollToSection('top', e)}
        >
          <img
            src={resolveImageUrl('/image/logo.png')}
            alt="Celestarc Industries"
            className="brand-logo"
          />
        </a>

        <nav className="nav-desktop">
          <a
            href="#u-box"
            className="nav-link"
            onClick={(e) => scrollToSection('u-box', e)}
          >
            {navbar.links.ubox}
          </a>
          <a
            href="#other-projects"
            className="nav-link"
            onClick={(e) => scrollToSection('other-projects', e)}
          >
            {navbar.links.projects}
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => scrollToSection('about', e)}
          >
            {navbar.links.about}
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => scrollToSection('contact', e)}
          >
            {navbar.links.contact}
          </a>
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
          <a
            href="#u-box"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('u-box', e);
            }}
          >
            {navbar.links.ubox}
          </a>
          <a
            href="#other-projects"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('other-projects', e);
            }}
          >
            {navbar.links.projects}
          </a>
          <a
            href="#about"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('about', e);
            }}
          >
            {navbar.links.about}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              setMobileMenuOpen(false);
              scrollToSection('contact', e);
            }}
          >
            {navbar.links.contact}
          </a>
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
