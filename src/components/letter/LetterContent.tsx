import { useState, useEffect } from 'react';

interface LetterContentProps {
  visible: boolean;
}

export const LetterContent = ({ visible }: LetterContentProps) => {
  const [revealedLines, setRevealedLines] = useState(0);

  const lines = [
    { type: 'greeting', text: 'Dearest Akhya,' },
    { type: 'body', text: 'On this special day, I wanted to take a moment to celebrate the wonderful person you are. Your presence brings light and joy to everyone around you.' },
    { type: 'body', text: 'Like the eternal love of Radha and Krishna, may your life be filled with divine blessings, endless happiness, and beautiful moments that last forever.' },
    { type: 'body', text: 'As you step into another year of your journey, may you continue to shine brightly and inspire others with your kindness and grace.' },
    { type: 'body', text: 'Wishing you all the love, laughter, and blessings that your heart can hold.' },
    { type: 'closing', text: 'With all my love,' },
    { type: 'signature', text: '✨' },
  ];

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      if (revealedLines < lines.length) {
        setRevealedLines(prev => prev + 1);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [visible, revealedLines, lines.length]);

  return (
    <div className="space-y-6">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ${
            index < revealedLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {line.type === 'greeting' && (
            <p className="font-cinzel text-2xl md:text-3xl font-bold text-primary mb-8">
              {line.text}
            </p>
          )}
          
          {line.type === 'body' && (
            <p className="font-inter text-base md:text-lg text-foreground/80 leading-relaxed">
              {line.text}
            </p>
          )}
          
          {line.type === 'closing' && (
            <p className="font-inter text-lg text-foreground/70 mt-8 italic">
              {line.text}
            </p>
          )}
          
          {line.type === 'signature' && (
            <div className="text-4xl text-center mt-6 animate-float">
              {line.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
