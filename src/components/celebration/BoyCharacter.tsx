export const BoyCharacter = () => {
  return (
    <svg
      width="120"
      height="160"
      viewBox="0 0 120 160"
      className="animate-float"
      style={{ animationDelay: '0.8s' }}
    >
      {/* Head */}
      <circle cx="60" cy="30" r="20" fill="hsl(var(--muted))" />
      
      {/* Hair */}
      <path
        d="M 40 20 Q 45 10, 60 12 Q 75 10, 80 20 L 75 28 Q 60 25, 45 28 Z"
        fill="hsl(var(--foreground))"
        opacity="0.9"
      />
      
      {/* Eyes */}
      <circle cx="53" cy="28" r="2" fill="hsl(var(--foreground))" />
      <circle cx="67" cy="28" r="2" fill="hsl(var(--foreground))" />
      
      {/* Smile */}
      <path
        d="M 52 36 Q 60 39, 68 36"
        stroke="hsl(var(--foreground))"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Body - shirt */}
      <rect x="40" y="50" width="40" height="45" rx="5" fill="hsl(var(--primary))" opacity="0.8" />
      
      {/* Pants */}
      <rect x="40" y="95" width="18" height="35" fill="hsl(var(--foreground))" opacity="0.7" />
      <rect x="62" y="95" width="18" height="35" fill="hsl(var(--foreground))" opacity="0.7" />
      
      {/* Arms */}
      <line x1="38" y1="60" x2="20" y2="75" stroke="hsl(var(--muted))" strokeWidth="6" strokeLinecap="round" />
      <line 
        x1="82" 
        y1="60" 
        x2="100" 
        y2="70" 
        stroke="hsl(var(--muted))" 
        strokeWidth="6" 
        strokeLinecap="round"
        className="animate-[wave_2s_ease-in-out_infinite]"
      />
      
      {/* Hands */}
      <ellipse cx="18" cy="78" rx="5" ry="4" fill="hsl(var(--muted))" />
      <ellipse cx="102" cy="73" rx="5" ry="4" fill="hsl(var(--muted))" />
    </svg>
  );
};
