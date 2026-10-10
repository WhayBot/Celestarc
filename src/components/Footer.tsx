import { content } from '../content/content';

export const Footer = () => {
  const { footer } = content;

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-left">
          <img
            src="/image/logo.webp"
            alt="Celestarc Industries"
            className="footer-logo"
          />
          <span className="footer-copy">
            {footer.copyright}
          </span>
        </div>
        <div className="footer-links">
          <a
            href={footer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={`mailto:${footer.email}`}
            className="footer-link"
          >
            {footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
};
