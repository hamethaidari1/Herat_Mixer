import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "tr" | "fa";

const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", products: "Products", projects: "Projects", whyUs: "Why Us", contact: "Contact", quote: "Get a Quote" },
    hero: {
      title: "Premium Wood & Timber Solutions for Modern Construction",
      subtitle: "HERAT MIXER .CO.LTD imports high-quality wood materials from Russia and delivers premium timber solutions across Afghanistan for construction, furniture, and industrial projects.",
      cta1: "Get a Quote",
      cta2: "Explore Services",
    },
    about: {
      title: "About HERAT MIXER .CO.LTD",
      text: "We are a professional wood and timber company focused on quality, reliability, and long-term business partnerships. HERAT MIXER .CO.LTD imports premium wood materials from Russia and supplies timber products across Afghanistan for construction companies, furniture manufacturers, interior designers, and commercial projects.",
      years: "Years Experience",
      projects: "Completed Projects",
      clients: "Business Clients",
      cities: "Cities Served",
      materials: "Premium Materials",
    },
    russia: {
      title: "From Russia to Afghanistan — Reliable Wood Supply",
      text: "HERAT MIXER .CO.LTD sources high-quality wood and timber materials directly from Russia and delivers them across Afghanistan. We provide reliable transportation, wholesale supply, and professional business solutions for clients in every major city and province.",
      cards: ["Russian Timber Import", "Nationwide Delivery", "Wholesale Supply", "Fast Transportation", "Reliable Logistics", "Business Partnerships"],
    },
    services: {
      title: "Our Premium Services",
      subtitle: "Comprehensive wood and timber solutions for every need",
      items: [
        { title: "Timber Supply", desc: "High-quality timber sourced from premium Russian forests for all construction needs." },
        { title: "Russian Timber Import", desc: "Direct import of premium-grade wood materials from Russia's finest forests." },
        { title: "Wood Processing", desc: "Professional wood processing with modern equipment and skilled craftsmen." },
        { title: "Construction Wood", desc: "Durable and reliable construction-grade timber for building projects." },
        { title: "Furniture-Grade Wood", desc: "Premium quality wood perfect for luxury furniture manufacturing." },
        { title: "Custom Wood Orders", desc: "Tailored wood solutions to meet your specific project requirements." },
        { title: "Wholesale Timber", desc: "Competitive wholesale pricing for large-scale timber procurement." },
        { title: "Nationwide Delivery", desc: "Reliable delivery to all major cities and provinces across Afghanistan." },
      ],
    },
    products: {
      title: "Our Products",
      subtitle: "Premium wood materials for every application",
      items: ["Natural Timber", "Processed Wood", "Plywood & Boards", "Construction Wood", "Decorative Wood", "Custom Wood Cuts"],
    },
    projectsSection: {
      title: "Our Projects",
      subtitle: "Trusted by leading construction and business companies",
      items: [
        { title: "Residential Construction Supply", desc: "Supplying premium timber for modern residential developments across Afghanistan." },
        { title: "Commercial Interior Projects", desc: "High-quality decorative wood for luxury commercial interiors." },
        { title: "Furniture Material Supply", desc: "Premium grade wood for Afghanistan's leading furniture manufacturers." },
        { title: "Industrial Timber Delivery", desc: "Large-scale industrial timber supply for major construction projects." },
        { title: "Large Construction Partnerships", desc: "Long-term supply partnerships with major construction companies." },
      ],
    },
    whyUs: {
      title: "Why Choose HERAT MIXER",
      subtitle: "Your trusted partner in premium wood solutions",
      items: [
        "High-Quality Materials",
        "Russian Supply Chain",
        "Reliable Delivery",
        "Professional Service",
        "Competitive Pricing",
        "Long-Term Partnerships",
        "Nationwide Logistics",
        "Fast Transportation",
      ],
    },
    trust: {
      title: "Trusted Wood Partner for Construction & Business Projects",
      text: "With years of experience and a proven track record, HERAT MIXER .CO.LTD has established itself as the most reliable wood and timber partner in Afghanistan. Our commitment to quality, transparency, and customer satisfaction sets us apart in the industry.",
      cta: "Start a Partnership",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch for premium wood solutions",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      address: "AFGHANISTAN\nHerat, Bank Khun Street\nIn front of Otaghahye Tejarat",
      whatsapp: "WhatsApp Us",
    },
    footer: {
      desc: "HERAT MIXER .CO.LTD is a leading wood and timber company importing premium materials from Russia and delivering across Afghanistan.",
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactInfo: "Contact Info",
      rights: "All rights reserved.",
    },
  },
  tr: {
    nav: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetler", products: "Ürünler", projects: "Projeler", whyUs: "Neden Biz", contact: "İletişim", quote: "Teklif Alın" },
    hero: {
      title: "Modern İnşaat İçin Premium Ahşap ve Kereste Çözümleri",
      subtitle: "HERAT MIXER .CO.LTD, Rusya'dan yüksek kaliteli ahşap malzemeler ithal ederek Afganistan genelinde inşaat, mobilya ve endüstriyel projeler için premium kereste çözümleri sunmaktadır.",
      cta1: "Teklif Alın",
      cta2: "Hizmetleri Keşfedin",
    },
    about: {
      title: "HERAT MIXER .CO.LTD Hakkında",
      text: "Kalite, güvenilirlik ve uzun vadeli iş ortaklıklarına odaklanan profesyonel bir ahşap ve kereste şirketiyiz. HERAT MIXER .CO.LTD, Rusya'dan premium ahşap malzemeler ithal ederek Afganistan genelinde inşaat şirketleri, mobilya üreticileri, iç mimarlar ve ticari projeler için kereste ürünleri tedarik etmektedir.",
      years: "Yıllık Deneyim",
      projects: "Tamamlanan Proje",
      clients: "İş Ortağı",
      cities: "Hizmet Verilen Şehir",
      materials: "Premium Malzeme",
    },
    russia: {
      title: "Rusya'dan Afganistan'a — Güvenilir Ahşap Tedariki",
      text: "HERAT MIXER .CO.LTD, yüksek kaliteli ahşap ve kereste malzemelerini doğrudan Rusya'dan tedarik ederek Afganistan genelinde teslim etmektedir.",
      cards: ["Rus Kereste İthalatı", "Ülke Çapında Teslimat", "Toptan Tedarik", "Hızlı Taşımacılık", "Güvenilir Lojistik", "İş Ortaklıkları"],
    },
    services: {
      title: "Premium Hizmetlerimiz",
      subtitle: "Her ihtiyaç için kapsamlı ahşap ve kereste çözümleri",
      items: [
        { title: "Kereste Tedariki", desc: "Tüm inşaat ihtiyaçları için premium Rus ormanlarından tedarik edilen yüksek kaliteli kereste." },
        { title: "Rus Kereste İthalatı", desc: "Rusya'nın en iyi ormanlarından premium kalite ahşap malzeme doğrudan ithalatı." },
        { title: "Ahşap İşleme", desc: "Modern ekipman ve uzman zanaatkarlarla profesyonel ahşap işleme." },
        { title: "İnşaat Ahşabı", desc: "İnşaat projeleri için dayanıklı ve güvenilir inşaat sınıfı kereste." },
        { title: "Mobilya Sınıfı Ahşap", desc: "Lüks mobilya üretimi için mükemmel kalitede ahşap." },
        { title: "Özel Ahşap Siparişler", desc: "Projenize özel ahşap çözümleri." },
        { title: "Toptan Kereste", desc: "Büyük ölçekli kereste tedariği için rekabetçi toptan fiyatlandırma." },
        { title: "Ülke Çapında Teslimat", desc: "Afganistan genelinde tüm büyük şehir ve illere güvenilir teslimat." },
      ],
    },
    products: {
      title: "Ürünlerimiz",
      subtitle: "Her uygulama için premium ahşap malzemeler",
      items: ["Doğal Kereste", "İşlenmiş Ahşap", "Kontrplak & Levhalar", "İnşaat Ahşabı", "Dekoratif Ahşap", "Özel Ahşap Kesimler"],
    },
    projectsSection: {
      title: "Projelerimiz",
      subtitle: "Önde gelen inşaat ve iş şirketleri tarafından güvenilmektedir",
      items: [
        { title: "Konut İnşaat Tedariki", desc: "Afganistan genelinde modern konut projeleri için premium kereste tedariki." },
        { title: "Ticari İç Mekan Projeleri", desc: "Lüks ticari iç mekanlar için yüksek kaliteli dekoratif ahşap." },
        { title: "Mobilya Malzeme Tedariki", desc: "Afganistan'ın önde gelen mobilya üreticileri için premium kalite ahşap." },
        { title: "Endüstriyel Kereste Teslimatı", desc: "Büyük inşaat projeleri için büyük ölçekli endüstriyel kereste tedariki." },
        { title: "Büyük İnşaat Ortaklıkları", desc: "Büyük inşaat şirketleriyle uzun vadeli tedarik ortaklıkları." },
      ],
    },
    whyUs: {
      title: "Neden HERAT MIXER",
      subtitle: "Premium ahşap çözümlerinde güvenilir ortağınız",
      items: ["Yüksek Kaliteli Malzemeler", "Rus Tedarik Zinciri", "Güvenilir Teslimat", "Profesyonel Hizmet", "Rekabetçi Fiyatlandırma", "Uzun Vadeli Ortaklıklar", "Ülke Çapında Lojistik", "Hızlı Taşımacılık"],
    },
    trust: {
      title: "İnşaat ve İş Projeleri İçin Güvenilir Ahşap Ortağı",
      text: "Yılların deneyimi ve kanıtlanmış bir sicille HERAT MIXER .CO.LTD, Afganistan'daki en güvenilir ahşap ve kereste ortağı olarak kendini kanıtlamıştır.",
      cta: "Ortaklık Başlatın",
    },
    contact: {
      title: "İletişim",
      subtitle: "Premium ahşap çözümleri için bizimle iletişime geçin",
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      message: "Mesaj",
      send: "Mesaj Gönder",
      address: "AFGHANISTAN\nHerat, Bank Khun Street\nIn front of Otaghahye Tejarat",
      whatsapp: "WhatsApp ile Yazın",
    },
    footer: {
      desc: "HERAT MIXER .CO.LTD, Rusya'dan premium malzemeler ithal eden ve Afganistan genelinde teslim eden önde gelen bir ahşap ve kereste şirketidir.",
      quickLinks: "Hızlı Bağlantılar",
      ourServices: "Hizmetlerimiz",
      contactInfo: "İletişim Bilgileri",
      rights: "Tüm hakları saklıdır.",
    },
  },
  fa: {
    nav: { home: "صفحه اصلی", about: "درباره ما", services: "خدمات", products: "محصولات", projects: "پروژه‌ها", whyUs: "چرا ما", contact: "تماس", quote: "درخواست قیمت" },
    hero: {
      title: "راه‌حل‌های چوب و الوار ممتاز برای ساخت و ساز مدرن",
      subtitle: "شرکت HERAT MIXER مواد چوبی با کیفیت بالا را از روسیه وارد کرده و راه‌حل‌های ممتاز الوار را در سراسر افغانستان برای پروژه‌های ساختمانی، مبلمان و صنعتی ارائه می‌دهد.",
      cta1: "درخواست قیمت",
      cta2: "مشاهده خدمات",
    },
    about: {
      title: "درباره شرکت HERAT MIXER",
      text: "ما یک شرکت حرفه‌ای چوب و الوار هستیم که بر کیفیت، قابلیت اطمینان و شراکت‌های تجاری بلندمدت تمرکز دارد. شرکت HERAT MIXER مواد چوبی ممتاز را از روسیه وارد کرده و محصولات الوار را در سراسر افغانستان برای شرکت‌های ساختمانی، تولیدکنندگان مبلمان، طراحان داخلی و پروژه‌های تجاری تأمین می‌کند.",
      years: "سال تجربه",
      projects: "پروژه تکمیل شده",
      clients: "مشتری تجاری",
      cities: "شهر تحت پوشش",
      materials: "مواد ممتاز",
    },
    russia: {
      title: "از روسیه به افغانستان — تأمین قابل اطمینان چوب",
      text: "شرکت HERAT MIXER مواد چوبی و الوار با کیفیت بالا را مستقیماً از روسیه تأمین کرده و در سراسر افغانستان تحویل می‌دهد.",
      cards: ["واردات الوار روسی", "تحویل سراسری", "تأمین عمده", "حمل و نقل سریع", "لجستیک قابل اطمینان", "شراکت تجاری"],
    },
    services: {
      title: "خدمات ممتاز ما",
      subtitle: "راه‌حل‌های جامع چوب و الوار برای هر نیاز",
      items: [
        { title: "تأمین الوار", desc: "الوار با کیفیت بالا از جنگل‌های ممتاز روسیه برای تمام نیازهای ساختمانی." },
        { title: "واردات الوار روسی", desc: "واردات مستقیم مواد چوبی درجه ممتاز از بهترین جنگل‌های روسیه." },
        { title: "فرآوری چوب", desc: "فرآوری حرفه‌ای چوب با تجهیزات مدرن و صنعتگران ماهر." },
        { title: "چوب ساختمانی", desc: "الوار بادوام و قابل اطمینان درجه ساختمانی برای پروژه‌های عمرانی." },
        { title: "چوب درجه مبلمان", desc: "چوب با کیفیت ممتاز مناسب برای تولید مبلمان لوکس." },
        { title: "سفارشات چوب سفارشی", desc: "راه‌حل‌های چوبی سفارشی متناسب با نیازهای خاص پروژه شما." },
        { title: "الوار عمده", desc: "قیمت‌گذاری رقابتی عمده برای تأمین الوار در مقیاس بزرگ." },
        { title: "تحویل سراسری", desc: "تحویل قابل اطمینان به تمام شهرها و ولایات اصلی افغانستان." },
      ],
    },
    products: {
      title: "محصولات ما",
      subtitle: "مواد چوبی ممتاز برای هر کاربرد",
      items: ["الوار طبیعی", "چوب فرآوری شده", "تخته سه لا و صفحات", "چوب ساختمانی", "چوب تزئینی", "برش‌های چوب سفارشی"],
    },
    projectsSection: {
      title: "پروژه‌های ما",
      subtitle: "مورد اعتماد شرکت‌های پیشرو ساختمانی و تجاری",
      items: [
        { title: "تأمین ساخت و ساز مسکونی", desc: "تأمین الوار ممتاز برای توسعه‌های مسکونی مدرن در سراسر افغانستان." },
        { title: "پروژه‌های داخلی تجاری", desc: "چوب تزئینی با کیفیت بالا برای فضاهای داخلی تجاری لوکس." },
        { title: "تأمین مواد مبلمان", desc: "چوب درجه ممتاز برای تولیدکنندگان پیشرو مبلمان افغانستان." },
        { title: "تحویل الوار صنعتی", desc: "تأمین الوار صنعتی در مقیاس بزرگ برای پروژه‌های عمرانی اصلی." },
        { title: "شراکت‌های بزرگ ساختمانی", desc: "شراکت‌های تأمین بلندمدت با شرکت‌های بزرگ ساختمانی." },
      ],
    },
    whyUs: {
      title: "چرا HERAT MIXER را انتخاب کنید",
      subtitle: "شریک قابل اعتماد شما در راه‌حل‌های چوب ممتاز",
      items: ["مواد با کیفیت بالا", "زنجیره تأمین روسی", "تحویل قابل اطمینان", "خدمات حرفه‌ای", "قیمت رقابتی", "شراکت بلندمدت", "لجستیک سراسری", "حمل و نقل سریع"],
    },
    trust: {
      title: "شریک قابل اعتماد چوب برای پروژه‌های ساختمانی و تجاری",
      text: "با سال‌ها تجربه و سابقه اثبات شده، شرکت HERAT MIXER خود را به عنوان قابل اطمینان‌ترین شریک چوب و الوار در افغانستان تثبیت کرده است.",
      cta: "شروع شراکت",
    },
    contact: {
      title: "تماس با ما",
      subtitle: "برای راه‌حل‌های چوب ممتاز با ما تماس بگیرید",
      name: "نام کامل",
      email: "ایمیل",
      phone: "تلفن",
      message: "پیام",
      send: "ارسال پیام",
      address: "افغانستان\nهرات، سرک بانک خون\nمقابل اتاق‌های تجارت",
      whatsapp: "واتساپ",
    },
    footer: {
      desc: "شرکت HERAT MIXER یک شرکت پیشرو چوب و الوار است که مواد ممتاز را از روسیه وارد کرده و در سراسر افغانستان تحویل می‌دهد.",
      quickLinks: "لینک‌های سریع",
      ourServices: "خدمات ما",
      contactInfo: "اطلاعات تماس",
      rights: "تمامی حقوق محفوظ است.",
    },
  },
} as const;

type Translations = typeof translations.en;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  dir: "ltr",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang] as Translations;
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir} className={lang === "fa" ? "font-body" : ""}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}