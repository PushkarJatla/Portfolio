import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Associate Full-Stack Developer",
    company: "Seabed2Crest",
    location: "Bangalore, India",
    period: "Sep 2025 – Jan 2026",
    type: "Full-time",
    description:
      "Built and optimized full-stack e-commerce systems with AI integration, improving platform performance and automating sales workflows.",
    highlights: [
      "Improved e-commerce platform performance by 50–60% by implementing server-side pagination, optimizing REST API structures, and refining data flows across orders, products, and customer modules using Node.js and MongoDB",
      "Integrated an AI chatbot workflow into the sales conversion pipeline, increasing payment success rates by 20–30% and automating lead capture — reducing manual follow-up effort significantly",
      "Built real-time analytics dashboards for revenue trends, growth metrics, and order monitoring using React.js, enabling data-driven decisions for sellers and admins",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "REST APIs", "AI Chatbot", "Server-Side Pagination", "Analytics Dashboards"],
  },
  {
    role: "Software Development Engineer",
    company: "MediBuddy",
    location: "Bangalore, India",
    period: "Oct 2024 – Feb 2025",
    type: "Full-time",
    description:
      "Designed automation workflows and integrated intelligent ad targeting strategies for a leading healthcare platform.",
    highlights: [
      "Designed and deployed n8n automation workflows for bulk data processing, reducing manual operational effort by ~85% — from 15 days to 2–3 days per cycle",
      "Integrated intelligent ad targeting strategies into the platform, contributing to an estimated 2% revenue growth within 3 months through optimized user engagement and ad monetization",
    ],
    technologies: ["n8n", "Node.js", "Ad Targeting", "Workflow Automation", "Data Processing", "Platform Integration"],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    school: "University of Pune",
    period: "2020 – 2024",
    highlights: [
      "Final Year Project: TownVoice — Smart Waste Management System",
      "Focus areas: Data Structures, Algorithms, Database Systems, Web Technologies",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase mb-4 block">
            // experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Where I've
            <span className="text-gradient"> Built Things</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From healthcare platforms to e-commerce systems — building
            production software with real impact at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border hidden md:block" />

          {/* Experience entries */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6" id={`experience-${index}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                    <Building2 size={16} className="text-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="card-glass p-6 lg:p-8 flex-1 card-hover-lift">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag-pill text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <span className="text-sm font-mono text-primary tracking-wider uppercase mb-8 block">
              // education
            </span>

            {education.map((edu, index) => (
              <div key={index} className="relative flex gap-6" id={`education-${index}`}>
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 10 3 12 0v-5" />
                    </svg>
                  </div>
                </div>

                {/* Content card */}
                <div className="card-glass p-6 lg:p-8 flex-1 card-hover-lift">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm">{edu.field}</p>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground shrink-0">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {edu.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
