import { useI18n } from "@/lib/i18n";
import transportImg from "@/assets/timber-transport.jpg";
import woodTexture from "@/assets/wood-texture.jpg";
import { Truck, Globe, Package, Zap, Shield, Handshake } from "lucide-react";

const icons = [Globe, Truck, Package, Zap, Shield, Handshake];

export default function RussiaSection() {
  const { t } = useI18n();

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img src={woodTexture} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-beige/80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-wood tracking-[0.2em] uppercase">International Supply Chain</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-navy mt-4 mb-6 leading-tight">
            {t.russia.title}
          </h2>
          <div className="w-20 h-1.5 bg-wood mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">{t.russia.text}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-wood/10 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-700" />
            <img
              src={transportImg}
              alt="Timber transport"
              className="relative rounded-[2rem] shadow-2xl w-full object-cover aspect-video z-10 group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {t.russia.cards.map((card, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="group glass rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-wood/20 shadow-sm hover:shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-wood/10 flex items-center justify-center mb-4 group-hover:bg-wood group-hover:text-white transition-all duration-300">
                    <Icon size={24} className="text-wood group-hover:text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-base group-hover:text-wood transition-colors">{card}</h3>
                  <div className="w-8 h-0.5 bg-wood/20 mt-3 group-hover:w-16 group-hover:bg-wood transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}