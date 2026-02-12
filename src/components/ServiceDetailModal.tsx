import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";
import { CatalystService } from "@/data/services";

interface ServiceDetailModalProps {
  service: CatalystService | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceDetailModal = ({
  service,
  open,
  onOpenChange,
}: ServiceDetailModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-border">
        {/* Hero Image */}
        <div className="relative h-64 w-full">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <DialogHeader>
              <DialogTitle className="font-display text-4xl text-foreground">
                {service.title}
              </DialogTitle>
            </DialogHeader>
          </div>

          {/* Badge */}
          {service.badge && (
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
                {service.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm">
            <span className="text-green-500 font-bold">
              {service.match}% Match
            </span>
            <span className="border border-muted-foreground px-2 py-0.5 text-muted-foreground">
              {service.category}
            </span>
            <span className="text-muted-foreground">Enterprise Ready</span>
            <span className="border border-muted-foreground px-2 py-0.5 text-muted-foreground">
              HD
            </span>
          </div>

          {/* Description */}
          <p className="text-foreground/90 text-lg leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div>
            <h4 className="text-foreground font-semibold mb-3">
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
