import { useI18n } from "@/lib/i18n";
import HeratMixerLogo from "./HeratMixerLogo";

export default function FooterSection() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <HeratMixerLogo size={80} variant="white" className="drop-shadow-lg" />
              <div className="flex flex-col leading-tight mt-2">
                <h3 className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase">Herat Mixer</h3>
                <span className="text-[10px] md:text-xs text-gold-light tracking-[0.3em] font-bold uppercase opacity-80 mt-1">.CO.LTD</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">{t.footer.desc}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gold-light text-sm">{t.footer.quickLinks}</h4>
            <div className="space-y-2.5">
              {(["home", "about", "services", "products", "projects"] as const).map((s) => (
                <button key={s} onClick={() => scrollTo(s)} className="block text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  {t.nav[s]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gold-light text-sm">{t.footer.ourServices}</h4>
            <div className="space-y-2.5">
              {t.services.items.slice(0, 5).map((s, i) => (
                <p key={i} className="text-sm text-primary-foreground/60">{s.title}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gold-light text-sm">{t.footer.contactInfo}</h4>
            <div className="space-y-2.5 text-sm text-primary-foreground/60">
              <a href={`tel:${t.contact.phone1}`} className="block hover:text-gold transition-colors ltr-text">{t.contact.phone1}</a>
              <a href={`tel:${t.contact.phone2}`} className="block hover:text-gold transition-colors ltr-text">{t.contact.phone2}</a>
              <a href={`tel:${t.contact.phone3}`} className="block hover:text-gold transition-colors ltr-text">{t.contact.phone3}</a>
              <a href="mailto:Herat.M@Live.Com" className="block hover:text-gold transition-colors ltr-text">Herat.M@Live.Com</a>
              <p>{t.contact.address}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} HERAT MIXER .CO.LTD. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}