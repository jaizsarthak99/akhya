import { useState, useEffect } from 'react';

interface LetterContentProps {
  visible: boolean;
}

export const LetterContent = ({ visible }: LetterContentProps) => {
  const [revealedLines, setRevealedLines] = useState(0);

  const lines = [
    { type: 'greeting', text: 'Happy Birthday, Your Honour.' },
    { type: 'body', text: 'Before you roll your eyes yes, this one\'s the real letter. The handwritten one was just me being my usual dramatic self, trying to tease you. Consider that a trailer this is the full movie.' },
    { type: 'body', text: 'You know, I honestly don\'t remember when exactly we started talking or what we first said to each other. It all began so casually just random reels, a "hi," a "hello," and a guy who didn\'t know how to start a normal conversation. But somehow, it worked. Somewhere between your replies and my weird timing, it turned into real conversations that actually mattered.' },
    { type: 'body', text: 'And I don\'t say this lightly I really enjoy your presence. You\'ve got this calm, grounded energy that somehow balances out my chaos. You\'re one of the few people I can talk to without putting on a mask and I think that\'s rare. You\'ve seen me be serious, sarcastic, maybe even a little too dramatic, and yet you never made me feel out of place for it.' },
    { type: 'body', text: 'Also, let me just say this if one fine day you decide to deactivate your Instagram and vanish, I\'m telling you now, I\'ll be genuinely sad. (And yes, I\'ll still pretend to be chill about it, but deep down I\'ll be sulking like a rejected cat.) So please, don\'t pull a "case dismissed" on me, okay?' },
    { type: 'body', text: 'You\'ve become someone important to me not in some poetic or over-the-top way, but in a simple, genuine, "I\'d really miss talking to you" kind of way. And that\'s probably the best compliment I can give anyone.' },
    { type: 'body', text: 'So, here\'s to you, Akhya — may your year ahead be filled with laughter, peace, and maybe fewer reasons to shout "Objection!" in real life.' },
    { type: 'body', text: 'Happy Birthday, Akhya. ⚖️' },
    { type: 'closing', text: 'Court adjourned (for now).' },
    { type: 'signature', text: '— Yours,\n(The same guy who clearly enjoys overthinking his messages)' },
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
