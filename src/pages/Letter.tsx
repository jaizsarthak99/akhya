import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingParticles } from '@/components/FloatingParticles';
import { EnvelopeAnimation } from '@/components/letter/EnvelopeAnimation';
import { LetterPaper } from '@/components/letter/LetterPaper';
import { LetterContent } from '@/components/letter/LetterContent';

const Letter = () => {
  const navigate = useNavigate();
  const [showLetter, setShowLetter] = useState(false);

  return (
    <main className="relative min-h-screen bg-background overflow-hidden font-inter">
      <FloatingParticles />

      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="icon"
          className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/50"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>

      {/* Letter Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <h1 className="font-cinzel text-2xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            A Special Message
          </span>
        </h1>

        {/* Envelope Animation */}
        {!showLetter && (
          <EnvelopeAnimation onComplete={() => setShowLetter(true)} />
        )}

        {/* Letter Paper with Content */}
        {showLetter && (
          <LetterPaper visible={showLetter}>
            <LetterContent visible={showLetter} />
          </LetterPaper>
        )}
      </div>
    </main>
  );
};

export default Letter;
