import { useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";
import { Menu, X, Globe } from "lucide-react";
import HeratMixerLogo from "@/components/HeratMixerLogo";

const langLabels: Record<Lang, string> = { en: "EN", tr: "TR", fa: "FA" };
const sections = ["home", "about", "services", "products", "projects", "whyUs", "contact"] as const;

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* ── Brand logo ── */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group py-2 transition-all duration-300"
            aria-label="Herat Mixer – go to home"
          >
            <HeratMixerLogo 
              size={56} 
              className="drop-shadow-md transition-all duration-500 group-hover:scale-105" 
            />
            <div className="flex flex-col items-start justify-center">
              <span className="text-[13px] md:text-[14px] font-heading font-black text-navy tracking-[0.1em] group-hover:text-wood transition-colors duration-300 uppercase leading-none">
                Herat Mixer
              </span>
              <span className="text-[7px] md:text-[8px] text-wood font-bold tracking-[0.3em] uppercase opacity-80 mt-1 leading-none">
                .CO.LTD
              </span>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-[13px] font-semibold text-navy/80 hover:text-wood transition-all duration-300 uppercase tracking-widest relative group/nav"
              >
                {t.nav[s]}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-wood transition-all duration-300 group-hover/nav:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-[13px] font-semibold text-navy/80 hover:text-wood transition-colors uppercase tracking-widest"
              >
                <Globe size={15} strokeWidth={2} />
                {langLabels[lang]}
              </button>
              {langOpen && (
                <div className="absolute top-full mt-3 end-0 glass rounded-lg shadow-xl py-2 min-w-[100px] border border-white/20">
                  {(["en", "tr", "fa"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`block w-full px-4 py-2 text-sm text-start hover:bg-wood/10 transition-colors ${l === lang ? "text-wood font-bold" : "text-navy/80 font-medium"}`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-navy text-primary-foreground px-6 h-11 flex items-center justify-center rounded-md text-[13px] font-bold hover:bg-wood transition-all duration-300 shadow-md hover:shadow-wood/30 uppercase tracking-widest"
            >
              {t.nav.quote}
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-navy p-1.5 hover:bg-navy/5 rounded-md transition-colors">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="px-6 py-6 space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center gap-3 mb-2">
              <HeratMixerLogo size={50} />
              <div className="flex flex-col items-start justify-center">
                <span className="text-[14px] font-heading font-black text-navy tracking-[0.1em] uppercase leading-none">Herat Mixer</span>
                <span className="text-[8px] text-wood font-bold tracking-[0.3em] uppercase opacity-80 mt-1 leading-none">.CO.LTD</span>
              </div>
            </div>
            <div className="space-y-2">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className="block w-full text-start px-4 py-3.5 text-sm font-bold text-navy/80 hover:text-wood hover:bg-wood/5 rounded-xl transition-all uppercase tracking-[0.1em]"
                >
                  {t.nav[s]}
                </button>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-navy/10">
              {(["en", "tr", "fa"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setOpen(false); }}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${l === lang ? "bg-wood text-primary-foreground shadow-md" : "bg-navy/5 text-navy/70 hover:bg-navy/10"}`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="w-full bg-navy text-primary-foreground px-6 py-4 rounded-xl text-sm font-bold mt-4 shadow-lg uppercase tracking-[0.15em]"
            >
              {t.nav.quote}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}