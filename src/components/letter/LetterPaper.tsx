import { ReactNode } from 'react';

interface LetterPaperProps {
  children: ReactNode;
  visible: boolean;
}

export const LetterPaper = ({ children, visible }: LetterPaperProps) => {
  return (
    <div
      className={`relative w-full max-w-2xl mx-auto transition-all duration-1000 ${
        visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
      }`}
    >
      {/* Paper background with texture */}
      <div className="relative bg-card backdrop-blur-sm rounded-2xl shadow-2xl border border-border p-8 md:p-12">
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg" />

        {/* Subtle paper texture overlay */}
        <div className="absolute inset-0 opacity-5 rounded-2xl" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4" /%3E%3C/svg%3E")' }} />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 animate-glow" />
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};
