import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import BubbleSection from "@/components/BubbleSection";
import CommunitySection from "@/components/CommunitySection";
import JournalSection from "@/components/JournalSection";
import PrivacySection from "@/components/PrivacySection";
import ModuleGrid from "@/components/ModuleGrid";
import Premium from "@/components/Premium";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <BubbleSection />
        <CommunitySection />
        <JournalSection />
        <PrivacySection />
        <ModuleGrid />
        <Premium />
        <Download />
      </main>
      <Footer />
    </>
  );
}