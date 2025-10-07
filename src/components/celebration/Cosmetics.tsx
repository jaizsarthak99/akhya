export const Cosmetics = () => {
  return (
    <svg
      width="120"
      height="80"
      viewBox="0 0 120 80"
      className="animate-[float_3s_ease-in-out_infinite]"
      style={{ animationDelay: '1.5s' }}
    >
      {/* Lipstick */}
      <g className="animate-[item-float_3s_ease-in-out_infinite]">
        <rect x="10" y="25" width="12" height="30" rx="2" fill="hsl(340, 70%, 60%)" />
        <rect x="10" y="20" width="12" height="8" rx="6" fill="hsl(340, 80%, 50%)" />
        <circle cx="16" cy="18" r="2" fill="hsl(var(--accent))" opacity="0.7" />
      </g>
      
      {/* Perfume bottle */}
      <g className="animate-[item-float_3s_ease-in-out_infinite]" style={{ animationDelay: '0.3s' }}>
        <rect x="45" y="30" width="20" height="25" rx="3" fill="hsl(280, 50%, 70%)" opacity="0.8" />
        <rect x="50" y="25" width="10" height="6" fill="hsl(280, 60%, 60%)" />
        <rect x="53" y="20" width="4" height="5" fill="hsl(280, 60%, 60%)" />
        <circle cx="55" cy="42" r="3" fill="hsl(var(--accent))" opacity="0.6" />
      </g>
      
      {/* Compact mirror */}
      <g className="animate-[item-float_3s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }}>
        <circle cx="95" cy="35" r="15" fill="hsl(45, 80%, 70%)" opacity="0.9" />
        <circle cx="95" cy="35" r="12" fill="hsl(var(--background))" opacity="0.3" />
        <circle cx="95" cy="35" r="3" fill="hsl(var(--accent))" className="animate-shimmer" />
      </g>
      
      {/* Sparkles */}
      <g className="animate-shimmer" opacity="0.7">
        <circle cx="8" cy="15" r="1.5" fill="hsl(var(--accent))" />
        <circle cx="112" cy="25" r="1.5" fill="hsl(var(--accent))" />
        <circle cx="60" cy="10" r="1.5" fill="hsl(var(--accent))" />
        <circle cx="30" cy="5" r="1.5" fill="hsl(var(--accent))" />
      </g>
    </svg>
  );
};
