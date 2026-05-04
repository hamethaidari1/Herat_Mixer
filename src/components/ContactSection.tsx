import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-wood tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mt-3 mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground">{t.contact.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-2xl p-8 shadow-lg border border-border space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder={t.contact.name}
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-wood/30 transition-shadow"
              />
              <input
                type="email"
                placeholder={t.contact.email}
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-wood/30 transition-shadow"
              />
            </div>
            <input
              type="tel"
              placeholder={t.contact.phone}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-wood/30 transition-shadow"
            />
            <textarea
              placeholder={t.contact.message}
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-wood/30 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="w-full bg-navy text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:bg-navy-light transition-colors"
            >
              {t.contact.send}
            </button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-navy mb-4">HERAT MIXER .CO.LTD</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-wood mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{t.contact.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-wood shrink-0" />
                  <span className="text-sm text-muted-foreground">+93 799 77 2021</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-wood shrink-0" />
                  <a href="mailto:Herat.M@Live.Com" className="text-sm text-muted-foreground">Herat.M@Live.Com</a>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              {t.contact.whatsapp}
            </a>
            <div className="rounded-2xl overflow-hidden border border-border h-64 lg:h-80 bg-muted flex items-center justify-center shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.5280000000003!2d62.193000000000005!3d34.348000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f31268c00000000%3A0x0!2zMzTCsDIwJzUzLjkiTiA2MsKwMTEnMzQuOCJF!5e0!3m2!1sen!2s!4v1714800000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Map of Herat Mixer CO.LTD location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}