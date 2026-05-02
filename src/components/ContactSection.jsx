import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send("service_5an59sx", "template_0pfi82o", form, "H403Nm5NKck8UcAOc")
      .then(() => {
        toast.success("Message sent! I'll get back to you shortly.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="section-padding px-4 sm:px-6 lg:px-8 relative bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-mono text-primary tracking-wider uppercase mb-4 block">
            // contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Let's Build
            <span className="text-gradient"> Something Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Looking for an AI engineer who can ship? I'm open to full-time roles,
            contract work, and interesting AI projects. Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick connect cards */}
            <a
              href="mailto:pushkarjatla02@gmail.com"
              className="card-glass p-5 flex items-center gap-4 card-hover-lift block"
              id="contact-email"
            >
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-sm">pushkarjatla02@gmail.com</p>
              </div>
              <ArrowUpRight size={16} className="ml-auto text-muted-foreground" />
            </a>

            <a
              href="tel:+919370718772"
              className="card-glass p-5 flex items-center gap-4 card-hover-lift block"
              id="contact-phone"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium text-sm">+91 9370718772</p>
              </div>
              <ArrowUpRight size={16} className="ml-auto text-muted-foreground" />
            </a>

            <div className="card-glass p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-green-500/10 text-green-500 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/pushkar-jatla-3a518522b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl card-glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                id="contact-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/PushkarJatla"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl card-glass text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
                id="contact-github"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 card-glass p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-6">Send a message</h3>

            <form className="space-y-5" onSubmit={handleSubmit} id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-sm"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-sm"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                id="contact-submit"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};
