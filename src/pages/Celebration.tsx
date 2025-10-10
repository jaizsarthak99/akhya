import { FloatingParticles } from '@/components/FloatingParticles';
import { CelebrationScene } from '@/components/celebration/CelebrationScene';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircleHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Celebration = () => {
  const navigate = useNavigate();

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

      {/* Celebration Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Header */}
        <h1 className="font-cinzel text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            A Special Celebration
          </span>
        </h1>

        {/* Animation Scene */}
        <CelebrationScene />

        {/* Message */}
        <p className="font-inter text-center text-muted-foreground mt-12 max-w-md animate-fade-in" style={{ animationDelay: '1s' }}>
          May your day be filled with sweetness and beauty ✨
        </p>

        {/* Gita Chat Button */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button
            onClick={() => navigate('/gita-chat')}
            size="lg"
            className="bg-gradient-to-r from-secondary to-primary text-primary-foreground border-0 hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircleHeart className="mr-2 h-5 w-5" />
            Seek Gita Wisdom
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Celebration;
