import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-110">
            P
          </div>
          <span className="text-foreground font-semibold text-lg tracking-tight">
            pushkar<span className="text-primary">.dev</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-muted/50"
              id={`nav-${item.name.toLowerCase()}`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/LatestResume-PushkarJatla.pdf"
            download
            className="ml-2 btn-primary text-xs py-2 px-4"
            id="nav-resume-btn"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 rounded-lg hover:bg-muted/50 transition-colors"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          id="mobile-menu-toggle"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/LatestResume-PushkarJatla.pdf"
              download
              className="btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
