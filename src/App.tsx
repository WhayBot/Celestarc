import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UBoxSection } from './components/UBoxSection';
import { OtherProjectsSection } from './components/OtherProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import './App.css';

export function App() {
  return (
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
  );
}

export default App;
