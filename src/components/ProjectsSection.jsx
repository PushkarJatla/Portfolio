import { ArrowRight, ArrowUpRight, ExternalLink, Github, BookOpen } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "infraauth",
    title: "InfraAuth",
    subtitle: "Scalable Authentication & Caching Service",
    image: "/projects/project3.png",
    problem:
      "Implementing secure, scalable authentication with rate limiting and caching from scratch for every microservice is redundant, error-prone, and slow.",
    solution:
      "Built a production-ready authentication microservice using Node.js, Express, PostgreSQL, and Redis. Features JWT-based auth, RBAC, caching, and rate limiting for scalable applications.",
    architecture: [
      "Clean layered architecture: Controllers → Services → Repositories pattern",
      "Redis-backed caching system reducing database queries by 60%+",
      "Fully containerized with Docker Compose for local development",
      "Input validation using Zod schemas and centralized error handling",
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Swagger UI"],
    conceptsLabel: "Key Features",
    keyConcepts: ["Production-Ready", "Scalable Architecture", "Security Patterns"],
    impact: [
      "Improved API response time by 60% via Redis",
      "Rate limits prevent brute-force (100 req/15min)",
      "Supports 1000+ concurrent users",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/pushkarjatla/infra-auth-cache-service",
    docsUrl: "https://github.com/pushkarjatla/infra-auth-cache-service#readme",
    featured: true,
  },
  {
    id: "comparewise",
    title: "CompareWise",
    subtitle: "AI-Powered Product Comparison Engine",
    image: "/projects/project1.png",
    problem:
      "Online shoppers waste 30+ minutes comparing products across multiple sites. Existing comparison tools are manual, outdated, and lack intelligent analysis.",
    solution:
      "Built an AI comparison engine that aggregates product data across platforms, uses LLM-powered analysis to extract and normalize specifications, and generates side-by-side comparisons with intelligent recommendations.",
    architecture: [
      "Next.js frontend with server-side rendering for SEO",
      "PostgreSQL for structured product data storage",
      "AI-driven comparison algorithm using LLM APIs",
      "Automated data normalization pipeline",
    ],
    techStack: ["Next.js", "TailwindCSS", "PostgreSQL", "AI/LLM APIs"],
    aiConcepts: ["LLM-powered data extraction", "Prompt engineering for comparison analysis", "Structured output parsing"],
    impact: [
      "Reduced product comparison time by ~60%",
      "Processes 500+ product comparisons",
      "Sub-2s page load with SSR optimization",
    ],
    demoUrl: "https://nextjs-tailwind-optibuy-app.vercel.app/",
    githubUrl: "https://github.com/PushkarJatla/nextjs-tailwind-optibuy-app",
    featured: true,
  },
  {
    id: "craveit",
    title: "CraveIt",
    subtitle: "Hyperlocal Vendor Discovery Platform",
    image: "/projects/project5.png",
    problem:
      "Small-scale food vendors in Indian cities have zero online presence. Customers can't discover nearby hidden gems, and vendors lose potential revenue daily.",
    solution:
      "Designed a full-stack hyperlocal platform with real-time vendor discovery, location-based search, and a vendor onboarding system that requires zero technical knowledge.",
    architecture: [
      "React SPA with component-driven architecture",
      "Node.js + Express REST API with JWT auth",
      "MongoDB with geospatial indexing for location queries",
      "Cloudinary integration for vendor image management",
    ],
    techStack: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    aiConcepts: ["Location-aware recommendations", "Search relevance scoring", "Data-driven vendor ranking"],
    impact: [
      "Onboarded 50+ vendors in pilot phase",
      "3x increase in vendor visibility metrics",
      "90% user retention in beta testing",
    ],
    demoUrl: "https://crave-it-app.vercel.app/",
    githubUrl: "https://github.com/PushkarJatla/craveIt-app",
    featured: true,
  },

];

export const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section id="projects" className="section-padding px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase mb-4 block">
            // projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Systems I've
            <span className="text-gradient"> Designed & Shipped</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Not just code — these are end-to-end systems solving real problems
            with measurable impact. Each project below is a case study in
            engineering decisions.
          </p>
        </div>

        {/* Project case studies */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-glass overflow-hidden card-hover-lift"
              id={`project-${project.id}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="lg:col-span-2 relative overflow-hidden bg-muted/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[240px] lg:min-h-[360px] transition-transform duration-700 hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-white backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="lg:col-span-3 p-6 lg:p-8">
                  {/* Title + Links */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      {project.docsUrl && project.docsUrl !== "#" && (
                        <a
                          href={project.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                          aria-label={`${project.title} Documentation`}
                          title="View Documentation"
                        >
                          <BookOpen size={18} />
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                          aria-label={`${project.title} GitHub`}
                          title="View Source Code"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
                          aria-label={`${project.title} Demo`}
                          title="View Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Problem</span>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Solution</span>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.solution}</p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tag-pill text-xs">{tech}</span>
                    ))}
                  </div>

                  {/* Expandable details */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-sm text-primary hover:text-accent font-medium flex items-center gap-1.5 transition-colors duration-300 mb-3"
                    id={`expand-${project.id}`}
                  >
                    {expandedProject === project.id ? "Show less" : "View architecture & impact"}
                    <ArrowRight
                      size={14}
                      className={`transition-transform duration-300 ${expandedProject === project.id ? "rotate-90" : ""}`}
                    />
                  </button>

                  {expandedProject === project.id && (
                    <div className="space-y-4 pt-3 border-t border-border/50 animate-fade-up">
                      {/* Architecture */}
                      <div>
                        <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Architecture</span>
                        <ul className="mt-2 space-y-1.5">
                          {project.architecture.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Concepts / Highlights */}
                      {(project.aiConcepts || project.keyConcepts) && (
                        <div>
                          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                            {project.conceptsLabel || "AI Concepts"}
                          </span>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {(project.aiConcepts || project.keyConcepts).map((concept) => (
                              <span
                                key={concept}
                                className="px-2.5 py-1 text-xs rounded-md bg-accent/10 text-accent border border-accent/15 font-medium"
                              >
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Impact */}
                      <div>
                        <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Impact</span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                          {project.impact.map((metric, i) => (
                            <div key={i} className="p-3 rounded-lg bg-muted/40 border border-border/30">
                              <p className="text-sm font-medium text-foreground">{metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/PushkarJatla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            id="projects-github-cta"
          >
            More on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
