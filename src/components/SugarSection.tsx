import { useI18n } from "@/lib/i18n";
import woodTexture from "@/assets/wood-texture.jpg";
import sugarImage from "@/assets/Shugar.new.jpeg";
import { Ship, PackageSearch, Building2, Truck, Globe2, MapPin } from "lucide-react";

const icons = [Globe2, Building2, PackageSearch, Ship, Truck, MapPin];

export default function SugarSection() {
  const { t } = useI18n();

  return (
    <section className="relative section-padding overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none rotate-180">
        <img src={woodTexture} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative z-10">
            <span className="text-sm font-bold text-wood tracking-[0.2em] uppercase">
              {t.sugar.tagline}
            </span>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-navy mt-4 mb-6 leading-tight">
              {t.sugar.title}
            </h2>

            <div className="w-20 h-1.5 bg-wood mb-8 rounded-full" />

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              {t.sugar.text}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.sugar.cards.map((card, i) => {
                const Icon = icons[i % icons.length];

                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 border border-transparent hover:border-wood/10 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex-shrink-0 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                      <Icon size={22} className="text-gold group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="font-bold text-navy text-sm md:text-base leading-tight group-hover:text-wood transition-colors mt-1">
                      {card}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gold/10 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-700" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={sugarImage}
                alt="Premium Sugar Import Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-slate-900/65 backdrop-blur-xl border border-white/25 p-5 md:p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Globe2 className="text-white" size={24} />
                  </div>

                  <div>
                    <div className="text-white font-heading font-black text-lg md:text-xl uppercase tracking-wider leading-none mb-1">
                      {t.sugar.turkey}
                    </div>

                    <div className="text-gold font-bold text-[10px] md:text-xs tracking-[0.2em] flex items-center gap-2">
                      <span className="w-6 md:w-8 h-[1px] bg-gold/50"></span>
                      {t.sugar.toAfghanistan}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wood/20 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}