import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UBoxSection } from './components/UBoxSection';
import { OtherProjectsSection } from './components/OtherProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorPage } from './components/ErrorPage';
import { sanitizeUrlHash, NAVIGATE_EVENT } from './utils/navigation';
import './App.css';

export function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    // Sanitize any lone /# or # on initial load
    sanitizeUrlHash();

    const handleLocationChange = () => {
      sanitizeUrlHash();
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener(NAVIGATE_EVENT, handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener(NAVIGATE_EVENT, handleLocationChange);
    };
  }, []);

  // Unknown route -> render 404 ErrorPage
  if (currentPath !== '/' && currentPath !== '') {
    return (
      <ErrorBoundary>
        <ErrorPage
          code={404}
          title="Page Not Found"
          message="The requested routing endpoint does not exist in the studio registry."
          onReset={() => {
            window.history.pushState(null, '', '/');
            setCurrentPath('/');
          }}
        />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="app-container">
        {/* 1. Navbar */}
        <Navbar />

        {/* Main Flow: Maximum 6 Sections */}
        <main id="main-content">
          {/* 2. Hero */}
          <Hero />

          {/* 3. U-BOX (Primary Product) */}
          <UBoxSection />

          {/* 4. Other Projects */}
          <OtherProjectsSection />

          {/* 5. About */}
          <AboutSection />

          {/* 6. Contact */}
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
