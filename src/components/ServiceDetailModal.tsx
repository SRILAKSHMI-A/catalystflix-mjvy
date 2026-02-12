import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, Check, ExternalLink } from "lucide-react";
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

  const handleGetStarted = () => {
    window.open("https://catalyst.zoho.com/signup.html", "_blank");
  };

  const handleViewDocs = () => {
    window.open(service.docsUrl, "_blank");
  };

  const handleExploreCatalyst = () => {
    window.open("https://catalyst.zoho.com", "_blank");
  };

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

          {/* Title + Top Action Buttons */}
          <div className="absolute bottom-4 left-6 right-6">
            <DialogHeader>
              <DialogTitle className="font-display text-4xl text-foreground">
                {service.title}
              </DialogTitle>
            </DialogHeader>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleGetStarted}
                className="netflix-button flex items-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Get Started Free</span>
              </button>

              <button
                onClick={handleViewDocs}
                className="netflix-button-secondary flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Docs</span>
              </button>
            </div>
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

          {/* Footer CTA Buttons */}
          <div className="flex items-center gap-4 pt-4 border-t border-border">
            <button
              onClick={handleExploreCatalyst}
              className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary py-3 rounded-lg font-semibold transition-colors"
            >
              Explore All Catalyst Services
            </button>

            <button
              onClick={handleGetStarted}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors"
            >
              Start Building Now
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
