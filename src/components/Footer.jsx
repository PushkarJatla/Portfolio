import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs transition-transform duration-300 group-hover:scale-110">
                P
              </div>
              <span className="text-foreground font-semibold tracking-tight">
                pushkar<span className="text-primary">.dev</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              Building AI systems that ship to production.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PushkarJatla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/pushkar-jatla-3a518522b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:pushkarjatla02@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright + Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Pushkar Jatla. All rights reserved.
            </p>
            <a
              href="#hero"
              className="p-2 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
              aria-label="Back to top"
              id="footer-back-to-top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
