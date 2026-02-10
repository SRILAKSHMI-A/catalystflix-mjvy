import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {


  return (
    <footer className="bg-background px-4 md:px-12 py-12 mt-12">
      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
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
        Service Code
      </button>

      {/* Copyright */}
      <p className="text-xs text-muted-foreground">
        © 2024 Catalyst by Zoho. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
