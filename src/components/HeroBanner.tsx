import { Play, Info, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { CatalystService, serverlessServices, cloudScaleServices, ziaServices } from "@/data/services";

interface HeroBannerProps {
  onServiceSelect: (service: CatalystService) => void;
}

const featuredServices = [
  {
    title: "SERVERLESS\nPLATFORM",
    subtitle: "Functions",
    description: "Build, deploy, and scale applications without managing infrastructure. Catalyst provides a complete serverless environment with functions, databases, authentication, and more.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    service: serverlessServices[0],
  },
  {
    title: "CLOUD\nSCALE",
    subtitle: "Data Store",
    description: "Store and manage your application data with our powerful relational database. Built for reliability and scale with ZCQL query language support.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2072&auto=format&fit=crop",
    service: cloudScaleServices[0],
  },
  {
    title: "ZIA AI\nSERVICES",
    subtitle: "Intelligence",
    description: "Add AI capabilities to your apps with OCR, face analytics, image moderation, and text analytics. Powered by Zoho's Zia artificial intelligence.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2072&auto=format&fit=crop",
    service: ziaServices[0],
  },
];

const HeroBanner = ({ onServiceSelect }: HeroBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % featuredServices.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = featuredServices[currentIndex];

  const handleGetStarted = () => {
    window.open("https://catalyst.zoho.com/signup.html", "_blank");
  };

  const handleMoreInfo = () => {
    onServiceSelect(current.service);
  };

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url('${current.image}')`,
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="absolute bottom-0 left-0 right-0 h-40 gradient-bottom" />
      
      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-12">
        <div className={`max-w-2xl transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-display text-2xl">C</span>
            <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
              {current.subtitle} • Featured Service
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4 text-shadow whitespace-pre-line">
            {current.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-8 max-w-lg leading-relaxed">
            {current.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button 
              onClick={handleGetStarted}
              className="netflix-button flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Get Started Free</span>
            </button>
            <button 
              onClick={handleMoreInfo}
              className="netflix-button-secondary flex items-center gap-2"
            >
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </button>
            <a 
              href="https://catalyst.zoho.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Visit Catalyst</span>
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-32 left-4 md:left-12 flex gap-2">
        {featuredServices.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-4 bg-muted-foreground/50 hover:bg-muted-foreground'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
