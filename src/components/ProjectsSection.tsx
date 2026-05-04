import { useI18n } from "@/lib/i18n";
import { Building, Store, Sofa, Factory, Handshake } from "lucide-react";
import project1 from "@/assets/construction-wood.jpg";
import project2 from "@/assets/furniture-wood.jpg";
import project3 from "@/assets/wood-processing.jpg";
import project4 from "@/assets/timber-transport.jpg";
import project5 from "@/assets/hero-timber.jpg";

const icons = [Building, Store, Sofa, Factory, Handshake];
const projectImages = [project1, project2, project3, project4, project5];

export default function ProjectsSection() {
  const { t } = useI18n();

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-wood tracking-wider uppercase">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mt-3 mb-4">{t.projectsSection.title}</h2>
          <p className="text-muted-foreground">{t.projectsSection.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projectsSection.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover-lift shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={projectImages[i]} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon size={20} className="text-wood" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading font-bold text-navy text-xl mb-3 group-hover:text-wood transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}