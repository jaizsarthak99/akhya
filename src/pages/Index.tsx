import { FloatingParticles } from '@/components/FloatingParticles';
import { HeroSection } from '@/components/HeroSection';
import { SacredArtSection } from '@/components/SacredArtSection';
import { MessageSection } from '@/components/MessageSection';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden font-inter">
      {/* Floating particles background */}
      <FloatingParticles />

      {/* Hero section with birthday greeting */}
      <HeroSection />

      {/* Sacred art section - for the Krishna & Radha eyes drawing */}
      <SacredArtSection />

      {/* Message section with quotes and blessings */}
      <MessageSection />

      {/* Footer */}
      <footer className="relative py-8 text-center border-t border-border/30">
        <p className="font-inter text-sm text-muted-foreground">
          Made with love and devotion ✨
        </p>
      </footer>
    </main>
  );
};

export default Index;
