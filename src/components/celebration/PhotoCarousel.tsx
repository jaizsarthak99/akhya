import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import photo1 from '@/assets/akhya-photo-1.jpg';
import photo2 from '@/assets/akhya-photo-2.jpg';
import photo3 from '@/assets/akhya-photo-3.jpg';

const photos = [
  { src: photo1, alt: 'Akhya at the castle with sunflowers' },
  { src: photo2, alt: 'Akhya at YSL store' },
  { src: photo3, alt: 'Akhya at the temple' },
];

export const PhotoCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full max-w-3xl mx-auto animate-fade-in">
      {/* Carousel container with elegant frame */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-1">
        <div className="bg-card backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {photos.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/5] md:aspect-video overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle gradient overlay for better dot visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows - hidden on mobile, visible on desktop */}
            <CarouselPrevious className="hidden md:flex left-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all" />
            <CarouselNext className="hidden md:flex right-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all" />
          </Carousel>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-6">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current
                ? 'w-8 bg-primary'
                : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
