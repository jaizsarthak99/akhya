export const MessageSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Quote card */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition duration-500" />
          
          <div className="relative bg-card backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <div className="text-center space-y-6">
              {/* Opening quote */}
              <div className="text-accent text-4xl md:text-5xl font-cinzel">"</div>
              
              {/* Krishna quote */}
              <blockquote className="font-inter text-lg md:text-xl leading-relaxed text-foreground/90">
                Whenever dharma declines and the purpose of life is forgotten, 
                I manifest myself on earth. I am born in every age to protect the good, 
                to destroy evil, and to reestablish dharma.
              </blockquote>
              
              {/* Source */}
              <cite className="block font-cinzel text-accent text-sm md:text-base not-italic">
                — Bhagavad Gita 4:7-8
              </cite>
              
              {/* Closing quote */}
              <div className="text-accent text-4xl md:text-5xl font-cinzel rotate-180">"</div>
            </div>
          </div>
        </div>

        {/* Personal message */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow">
              <span className="text-3xl md:text-4xl">🪷</span>
            </div>
          </div>
          
          <h3 className="font-cinzel text-2xl md:text-3xl">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              A Special Blessing for You
            </span>
          </h3>
          
          <div className="space-y-4 font-inter text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            <p>
              On this special day, may you be blessed with the divine love of Radha-Krishna, 
              the wisdom of the Bhagavad Gita, and the eternal peace that comes from spiritual devotion.
            </p>
            <p>
              May your path be illuminated with divine light, your heart filled with bhakti, 
              and your life blessed with purpose and joy.
            </p>
            <p className="text-accent font-medium">
              Jai Shri Krishna! 🙏
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center gap-3 pt-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-float" style={{ animationDelay: '0s' }} />
            <div className="w-2 h-2 rounded-full bg-secondary animate-float" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-accent animate-float" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
