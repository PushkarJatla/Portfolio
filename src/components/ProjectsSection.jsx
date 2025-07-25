import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CompareWise - Buy Smart, Save Big",
    description: "Helps you compare products across top shopping sites to find the best deals, ratings, and reviews — all in one place.",
    image: "/projects/project1.png",
    tags: ["NextJs", "TailwindCSS", "PostgreSQL"],
    demoUrl: "https://nextjs-tailwind-optibuy-app.vercel.app/",
    githubUrl: "https://github.com/PushkarJatla/nextjs-tailwind-optibuy-app",
  },
  {
    id: 2,
    title: "ManageMate - Employee Management Dashboard",
    description:
      "A robust and efficient dashboard for managing, tracking, and organizing employee information with ease and accuracy.",
    image: "/projects/project2.png",
    tags: ["ReactJs", "Bootstrap5", "Material UI"],
    demoUrl: "https://responsive-react-emp-dashboard.vercel.app/",
    githubUrl: "https://github.com/PushkarJatla/responsive-react-emp-dashboard",
  },
  {
    id: 3,
    title: "Code Circle - Collaborative Coding Platform",
    description:
      "A real-time collaborative code editor that enables teams to write, edit, and debug code together seamlessly.",
    image: "/projects/project3.png",
    tags: ["ReactJs", "ExpressJs", "Socket.io"],
    demoUrl: "https://realtime-code-editor-ashy.vercel.app/",
    githubUrl: "https://github.com/PushkarJatla/realtime-code-editor",
  },
  {
    id: 4,
    title: "TownVoice - Waste Management System",
    description: "A smart waste management system that streamlines garbage collection, tracking, and reporting for cleaner communities.",
    image: "/projects/project4.png",
    tags: ["ReactJs","NodeJs", "MongoDB"],
    demoUrl: "https://github.com/PushkarJatla/final-year-frontend-townvoice",
    githubUrl: "https://github.com/PushkarJatla/final-year-frontend-townvoice",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-15 px-4 relative">
      <div className="container-fluid mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/PushkarJatla"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
