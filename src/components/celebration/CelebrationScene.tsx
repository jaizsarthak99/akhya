import { PhotoCarousel } from './PhotoCarousel';

export const CelebrationScene = () => {
  return (
    <div className="relative w-full px-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-3xl blur-3xl" />
      
      {/* Photo Carousel */}
      <div className="relative">
        <PhotoCarousel />
      </div>
    </div>
  );
};
