import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-primary">AH</span>
          <span className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Ahmed Hisham. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/ahmed-hisham26"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:Ahmed.hisham2000.ah@gmail.com"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
