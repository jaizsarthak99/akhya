import krishnaRadhaEyes from '@/assets/krishna-radha-eyes.jpg';

export const SacredArtSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-3">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Divine Eyes
            </span>
          </h2>
          <p className="font-inter text-muted-foreground/60 text-xs md:text-sm tracking-wide">
            A special creation to honor this sacred day
          </p>
        </div>

        {/* Art card with placeholder for user's drawing */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl opacity-50 group-hover:opacity-70 blur-xl transition-all duration-700" />
          
          <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-border/50 shadow-2xl transition-all duration-700 group-hover:shadow-primary/10">
            {/* Krishna & Radha eyes drawing */}
            <div className="rounded-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src={krishnaRadhaEyes} 
                alt="Krishna and Radha's divine eyes - hand drawn artwork"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-8 text-center space-y-1">
              <p className="font-cinzel text-base md:text-lg text-foreground/90">
                Eyes of Divine Love
              </p>
              <p className="font-inter text-xs md:text-sm text-muted-foreground/60 italic">
                "The eyes that see the divine in all things"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
