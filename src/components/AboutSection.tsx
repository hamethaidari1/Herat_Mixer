import { useI18n } from "@/lib/i18n";
import woodProcessingImg from "@/assets/wood-processing.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

const stats = [
  { value: "19+", key: "years" as const },
  { value: "500+", key: "projects" as const },
  { value: "200+", key: "clients" as const },
  { value: "34", key: "cities" as const },
  { value: "50+", key: "materials" as const },
];

export default function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative section-padding bg-background overflow-hidden">
      {/* Decorative wood texture background */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 opacity-[0.03] pointer-events-none rotate-180">
        <img src={woodTexture} alt="" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold text-wood tracking-[0.2em] uppercase">Our Legacy</span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-navy mt-4 mb-8 leading-tight">
              {t.about.title}
            </h2>
            <div className="w-20 h-1.5 bg-wood mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 italic border-l-4 border-gold/30 pl-6">
              {t.about.text}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.key} className="group relative p-6 rounded-2xl bg-beige/50 border border-transparent hover:border-wood/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-heading font-black text-gradient-gold group-hover:scale-110 transition-transform duration-300">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 font-bold uppercase tracking-wider">
                    {t.about[s.key]}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-4 bg-wood/5 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
              <img
                src={woodProcessingImg}
                alt="Wood processing facility"
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-[3/4] group-hover:scale-110 transition-transform duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -left-10 glass-dark rounded-3xl p-8 shadow-2xl z-20 transform group-hover:scale-110 transition-transform duration-500 border border-white/10">
              <div className="text-4xl font-heading font-black text-white mb-1">19+</div>
              <div className="text-xs text-gold font-bold uppercase tracking-widest">{t.about.years}</div>
              <div className="mt-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                ))}
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-wood/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}