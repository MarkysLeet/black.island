import { Hero } from '@/components/sections/hero';
import { MenuPreview } from '@/components/sections/menu-preview';
import { GallerySection } from '@/components/sections/gallery';
import { BookingSection } from '@/components/sections/booking';

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <MenuPreview />
      <GallerySection />
      <BookingSection />
    </div>
  );
}
