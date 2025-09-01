import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground text-justify">
              I’m a passionate Web Developer who enjoys crafting responsive, user-friendly websites that not only look great but also perform smoothly. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Next.js, I bring ideas to life through clean design and clean code.
            </p>

            <p className="text-muted-foreground text-justify">
              I build full-stack web applications using the MERN stack—MongoDB, Express, React, and Node.js. From creating modern UIs to developing scalable APIs, I handle both frontend and backend with efficiency. I’m always learning new tools and techniques to improve performance, usability, and the overall web experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/LatestResume-PushkarJatla.pdf"
                download

                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Creative</h4>
                  <p className="text-muted-foreground">
                    Bringing creative flair to UI design and problem-solving with a user-first mindset..
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Self Developed</h4>
                  <p className="text-muted-foreground">
                    Always learning new technologies and improving existing skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Quick Learner</h4>
                  <p className="text-muted-foreground">
                    Adaptable to new frameworks, tools, or changing project requirements.
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
