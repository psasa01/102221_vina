import { SiteHeader } from "@/components/site-header";
import { HomeCollage } from "@/components/home-collage";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <HomeCollage />
      </div>
    </main>
  );
}
