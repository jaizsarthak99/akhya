import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import peacockPattern from '@/assets/peacock-pattern.jpg';

export const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with peacock pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${peacockPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 gradient-divine" />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 gradient-glow" />

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-[1200ms] ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Birthday heading */}
          <h2 className="text-foreground/70 font-inter text-sm md:text-base tracking-[0.3em] uppercase animate-rise" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Happy Birthday
          </h2>
          
          {/* Main name - Akhya */}
          <h1 className="font-cinzel font-bold text-7xl md:text-9xl lg:text-[10rem] text-glow animate-rise" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-shimmer">
              Akhya
            </span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-6 animate-rise" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-glow" />
            <div className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="font-inter text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed animate-rise" style={{ animationDelay: '0.8s', opacity: 0 }}>
            May your day be filled with divine blessings, love, and the eternal grace of Lord Krishna
          </p>

          {/* Om symbol or decorative element */}
          <div className="text-3xl md:text-4xl animate-float animate-rise pt-4" style={{ animationDelay: '1s', opacity: 0 }}>
            ✨
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center pt-6 animate-rise" style={{ animationDelay: '1.2s', opacity: 0 }}>
            <Button
              onClick={() => navigate('/celebration')}
              size="lg"
              className="group bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 hover:brightness-110 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 px-8"
            >
              <Gift className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-500" />
              Open Your Gift
            </Button>
            
            <Button
              onClick={() => navigate('/letter')}
              size="lg"
              className="group bg-gradient-to-r from-secondary to-primary text-primary-foreground border-0 hover:brightness-110 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105 px-8"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:-rotate-12 transition-transform duration-500" />
              A Letter For You
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
