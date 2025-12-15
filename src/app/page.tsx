import Hero from "@/components/zenith/Hero";
import NavigationRail from "@/components/zenith/NavigationRail";
import MobileNav from "@/components/zenith/MobileNav";
import ProjectGrid from "@/components/zenith/ProjectGrid";
import StackSection from "@/components/zenith/StackSection";
import ManifestoSection from "@/components/zenith/ManifestoSection";
import JoinSection from "@/components/zenith/JoinSection";
import TeamSection from "@/components/zenith/TeamSection";
import NewsSection from "@/components/zenith/NewsSection";
import FooterTerminal from "@/components/zenith/FooterTerminal";
import GitHubBadge from "@/components/zenith/GitHubBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-zenith-base text-zenith-text selection:bg-zenith-cyan selection:text-zenith-black">
      {/* Global Effects */}
      <div className="fixed inset-0 z-50 pointer-events-none scanlines opacity-30" />
      <div className="fixed inset-0 z-50 pointer-events-none noise opacity-50" />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      />

      <NavigationRail />
      <MobileNav />

      <div className="relative z-10">
        <Hero />
        <ManifestoSection />
        <ProjectGrid />
        <StackSection />
        <TeamSection />
        <NewsSection />
        <JoinSection />
        <FooterTerminal />
      </div>

      <GitHubBadge />
    </main>
  );
}
