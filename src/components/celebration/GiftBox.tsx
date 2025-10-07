import { Cosmetics } from './Cosmetics';

export const GiftBox = () => {
  return (
    <div className="relative">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="animate-scale-in"
        style={{ animationDelay: '0.4s' }}
      >
        {/* Gift box body */}
        <rect 
          x="20" 
          y="45" 
          width="60" 
          height="50" 
          rx="3" 
          fill="hsl(var(--accent))"
          opacity="0.9"
        />
        
        {/* Gift box lid */}
        <rect 
          x="18" 
          y="35" 
          width="64" 
          height="12" 
          rx="2" 
          fill="hsl(var(--secondary))"
          className="animate-[lift_3s_ease-in-out_infinite]"
        />
        
        {/* Ribbon vertical */}
        <rect x="47" y="35" width="6" height="60" fill="hsl(var(--primary))" opacity="0.8" />
        
        {/* Ribbon horizontal */}
        <rect x="18" y="58" width="64" height="6" fill="hsl(var(--primary))" opacity="0.8" />
        
        {/* Bow */}
        <g className="animate-glow">
          <ellipse cx="40" cy="30" rx="12" ry="8" fill="hsl(var(--primary))" />
          <ellipse cx="60" cy="30" rx="12" ry="8" fill="hsl(var(--primary))" />
          <circle cx="50" cy="30" r="5" fill="hsl(var(--primary))" />
        </g>
        
        {/* Sparkles around gift */}
        <g className="animate-shimmer" opacity="0.7">
          <circle cx="15" cy="50" r="2" fill="hsl(var(--accent))" />
          <circle cx="85" cy="60" r="2" fill="hsl(var(--accent))" />
          <circle cx="50" cy="25" r="2" fill="hsl(var(--accent))" />
        </g>
      </svg>
      
      {/* Cosmetics floating above */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <Cosmetics />
      </div>
    </div>
  );
};
