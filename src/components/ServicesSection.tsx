import { useI18n } from "@/lib/i18n";
import { TreePine, Globe, Cog, Building, Sofa, ClipboardList, Warehouse, Truck } from "lucide-react";
import woodTexture from "@/assets/wood-texture.jpg";

const icons = [TreePine, Globe, Cog, Building, Sofa, ClipboardList, Warehouse, Truck];

export default function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="relative section-padding bg-background overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
        <img src={woodTexture} alt="" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-wood tracking-[0.2em] uppercase">Premium Solutions</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-navy mt-4 mb-6 leading-tight">
            {t.services.title}
          </h2>
          <div className="w-20 h-1.5 bg-wood mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative bg-card rounded-3xl p-8 border border-border hover:border-wood/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-wood/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-wood/10 to-gold/10 flex items-center justify-center mb-6 group-hover:from-wood group-hover:to-gold transition-all duration-500 shadow-inner">
                    <Icon size={28} className="text-wood group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy mb-4 group-hover:text-wood transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-wood to-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}