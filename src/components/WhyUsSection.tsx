import { useI18n } from "@/lib/i18n";
import { Check } from "lucide-react";

export default function WhyUsSection() {
  const { t } = useI18n();

  return (
    <section id="whyUs" className="section-padding bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-gold tracking-wider uppercase">Our Advantages</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-3 mb-4">{t.whyUs.title}</h2>
          <p className="text-primary-foreground/70">{t.whyUs.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.whyUs.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 glass-dark rounded-xl p-5">
              <div className="w-8 h-8 shrink-0 rounded-full bg-wood/20 flex items-center justify-center">
                <Check size={16} className="text-gold" />
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}