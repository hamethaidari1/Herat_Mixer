import { useI18n } from "@/lib/i18n";
import img1 from "@/assets/wood-texture.jpg";
import img2 from "@/assets/wood-processing.jpg";
import img3 from "@/assets/furniture-wood.jpg";
import img4 from "@/assets/construction-wood.jpg";
import img5 from "@/assets/hero-timber.jpg";
import img6 from "@/assets/timber-transport.jpg";
import woodTexture from "@/assets/wood-texture.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function ProductsSection() {
  const { t } = useI18n();

  return (
    <section id="products" className="relative section-padding overflow-hidden">
      {/* Wood Texture Background Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <img src={woodTexture} alt="" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="absolute inset-0 bg-beige/90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold text-wood tracking-[0.2em] uppercase">Premium Inventory</span>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-navy mt-4 mb-6 leading-tight">
            {t.products.title}
          </h2>
          <div className="w-20 h-1.5 bg-wood mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.items.map((name, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500">
              <img
                src={images[i]}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={640}
                height={480}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-1 bg-gold mb-4 rounded-full" />
                <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">
                  {name}
                </h3>
                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Premium Quality Timber & Wood
                </p>
              </div>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}