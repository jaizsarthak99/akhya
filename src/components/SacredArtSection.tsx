import krishnaRadhaEyes from '@/assets/krishna-radha-eyes.jpg';

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
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500" />
          
          <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
            {/* Krishna & Radha eyes drawing */}
            <div className="rounded-xl overflow-hidden">
              <img 
                src={krishnaRadhaEyes} 
                alt="Krishna and Radha's divine eyes - hand drawn artwork"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-6 text-center space-y-2">
              <p className="font-cinzel text-base md:text-lg text-foreground">
                Eyes of Divine Love
              </p>
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
