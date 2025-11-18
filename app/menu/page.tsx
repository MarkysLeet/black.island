import { MenuHeader } from '@/components/sections/menu-header';
import { MenuTabs } from '@/components/sections/menu-tabs';

export const dynamic = 'force-static';

export default function MenuPage() {
  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <MenuHeader />
        <MenuTabs />
      </div>
    </section>
  );
}
