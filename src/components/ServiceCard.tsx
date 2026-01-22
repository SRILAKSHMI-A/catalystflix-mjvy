import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CatalystService } from "@/data/services";

interface ServiceCardProps {
  service: CatalystService;
  onSelect: (service: CatalystService) => void;
}

const ServiceCard = ({ service, onSelect }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onSelect(service);
  };

  const handleGetStarted = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open("https://catalyst.zoho.com/signup.html", "_blank");
  };

  return (
    <div
      className="netflix-card flex-shrink-0 w-[250px] md:w-[300px] aspect-video group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Card Image */}
      <div className="relative w-full h-full">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-sm"
        />
        
        {/* Badge */}
        {service.badge && (
          <div className="absolute top-2 right-2">
            <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-semibold">
              {service.badge}
            </span>
          </div>
        )}
        
        {/* Title overlay when not hovered */}
        {!isHovered && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-foreground font-semibold text-sm">{service.title}</h3>
          </div>
        )}
        
        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-card rounded-sm animate-scale-in shadow-2xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-1/2 object-cover rounded-t-sm"
            />
            
            <div className="p-4">
              {/* Action Buttons */}
              <div className="flex items-center gap-2 mb-3">
                <button 
                  onClick={handleGetStarted}
                  className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/80 transition-colors"
                >
                  <Play className="w-4 h-4 text-background fill-current" />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors">
                  <Plus className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors">
                  <ThumbsUp className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-muted-foreground flex items-center justify-center hover:border-foreground transition-colors ml-auto">
                  <ChevronDown className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-foreground font-semibold mb-2">{service.title}</h3>

              {/* Info */}
              <div className="flex items-center gap-2 text-xs mb-2">
                <span className="text-green-500 font-semibold">{service.match}% Match</span>
                <span className="border border-muted-foreground px-1 text-muted-foreground">HD</span>
                {service.badge && (
                  <span className="bg-primary/20 text-primary px-1 text-[10px] rounded">{service.badge}</span>
                )}
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 text-xs text-foreground/80">
                <span>{service.category}</span>
                <span className="text-muted-foreground">•</span>
                <span>API Ready</span>
                <span className="text-muted-foreground">•</span>
                <span>Scalable</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
