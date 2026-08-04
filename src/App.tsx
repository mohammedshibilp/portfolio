import React, { useState } from 'react';
import { SoundProvider } from './context/SoundContext';
import { CustomCursor } from './components/CustomCursor';
import { MouseGlow } from './components/ui/MouseGlow';
import { FloatingBlobs } from './components/ui/FloatingBlobs';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { CicdPipelineVisualizer } from './components/CicdPipelineVisualizer';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { ResumeModal } from './components/ResumeModal';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import toast from 'react-hot-toast';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isGoogleAuthModalOpen, setIsGoogleAuthModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthSuccess = (email: string) => {
    setUserEmail(email);
    toast.success(`Welcome! Authenticated via Google as ${email}`);
  };

  return (
    <SoundProvider>
      {/* Interactive Custom Glowing Neon Cursor */}
      <CustomCursor />

      {/* Interactive Dribbble Mouse Radial Glow Spotlight */}
      <MouseGlow />

      {/* Dribbble Aurora Floating Gradient Blobs */}
      <FloatingBlobs />

      {/* Cyberpunk System Initialization Bootloader Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Main Application */}
      <div className="relative min-h-screen bg-[#050816] text-[#F8FAFC] selection:bg-accent-blue selection:text-bg-primary overflow-x-hidden">
        {/* Interactive 3D Three.js DevOps Node Background & Grid */}
        <BackgroundCanvas />

        {/* Sticky Glass Navbar */}
        <Navbar
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenGoogleAuthModal={() => setIsGoogleAuthModalOpen(true)}
          userEmail={userEmail}
        />

        {/* Page Content Sections */}
        <main className="relative z-10 space-y-8">
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <StatsSection />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CicdPipelineVisualizer />
          </div>

          <AboutSection />
          <ExperienceTimeline />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <GithubSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <CommandPaletteModal
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          onNavigate={handleNavigate}
        />

        <ResumeModal
          isOpen={isResumeModalOpen}
          onClose={() => setIsResumeModalOpen(false)}
        />

        <GoogleAuthModal
          isOpen={isGoogleAuthModalOpen}
          onClose={() => setIsGoogleAuthModalOpen(false)}
          onSuccess={handleAuthSuccess}
        />
      </div>
    </SoundProvider>
  );
};

export default App;
