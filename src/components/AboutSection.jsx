import { Brain, Code2, Database, Layers, Server, Zap } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "LLM Integration",
    description: "Production-grade systems with OpenAI, Gemini APIs. Prompt engineering, output parsing, and cost-optimized pipelines.",
  },
  {
    icon: Layers,
    title: "RAG Architecture",
    description: "End-to-end retrieval-augmented generation with embeddings, vector stores, and context-aware response generation.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React/Next.js frontends with Node.js, Express, and FastAPI backends. Type-safe, tested, production-ready.",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "MongoDB, PostgreSQL, and vector databases. Designing schemas that scale with AI-native data patterns.",
  },
  {
    icon: Server,
    title: "Cloud & DevOps",
    description: "AWS, Vercel, Render deployments. CI/CD pipelines and infrastructure optimized for AI workloads.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Workflow automation with n8n, webhook orchestration, and intelligent triggers that eliminate manual processes.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase mb-4 block">
            // about
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            AI Engineer who builds
            <span className="text-gradient"> end-to-end.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I don't just integrate APIs — I architect complete AI systems.
            From designing RAG pipelines that reduce hallucination by 40% to building
            full-stack platforms processing 10K+ daily queries, I operate at the intersection
            of AI research and production engineering.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            With 1+ year of hands-on experience shipping AI products, I've built systems
            that serve real users, handle real scale, and solve real problems. My approach
            is systems-thinking first — understanding the entire pipeline from data ingestion
            to user interface.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-glass p-6 card-hover-lift group"
              id={`about-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1.5">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus banner */}
        <div className="mt-16 card-glass p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <span className="text-sm font-mono text-primary tracking-wider uppercase mb-3 block">
              // current focus
            </span>
            <h3 className="text-xl font-semibold mb-4">What I'm Building Right Now</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Advanced RAG Systems</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Multi-document retrieval with re-ranking, hybrid search, and evaluation frameworks
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-sm">AI Agent Architectures</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    LangChain-based agents with tool use, memory, and multi-step reasoning
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Production AI Pipelines</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Scalable ingestion, embedding, and inference pipelines on AWS infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
