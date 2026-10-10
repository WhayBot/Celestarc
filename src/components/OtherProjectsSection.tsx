import { ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';

export const OtherProjectsSection = () => {
  const { otherProjects } = content;

  return (
    <section id="other-projects" className="section-projects">
      <div className="container">
        
        {/* Section Header (No Eyebrow Label) */}
        <div className="section-header">
          <h2 className="section-title">{otherProjects.title}</h2>
          <p className="section-intro">{otherProjects.intro}</p>
        </div>

        {/* 4-Column Table: Name | Description | Status | Link */}
        <div className="table-wrapper">
          <table className="projects-table">
            <thead>
              <tr>
                <th scope="col" className="th-proj-name">Name</th>
                <th scope="col" className="th-proj-desc">Description</th>
                <th scope="col" className="th-proj-status">Status</th>
                <th scope="col" className="th-proj-link">Link</th>
              </tr>
            </thead>
            <tbody>
              {otherProjects.projects.map((project) => (
                <tr key={project.name}>
                  <td className="td-proj-name">{project.name}</td>
                  <td className="td-proj-desc">{project.description}</td>
                  <td className="td-proj-status">{project.status}</td>
                  <td className="td-proj-link">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-anchor"
                      >
                        <span>Source code</span>
                        <ArrowUpRight className="icon-sm" />
                      </a>
                    ) : (
                      <span className="no-link">&mdash;</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
