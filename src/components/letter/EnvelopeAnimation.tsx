import { useState, useEffect } from 'react';

interface EnvelopeAnimationProps {
  onComplete: () => void;
}

export const EnvelopeAnimation = ({ onComplete }: EnvelopeAnimationProps) => {
  const [stage, setStage] = useState<'initial' | 'opening' | 'complete'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('opening'), 2000);
    const timer2 = setTimeout(() => {
      setStage('complete');
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`relative w-full max-w-md mx-auto transition-all duration-1000 ${stage === 'complete' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
      {/* Envelope body */}
      <div className="relative w-full aspect-[3/2]">
        {/* Envelope back */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary rounded-lg shadow-2xl" />
        
        {/* Decorative seal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent/30 backdrop-blur-sm border-2 border-accent/50 flex items-center justify-center animate-glow">
          <span className="text-2xl">✨</span>
        </div>

        {/* Envelope flap */}
        <div 
          className={`absolute top-0 left-0 w-full h-1/2 origin-bottom transition-transform duration-2000 ${
            stage === 'opening' || stage === 'complete' ? 'rotate-x-180' : 'rotate-x-0'
          }`}
          style={{
            background: 'linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--primary)))',
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            transformStyle: 'preserve-3d',
            transform: stage === 'opening' || stage === 'complete' ? 'rotateX(-180deg)' : 'rotateX(0deg)',
          }}
        />

        {/* Letter paper peeking out */}
        <div 
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[120%] bg-background/95 rounded-t-lg shadow-xl transition-all duration-2000 ${
            stage === 'opening' ? 'translate-y-0' : 'translate-y-full'
          } ${stage === 'complete' ? '-translate-y-4 scale-110' : ''}`}
        >
          <div className="absolute top-4 left-4 right-4 space-y-2 opacity-40">
            <div className="h-2 bg-primary/20 rounded w-3/4" />
            <div className="h-2 bg-primary/20 rounded w-full" />
            <div className="h-2 bg-primary/20 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
};
