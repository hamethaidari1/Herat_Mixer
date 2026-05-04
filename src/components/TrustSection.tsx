import { useI18n } from "@/lib/i18n";
import woodTexture from "@/assets/wood-texture.jpg";

export default function TrustSection() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative section-padding overflow-hidden">
      <img
        src={woodTexture}
        alt="Wood texture background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1280}
        height={720}
      />
      <div className="absolute inset-0 bg-navy/85" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-6">
          {t.trust.title}
        </h2>
        <p className="text-primary-foreground/80 leading-relaxed mb-10 text-lg">
          {t.trust.text}
        </p>
        <button
          onClick={() => scrollTo("contact")}
          className="bg-wood hover:bg-wood-dark text-primary-foreground px-10 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {t.trust.cta}
        </button>
      </div>
    </section>
  );
}