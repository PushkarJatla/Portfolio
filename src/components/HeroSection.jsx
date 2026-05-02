import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-left space-y-6">
          {/* Status badge */}
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 border border-border/60 backdrop-blur-sm">
            <span className="status-dot" />
            <span className="text-sm text-muted-foreground font-medium">
              Open to AI Engineering roles
            </span>
          </div>

          {/* Name + Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] opacity-0 animate-fade-up-delay-1">
            <span className="text-foreground">I build </span>
            <span className="text-gradient-animate">AI systems</span>
            <br />
            <span className="text-foreground">that ship to production.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-up-delay-2">
            Full-Stack AI Engineer with 1+ year building LLM-powered applications,
            RAG pipelines, and intelligent automation systems.
            I turn complex AI capabilities into products people actually use.
          </p>

          {/* Tech line */}
          <div className="flex flex-wrap items-center gap-2 opacity-0 animate-fade-up-delay-3">
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Stack:</span>
            {["React", "Next.js", "FastAPI", "LangChain", "OpenAI", "AWS"].map((tech) => (
              <span key={tech} className="tag-pill">{tech}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 opacity-0 animate-fade-up-delay-4">
            <a href="#projects" className="btn-primary" id="hero-view-work">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="/LatestResume-PushkarJatla.pdf"
              download
              className="btn-outline"
              id="hero-download-resume"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 pt-4 opacity-0 animate-fade-up-delay-5">
            <a
              href="https://github.com/PushkarJatla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              id="hero-github"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pushkar-jatla-3a518522b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              id="hero-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pushkarjatla02@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              id="hero-email"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <span className="w-px h-5 bg-border mx-1" />
            <span className="text-sm text-muted-foreground">
              pushkarjatla02@gmail.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
