import { GirlCharacter } from './GirlCharacter';
import { BoyCharacter } from './BoyCharacter';
import { IceCreamCake } from './IceCreamCake';
import { GiftBox } from './GiftBox';

export const CelebrationScene = () => {
  return (
    <div className="relative w-full max-w-4xl aspect-video">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl blur-3xl" />
      
      {/* Main scene container */}
      <div className="relative w-full h-full flex items-end justify-center px-4 md:px-8 pb-8">
        {/* Girl with cake on the left */}
        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <IceCreamCake />
          <GirlCharacter />
        </div>

        {/* Boy with gift on the right */}
        <div className="flex flex-col items-center gap-4 ml-8 md:ml-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <GiftBox />
          <BoyCharacter />
        </div>
      </div>
    </div>
  );
};
