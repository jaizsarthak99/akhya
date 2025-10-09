import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PeacockFeatherAnimation } from '@/components/PeacockFeatherAnimation';
import peacockPattern from '@/assets/peacock-pattern.jpg';

export const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-divine" />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 gradient-glow" />
      
      {/* Peacock feather animation */}
      <PeacockFeatherAnimation />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-8 max-w-3xl mx-auto">
          {/* Birthday heading */}
          <h2 className="text-foreground/80 font-inter text-lg md:text-xl tracking-widest uppercase animate-fade-in">
            Happy Birthday
          </h2>
          
          {/* Main name - Akhya */}
          <h1 className="font-cinzel font-bold text-6xl md:text-8xl lg:text-9xl text-glow animate-scale-in">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-shimmer">
              Akhya
            </span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="font-inter text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            May your day be filled with divine blessings, love, and the eternal grace of Lord Krishna
          </p>

          {/* Om symbol or decorative element */}
          <div className="text-4xl md:text-5xl animate-float" style={{ animationDelay: '0.6s' }}>
            ✨
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8">
            <Button
              onClick={() => navigate('/celebration')}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Gift className="mr-2 h-5 w-5" />
              Open Your Gift
            </Button>
            
            <Button
              onClick={() => navigate('/letter')}
              size="lg"
              className="bg-gradient-to-r from-secondary to-primary text-primary-foreground border-0 hover:brightness-110 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              A Letter For You
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
