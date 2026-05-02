const skillCategories = [
  {
    title: "AI & Machine Learning",
    color: "primary",
    skills: [
      { name: "LLM APIs (OpenAI, Gemini)", level: "Production" },
      { name: "RAG Pipelines", level: "Advanced" },
      { name: "Prompt Engineering", level: "Production" },
      { name: "LangChain", level: "Advanced" },
      { name: "Embeddings & Vector Search", level: "Intermediate" },
      { name: "AI Agents & Tool Use", level: "Learning" },
    ],
  },
  {
    title: "Frontend",
    color: "accent",
    skills: [
      { name: "React.js", level: "Production" },
      { name: "Next.js", level: "Advanced" },
      { name: "JavaScript / ES6+", level: "Production" },
      { name: "TailwindCSS", level: "Production" },
      { name: "HTML5 / CSS3", level: "Production" },
      { name: "Responsive Design", level: "Production" },
    ],
  },
  {
    title: "Backend & APIs",
    color: "green",
    skills: [
      { name: "Node.js", level: "Production" },
      { name: "Express.js", level: "Production" },
      { name: "FastAPI (Python)", level: "Advanced" },
      { name: "REST API Design", level: "Production" },
      { name: "JWT / Auth Systems", level: "Advanced" },
      { name: "WebSockets", level: "Intermediate" },
    ],
  },
  {
    title: "Databases",
    color: "orange",
    skills: [
      { name: "MongoDB", level: "Production" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Vector Databases (FAISS)", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" },
      { name: "Database Design", level: "Advanced" },
    ],
  },
  {
    title: "Cloud & DevOps",
    color: "cyan",
    skills: [
      { name: "AWS (S3, EC2, Lambda)", level: "Intermediate" },
      { name: "Vercel", level: "Production" },
      { name: "Render", level: "Advanced" },
      { name: "Git / GitHub", level: "Production" },
      { name: "CI/CD Pipelines", level: "Intermediate" },
    ],
  },
  {
    title: "Tools & Automation",
    color: "pink",
    skills: [
      { name: "n8n (Workflow Automation)", level: "Advanced" },
      { name: "Postman", level: "Production" },
      { name: "VS Code", level: "Production" },
      { name: "Figma (Basics)", level: "Intermediate" },
    ],
  },
];

const levelColors = {
  Production: "bg-green-500/15 text-green-400 border-green-500/20",
  Advanced: "bg-primary/15 text-primary border-primary/20",
  Intermediate: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  Learning: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20",
};

const categoryDotColors = {
  primary: "bg-primary",
  accent: "bg-accent",
  green: "bg-green-500",
  orange: "bg-orange-500",
  cyan: "bg-cyan-500",
  pink: "bg-pink-500",
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding px-4 relative bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase mb-4 block">
            // skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Technical
            <span className="text-gradient"> Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Categorized by domain. Levels reflect real-world usage — "Production" means
            I've shipped it in a live system, not just followed a tutorial.
          </p>
        </div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="card-glass p-6 card-hover-lift"
              id={`skills-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* Category title */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className={`w-2 h-2 rounded-full ${categoryDotColors[category.color]}`} />
                <h3 className="font-semibold text-base">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="text-sm text-muted-foreground">{skill.name}</span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Level legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-wider">Levels:</span>
          {Object.entries(levelColors).map(([level, color]) => (
            <div key={level} className="flex items-center gap-1.5">
              <span className={`px-2 py-0.5 rounded-full border font-medium ${color}`}>
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
