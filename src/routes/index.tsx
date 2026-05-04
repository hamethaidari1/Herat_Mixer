import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { I18nProvider } from "@/lib/i18n";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RussiaSection from "@/components/RussiaSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HERAT MIXER .CO.LTD — Premium Wood & Timber Solutions" },
      { name: "description", content: "HERAT MIXER .CO.LTD imports high-quality wood materials from Russia and delivers premium timber solutions across Afghanistan for construction, furniture, and industrial projects." },
      { property: "og:title", content: "HERAT MIXER .CO.LTD — Premium Wood & Timber Solutions" },
      { property: "og:description", content: "Professional wood and timber company importing premium materials from Russia, delivering across Afghanistan." },
    ],
  }),
});

function Index() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <I18nProvider>
      {loading && <LoadingScreen onComplete={handleComplete} />}
      <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <RussiaSection />
          <ServicesSection />
          <ProductsSection />
          <ProjectsSection />
          <WhyUsSection />
          <TrustSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </I18nProvider>
  );
}
