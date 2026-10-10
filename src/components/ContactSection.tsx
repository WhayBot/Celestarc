import { ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';

export const ContactSection = () => {
  const { contact, footer } = content;

  return (
    <section id="contact" className="section-contact">
      <div className="container">
        
        {/* Section Header (No Eyebrow Label) */}
        <div className="section-header">
          <h2 className="section-title">{contact.title}</h2>
          <p className="section-intro">{contact.intro}</p>
        </div>

        {/* 2 Plain Columns (No Boxes, No Borders) */}
        <div className="contact-plain-columns">
          
          {/* Column 1: Email */}
          <div className="contact-column">
            <h3 className="contact-col-heading">{contact.emailTitle}</h3>
            <p className="contact-col-text">{contact.emailText}</p>
            <div className="contact-email-action">
              <a
                href={`mailto:${footer.email}`}
                className="btn-primary"
              >
                {contact.emailButton}
              </a>
              <p className="email-plain-address">{footer.email}</p>
            </div>
          </div>

          {/* Column 2: GitHub */}
          <div className="contact-column">
            <h3 className="contact-col-heading">{contact.githubTitle}</h3>
            <p className="contact-col-text">{contact.githubText}</p>
            <div className="contact-github-action">
              <a
                href={footer.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>{contact.githubLinkText}</span>
                <ArrowUpRight className="icon-sm" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
