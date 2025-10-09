export const PeacockFeatherAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute top-1/4 right-1/4 w-48 md:w-64 lg:w-80 h-auto opacity-20 animate-sway"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main stem */}
        <path
          d="M100 380 Q98 200 100 20"
          stroke="hsl(200, 70%, 50%)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="opacity-60"
        />

        {/* Feather barbs - left side */}
        {[...Array(20)].map((_, i) => {
          const y = 50 + i * 15;
          const length = Math.min(30 + i * 2, 60);
          const curve = 10 + i;
          return (
            <path
              key={`left-${i}`}
              d={`M100 ${y} Q${80 - length / 2} ${y + curve} ${100 - length} ${y + curve * 1.5}`}
              stroke="hsl(200, 70%, 50%)"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              className="opacity-40"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          );
        })}

        {/* Feather barbs - right side */}
        {[...Array(20)].map((_, i) => {
          const y = 50 + i * 15;
          const length = Math.min(30 + i * 2, 60);
          const curve = 10 + i;
          return (
            <path
              key={`right-${i}`}
              d={`M100 ${y} Q${120 + length / 2} ${y + curve} ${100 + length} ${y + curve * 1.5}`}
              stroke="hsl(210, 80%, 56%)"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              className="opacity-40"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          );
        })}

        {/* Eye of the feather (peacock's distinctive feature) */}
        <defs>
          <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(210, 90%, 60%)" stopOpacity="0.8" />
            <stop offset="40%" stopColor="hsl(200, 70%, 50%)" stopOpacity="0.6" />
            <stop offset="70%" stopColor="hsl(210, 80%, 56%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(200, 70%, 50%)" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Outer eye ring */}
        <ellipse
          cx="100"
          cy="35"
          rx="35"
          ry="38"
          fill="url(#eyeGradient)"
          className="opacity-30"
        />

        {/* Middle eye ring */}
        <ellipse
          cx="100"
          cy="35"
          rx="22"
          ry="25"
          fill="hsl(210, 80%, 56%)"
          className="opacity-40"
        />

        {/* Inner eye center */}
        <ellipse
          cx="100"
          cy="35"
          rx="10"
          ry="12"
          fill="hsl(210, 90%, 60%)"
          className="opacity-50"
        />

        {/* Eye highlight */}
        <ellipse
          cx="105"
          cy="30"
          rx="4"
          ry="5"
          fill="white"
          className="opacity-60"
        />
      </svg>

      {/* Second feather - mirrored position for balance */}
      <svg
        className="absolute bottom-1/4 left-1/4 w-40 md:w-56 lg:w-72 h-auto opacity-15 animate-sway-delayed"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'scaleX(-1) rotate(15deg)' }}
      >
        {/* Main stem */}
        <path
          d="M100 380 Q98 200 100 20"
          stroke="hsl(200, 70%, 50%)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="opacity-60"
        />

        {/* Feather barbs - left side */}
        {[...Array(20)].map((_, i) => {
          const y = 50 + i * 15;
          const length = Math.min(30 + i * 2, 60);
          const curve = 10 + i;
          return (
            <path
              key={`left2-${i}`}
              d={`M100 ${y} Q${80 - length / 2} ${y + curve} ${100 - length} ${y + curve * 1.5}`}
              stroke="hsl(200, 70%, 50%)"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              className="opacity-40"
            />
          );
        })}

        {/* Feather barbs - right side */}
        {[...Array(20)].map((_, i) => {
          const y = 50 + i * 15;
          const length = Math.min(30 + i * 2, 60);
          const curve = 10 + i;
          return (
            <path
              key={`right2-${i}`}
              d={`M100 ${y} Q${120 + length / 2} ${y + curve} ${100 + length} ${y + curve * 1.5}`}
              stroke="hsl(210, 80%, 56%)"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              className="opacity-40"
            />
          );
        })}

        {/* Eye of the feather */}
        <ellipse
          cx="100"
          cy="35"
          rx="35"
          ry="38"
          fill="url(#eyeGradient)"
          className="opacity-30"
        />
        <ellipse
          cx="100"
          cy="35"
          rx="22"
          ry="25"
          fill="hsl(210, 80%, 56%)"
          className="opacity-40"
        />
        <ellipse
          cx="100"
          cy="35"
          rx="10"
          ry="12"
          fill="hsl(210, 90%, 60%)"
          className="opacity-50"
        />
      </svg>
    </div>
  );
};
