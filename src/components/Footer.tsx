import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    [],
    [],
    [],
    [],
  ];

  return (
    <footer className="bg-background px-4 md:px-12 py-12 mt-12">
      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a
          href="https://www.instagram.com/catalystbyzoho/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          <Instagram className="w-6 h-6" />
        </a>

        <a
          href="https://x.com/catalystbyzoho"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          <Twitter className="w-6 h-6" />
        </a>

        <a
          href="https://www.youtube.com/@catalystbyzoho"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-muted-foreground transition-colors"
        >
          <Youtube className="w-6 h-6" />
        </a>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {footerLinks.map((column, colIndex) => (
          <ul key={colIndex} className="space-y-3">
            {column.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Service Code */}
      <button className="text-sm text-muted-foreground border border-muted-foreground px-4 py-2 mb-6 hover:text-foreground hover:border-foreground transition-colors">
  Built with Catalyst
</button>
    </footer>
  );
};

export default Footer;
