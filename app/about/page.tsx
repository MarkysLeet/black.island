import { AboutHero } from '@/components/sections/about-hero';
import { TeamSection } from '@/components/sections/team';
import { ContactSection } from '@/components/sections/contact';
import { HistorySection } from '@/components/sections/history';

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <AboutHero />
        <TeamSection />
        <ContactSection />
        <HistorySection />
      </div>
    </div>
  );
}
