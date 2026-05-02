import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Cpu, Layers, Brain, Search } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "BIM Automation",
    description:
      "Custom Dynamo scripts and Python tools that automate repetitive BIM tasks — from model auditing to automated parameter population and schedule generation.",
    tags: ["Dynamo", "Python", "Revit API"],
  },
  {
    icon: Layers,
    title: "MEP BIM Modeling",
    description:
      "High-precision MEP modeling in Revit for HVAC, plumbing, fire protection, and electrical systems. LOD 300-400 models ready for fabrication.",
    tags: ["Revit", "MEP", "LOD 400"],
  },
  {
    icon: Brain,
    title: "AI + BIM Integration",
    description:
      "Leveraging machine learning and AI to predict clashes, optimize routing, and generate intelligent design alternatives within BIM workflows.",
    tags: ["AI/ML", "Optimization", "Prediction"],
  },
  {
    icon: Search,
    title: "Clash Detection & Coordination",
    description:
      "Multi-discipline coordination using Navisworks and BIM 360. Zero-clash delivery through systematic detection, resolution, and verification workflows.",
    tags: ["Navisworks", "BIM 360", "IFC"],
  },
];

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-24 sm:py-32 relative" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground mt-3 mb-4">
            What I <span className="gradient-text">Deliver</span>
          </h2>
          <p className="text-muted-foreground font-body">
            End-to-end BIM solutions that combine engineering precision with cutting-edge automation technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 gradient-border"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-sans font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
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
