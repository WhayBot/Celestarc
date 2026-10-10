import { ArrowUpRight } from 'lucide-react';
import { content } from '../content/content';

export const UBoxSection = () => {
  const { ubox } = content;

  return (
    <section id="u-box" className="section-ubox">
      <div className="container">
        
        {/* Section Header (No Eyebrow Label) */}
        <div className="section-header">
          <h2 className="section-title">{ubox.title}</h2>
          <p className="section-intro">{ubox.intro}</p>
        </div>

        {/* Problem & Solution: Plain 2-Column Text (No Boxes, No Borders) */}
        <div className="ubox-plain-columns">
          <div className="plain-column">
            <h3 className="column-heading">{ubox.problemTitle}</h3>
            <p className="column-body">{ubox.problemText}</p>
          </div>
          <div className="plain-column">
            <h3 className="column-heading">{ubox.solutionTitle}</h3>
            <p className="column-body">{ubox.solutionText}</p>
          </div>
        </div>

        {/* Inline Signal Flow Image Frame */}
        <div className="ubox-diagram-block">
          <h3 className="diagram-heading">Signal &amp; Power Routing</h3>
          <div className="image-placeholder-frame diagram-placeholder-frame">
            <img
              src={ubox.diagramImage}
              alt={ubox.diagramAlt}
              className="diagram-image"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <span className="image-placeholder-label">[FOTO / DIAGRAM ALUR SISTEM U-BOX]</span>
          </div>
        </div>

        {/* How It Works: Vertical List with 48px Accent Numbers (No Cards) */}
        <div className="ubox-workflow-list">
          <h3 className="workflow-heading">{ubox.stepsHeader}</h3>
          <div className="workflow-items">
            {ubox.steps.map((item) => (
              <div key={item.step} className="workflow-row">
                <div className="workflow-number">{item.step}</div>
                <div className="workflow-body">
                  <h4 className="workflow-title">{item.title}</h4>
                  <p className="workflow-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Specifications Table (Clean #F5F5F5 Block, No Zebra Striping) */}
        <div className="ubox-specs-section">
          <div className="specs-top-row">
            <h3 className="specs-heading">{ubox.specsTitle}</h3>
            <a
              href="https://github.com/WhayBot/U-BOX"
              target="_blank"
              rel="noopener noreferrer"
              className="specs-repo-link"
            >
              <span>{ubox.specsLinkText}</span>
              <ArrowUpRight className="icon-sm" />
            </a>
          </div>

          <div className="table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th scope="col" className="th-param">Parameter</th>
                  <th scope="col" className="th-val">Specification</th>
                </tr>
              </thead>
              <tbody>
                {ubox.specs.map((item, index) => (
                  <tr key={index}>
                    <td className="td-param">{item.parameter}</td>
                    <td className="td-val">
                      {item.value.startsWith('http') ? (
                        <code className="spec-code">{item.value}</code>
                      ) : (
                        item.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="specs-footer-note">
            <strong>Note:</strong> {ubox.notes}
          </p>
        </div>

      </div>
    </section>
  );
};
