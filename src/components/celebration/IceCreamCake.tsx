export const IceCreamCake = () => {
  return (
    <svg
      width="100"
      height="120"
      viewBox="0 0 100 120"
      className="animate-scale-in"
      style={{ animationDelay: '0.2s' }}
    >
      {/* Plate */}
      <ellipse cx="50" cy="110" rx="45" ry="8" fill="hsl(var(--muted))" opacity="0.6" />
      
      {/* Cake base */}
      <rect x="20" y="70" width="60" height="40" rx="5" fill="hsl(var(--card))" />
      <rect x="20" y="70" width="60" height="5" fill="hsl(var(--accent))" opacity="0.3" />
      
      {/* Ice cream layers */}
      <ellipse cx="50" cy="60" rx="32" ry="15" fill="hsl(280, 65%, 75%)" opacity="0.8" />
      <ellipse cx="50" cy="48" rx="30" ry="14" fill="hsl(340, 70%, 80%)" opacity="0.8" />
      <ellipse cx="50" cy="36" rx="28" ry="13" fill="hsl(200, 60%, 80%)" opacity="0.8" />
      
      {/* Cherry on top */}
      <circle 
        cx="50" 
        cy="28" 
        r="5" 
        fill="hsl(0, 70%, 60%)"
        className="animate-glow"
      />
      <line x1="50" y1="28" x2="50" y2="20" stroke="hsl(var(--accent))" strokeWidth="1.5" />
      
      {/* Sparkles */}
      <g className="animate-shimmer" opacity="0.6">
        <circle cx="30" cy="50" r="2" fill="hsl(var(--accent))" />
        <circle cx="70" cy="55" r="2" fill="hsl(var(--accent))" />
        <circle cx="50" cy="65" r="2" fill="hsl(var(--accent))" />
      </g>
      
      {/* Cutting line animation */}
      <line 
        x1="50" 
        y1="35" 
        x2="50" 
        y2="100" 
        stroke="hsl(var(--primary))" 
        strokeWidth="1.5" 
        strokeDasharray="4 4"
        className="animate-pulse"
        opacity="0.5"
      />
    </svg>
  );
};
