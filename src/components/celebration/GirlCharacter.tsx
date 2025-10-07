export const GirlCharacter = () => {
  return (
    <svg
      width="120"
      height="160"
      viewBox="0 0 120 160"
      className="animate-float"
      style={{ animationDelay: '0.5s' }}
    >
      {/* Head */}
      <circle cx="60" cy="30" r="20" fill="hsl(var(--muted))" />
      
      {/* Hair */}
      <path
        d="M 40 25 Q 35 15, 45 10 Q 60 5, 75 10 Q 85 15, 80 25 L 75 35 Q 70 30, 60 30 Q 50 30, 45 35 Z"
        fill="hsl(var(--primary))"
        opacity="0.8"
      />
      
      {/* Eyes */}
      <circle cx="53" cy="28" r="2" fill="hsl(var(--foreground))" />
      <circle cx="67" cy="28" r="2" fill="hsl(var(--foreground))" />
      
      {/* Smile */}
      <path
        d="M 52 35 Q 60 38, 68 35"
        stroke="hsl(var(--foreground))"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Body - dress */}
      <path
        d="M 60 50 L 45 75 L 40 120 L 50 120 L 55 90 L 60 120 L 70 120 L 65 90 L 70 120 L 80 120 L 75 75 Z"
        fill="hsl(var(--secondary))"
        opacity="0.9"
      />
      
      {/* Arms */}
      <line x1="45" y1="65" x2="30" y2="85" stroke="hsl(var(--muted))" strokeWidth="6" strokeLinecap="round" />
      <line x1="75" y1="65" x2="90" y2="85" stroke="hsl(var(--muted))" strokeWidth="6" strokeLinecap="round" />
      
      {/* Hand holding knife */}
      <ellipse cx="28" cy="88" rx="5" ry="4" fill="hsl(var(--muted))" />
      <line 
        x1="25" 
        y1="88" 
        x2="15" 
        y2="78" 
        stroke="hsl(var(--accent))" 
        strokeWidth="2"
        className="animate-[slice_2s_ease-in-out_infinite]"
      />
    </svg>
  );
};
