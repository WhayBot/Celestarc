import { ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';

export const AboutSection = () => {
  const { about } = content;

  return (
    <section id="about" className="section-about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">{about.title}</h2>
          <p className="section-intro">{about.intro}</p>
        </div>

        {/* Meet The Team Section */}
        <div className="team-container">
          <h3 className="team-header">{about.teamTitle}</h3>

          <div className="team-grid">
            {about.team.map((member) => (
              <div key={member.role} className="team-member-col">
                <div className="team-photo-frame">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="team-photo"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="photo-label">{member.photoPlaceholder}</span>
                </div>

                <div className="team-member-info">
                  <h4 className="team-member-name">{member.name}</h4>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>

                  {member.links && (
                    <div className="team-member-links">
                      {member.links.portfolio && (
                        <a
                          href={member.links.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="founder-anchor"
                        >
                          <span>Portfolio</span>
                          <ArrowUpRight className="icon-sm" />
                        </a>
                      )}
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="founder-anchor"
                        >
                          <span>GitHub</span>
                          <ArrowUpRight className="icon-sm" />
                        </a>
                      )}
                      {member.links.x && (
                        <a
                          href={member.links.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="founder-anchor"
                        >
                          <span>X (Twitter)</span>
                          <ArrowUpRight className="icon-sm" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
