import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { TopTenService, getServiceById, CatalystService } from "@/data/services";

interface TopTenRowProps {
  services: TopTenService[];
  onServiceSelect: (service: CatalystService) => void;
}

const TopTenRow = ({ services, onServiceSelect }: TopTenRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0);
      setShowRightArrow(
        rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
      );
    }
  };

  const handleClick = (serviceId: string) => {
    const fullService = getServiceById(serviceId);
    if (fullService) {
      onServiceSelect(fullService);
    }
  };

  return (
    <div className="relative py-4 group/row">
      <h2 className="netflix-row-title flex items-center gap-2">
        <span>Top 10 Services</span>
        <span className="text-primary">Today</span>
      </h2>

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 translate-y-2 z-10 w-12 h-full bg-background/50 hover:bg-background/80 transition-colors opacity-0 group-hover/row:opacity-100 flex items-center justify-center"
        >
          <ChevronLeft className="w-8 h-8 text-foreground" />
        </button>
      )}

      {/* Content */}
      <div
        ref={rowRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-scroll scrollbar-hide px-4 md:px-12 py-4"
      >
        {services.map((service) => (
          <div 
            key={service.rank} 
            className="flex-shrink-0 flex items-end cursor-pointer group hover:scale-105 transition-transform duration-300"
            onClick={() => handleClick(service.id)}
          >
            {/* Large Number */}
            <span 
              className="font-display text-[180px] leading-none text-transparent select-none"
              style={{
                WebkitTextStroke: '3px hsl(var(--muted-foreground))',
              }}
            >
              {service.rank}
            </span>
            
            {/* Card */}
            <div className="netflix-card w-[120px] h-[180px] -ml-8 mb-2 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-sm group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-foreground text-xs font-medium">{service.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 translate-y-2 z-10 w-12 h-full bg-background/50 hover:bg-background/80 transition-colors opacity-0 group-hover/row:opacity-100 flex items-center justify-center"
        >
          <ChevronRight className="w-8 h-8 text-foreground" />
        </button>
      )}
    </div>
  );
};

export default TopTenRow;
