import { useI18n } from "@/lib/i18n";
import heroImg from "@/assets/hero-timber.jpg";

export default function HeroSection() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Premium timber warehouse"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs text-gold-light font-medium tracking-wider uppercase">Trusted Since Establishment</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight text-primary-foreground mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10 max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-wood hover:bg-wood-dark text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t.hero.cta1}
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-primary-foreground/10 transition-all duration-300 backdrop-blur-sm"
            >
              {t.hero.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}