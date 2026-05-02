import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { MapPin, Building2, Award, Calendar } from "lucide-react";

const projects = [
  {
    title: "SMC Hospital",
    subtitle: "DB-142 — Riyadh, Saudi Arabia",
    image: "/manus-storage/smc_hospital_revit_de39004f.png",
    description:
      "A ~69,145 m² state-of-the-art hospital in Riyadh's Al Wadi District, designed by DAR International. Full MEP modeling and multi-discipline coordination in Revit, targeting LEED v4 BD+C Healthcare Gold certification.",
    role: "MEP BIM Modeling & Coordination",
    details: [
      { icon: MapPin, label: "Al Wadi District, Riyadh" },
      { icon: Building2, label: "69,145 m² Healthcare" },
      { icon: Award, label: "LEED v4 Gold Target" },
      { icon: Calendar, label: "IFC Oct 2024" },
    ],
    tags: ["Revit MEP", "Navisworks", "Clash Detection", "LEED", "DAR International"],
  },
  {
    title: "Nile Business City",
    subtitle: "Nile Towers — New Administrative Capital, Egypt",
    image: "/manus-storage/nile_towers_mep_2941fe5d.png",
    description:
      "One of Africa's tallest skyscrapers by Nile Developments in Egypt's New Administrative Capital. Comprehensive MEP coordination for this iconic mixed-use tower, managing complex vertical distribution systems across 50+ floors.",
    role: "MEP Coordination & Modeling",
    details: [
      { icon: MapPin, label: "New Admin Capital, Egypt" },
      { icon: Building2, label: "Supertall Mixed-Use" },
      { icon: Award, label: "Iconic Landmark" },
      { icon: Calendar, label: "Nile Developments" },
    ],
    tags: ["Revit MEP", "High-Rise", "Vertical Coordination", "BIM 360", "Multi-discipline"],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mt-3 mb-4">
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Landmark projects where precision engineering meets intelligent coordination.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/20 transition-all duration-500"
            >
              <div className={`grid lg:grid-cols-5 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <div className="lg:col-span-3 relative overflow-hidden">
                  <div className="aspect-video lg:aspect-auto lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent lg:bg-gradient-to-l" />
                  </div>
                  {/* Role badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-background/80 backdrop-blur-sm border border-border">
                    <span className="text-xs font-mono text-primary font-medium">{project.role}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-center space-y-5">
                  <div>
                    <h3 className="text-2xl font-sans font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-3">
                    {project.details.map((detail) => (
                      <div key={detail.label} className="flex items-center gap-2">
                        <detail.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-xs text-muted-foreground">{detail.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-secondary-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
