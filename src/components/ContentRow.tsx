import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import ServiceCard from "./ServiceCard";
import { CatalystService } from "@/data/services";

interface ContentRowProps {
  title: string;
  services: CatalystService[];
  onServiceSelect: (service: CatalystService) => void;
}

const ContentRow = ({ title, services, onServiceSelect }: ContentRowProps) => {
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

  return (
    <div className="relative py-4 group/row">
      <h2 className="netflix-row-title">{title}</h2>
      
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
        className="flex gap-2 overflow-x-scroll scrollbar-hide px-4 md:px-12 py-4"
      >
        {services.map((service) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            onSelect={onServiceSelect}
          />
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

export default ContentRow;
