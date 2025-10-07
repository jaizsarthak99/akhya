import lotusMandala from '@/assets/lotus-mandala.jpg';

export const SacredArtSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="font-cinzel text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Divine Eyes
            </span>
          </h2>
          <p className="font-inter text-muted-foreground text-sm md:text-base">
            A special creation to honor this sacred day
          </p>
        </div>

        {/* Art card with placeholder for user's drawing */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-500" />
          
          <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border/50">
            {/* Placeholder for user's Krishna & Radha eyes drawing */}
            <div className="aspect-square md:aspect-video bg-gradient-to-br from-muted/30 to-transparent rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src={lotusMandala} 
                alt="Sacred lotus mandala"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-6xl md:text-8xl mb-4 animate-glow">👁️</div>
                <p className="font-cinzel text-lg md:text-xl text-muted-foreground">
                  Your Krishna & Radha Eyes
                </p>
                <p className="font-inter text-sm text-muted-foreground/60 mt-2">
                  (Add your drawing here)
                </p>
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="font-inter text-sm md:text-base text-muted-foreground italic">
                "The eyes that see the divine in all things"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
