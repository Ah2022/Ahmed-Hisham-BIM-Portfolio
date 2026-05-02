import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center space-y-6 mb-12">
            <span className="text-xs font-mono font-medium text-primary uppercase tracking-widest">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-foreground">
              Let's Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Looking for a BIM specialist who brings automation and AI to the table? Let's discuss how I can elevate your next project.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.a
              href="mailto:Ahmed.hisham2000.ah@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground block">Email Me</span>
                <span className="text-xs text-muted-foreground font-mono">Ahmed.hisham2000.ah@gmail.com</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/ahmed-hisham26"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-foreground block">Connect on LinkedIn</span>
                <span className="text-xs text-muted-foreground font-mono">linkedin.com/in/ahmed-hisham26</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-chart-5/5 border border-primary/20">
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Ready to automate your BIM workflow?</p>
                <p className="text-xs text-muted-foreground mt-1">Get a free consultation on how AI can transform your MEP coordination.</p>
              </div>
              <a
                href="mailto:Ahmed.hisham2000.ah@gmail.com?subject=BIM%20Consultation%20Request"
                className="shrink-0 px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
