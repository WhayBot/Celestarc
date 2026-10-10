import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { scrollToSection } from '../utils/navigation';

export interface ErrorPageProps {
  code?: number | string;
  title?: string;
  message?: string;
  details?: string;
  onReset?: () => void;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  code = 404,
  title = 'Page Not Found',
  message,
  onReset,
}) => {
  const handleReturnHome = (e: React.MouseEvent) => {
    if (onReset) {
      onReset();
    }
    scrollToSection('top', e);
  };

  return (
    <div className="app-container error-page-wrapper">
      <Navbar />

      <main id="main-content" className="error-main">
        <div className="container error-center-container">
          <div className="error-minimal-block">
            <h1 className="error-big-code">{code}</h1>
            <p className="error-clean-title">{title}</p>
            {message && <p className="error-clean-desc">{message}</p>}

            <div className="error-clean-actions">
              <a
                href="/"
                onClick={handleReturnHome}
                className="btn-primary"
              >
                <ArrowLeft className="icon-sm" />
                <span>Return to Home</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
