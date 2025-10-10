export const MessageSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Quote card */}
        <div className="relative group mb-20">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl opacity-40 group-hover:opacity-60 blur-2xl transition-all duration-700" />
          
          <div className="relative bg-card/60 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-border/40 shadow-2xl transition-all duration-700">
            <div className="text-center space-y-6">
              {/* Opening quote */}
              <div className="text-primary/40 text-3xl md:text-4xl font-cinzel">"</div>
              
              {/* Krishna quote */}
              <blockquote className="font-inter text-base md:text-lg leading-relaxed text-foreground/80">
                Whenever dharma declines and the purpose of life is forgotten, 
                I manifest myself on earth. I am born in every age to protect the good, 
                to destroy evil, and to reestablish dharma.
              </blockquote>
              
              {/* Source */}
              <cite className="block font-cinzel text-primary/60 text-xs md:text-sm not-italic tracking-wider">
                — Bhagavad Gita 4:7-8
              </cite>
              
              {/* Closing quote */}
              <div className="text-primary/40 text-3xl md:text-4xl font-cinzel rotate-180">"</div>
            </div>
          </div>
        </div>

        {/* Personal message */}
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center animate-glow shadow-xl">
              <span className="text-3xl md:text-4xl">🪷</span>
            </div>
          </div>
          
          <h3 className="font-cinzel text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              A Special Blessing for You
            </span>
          </h3>
          
          <div className="space-y-5 font-inter text-sm md:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            <p>
              On this special day, may you be blessed with the divine love of Radha-Krishna, 
              the wisdom of the Bhagavad Gita, and the eternal peace that comes from spiritual devotion.
            </p>
            <p>
              May your path be illuminated with divine light, your heart filled with bhakti, 
              and your life blessed with purpose and joy.
            </p>
            <p className="text-primary font-medium pt-2">
              Jai Shri Krishna! 🙏
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-4 pt-10">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-float" style={{ animationDelay: '0s' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/50 animate-float" style={{ animationDelay: '0.3s' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-float" style={{ animationDelay: '0.6s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
