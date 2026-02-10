import { useState, useEffect } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", url: "https://catalyst.zoho.com" },
    { label: "Services", url: "https://catalyst.zoho.com/" },
    { label: "Solutions", url: "https://catalyst.zoho.com/" },
    { label: "Pricing", url: "https://catalyst.zoho.com/pricing.html" },
    { label: "Resources", url: "https://docs.catalyst.zoho.com/en/tutorials/" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 transition-all duration-300 ${
        isScrolled ? "bg-background" : "bg-gradient-to-b from-background/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a 
            href="https://catalyst.zoho.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-primary font-display text-4xl tracking-wider">CATALYST</span>
            <span className="text-muted-foreground text-xs mt-2">by Zoho</span>
          </a>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-muted-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-foreground hover:text-muted-foreground transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">Z</span>
            </div>
            <ChevronDown className="w-4 h-4 text-foreground group-hover:rotate-180 transition-transform" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
