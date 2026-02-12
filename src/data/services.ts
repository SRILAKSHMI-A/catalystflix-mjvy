import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  docsUrl: string;
};

const services: Service[] = [
  {
    id: "authentication",
    title: "Authentication",
    description:
      "Secure user authentication with built-in login, signup, social auth, and role-based access.",
    image: "https://zoho.com/sites/zweb/images/catalyst/authentication.png",
    video: "https://your-video-link.mp4",
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/authentication/introduction/"
  },
  {
    id: "appsail",
    title: "AppSail",
    description:
      "Deploy full-stack and containerized applications with zero DevOps overhead.",
    image:
      "https://zoho.com/sites/zweb/images/catalyst/cutom-runtime-appsail.png",
    video: "https://your-video-link.mp4",
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/appsail/introduction/"
  },
  {
    id: "circuits",
    title: "Circuits",
    description:
      "Visually orchestrate workflows and manage complex multi-step logic.",
    image:
      "https://docs.catalyst.zoho.com/images/help/circuits/catalyst_circuits_graph_1.webp",
    video: "https://your-video-link.mp4",
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/circuits/introduction/"
  },
  {
    id: "datastore",
    title: "Datastore",
    description:
      "A scalable, fully managed database for structured application data.",
    image: "https://zoho.com/sites/zweb/images/catalyst/datastore.png",
    video: "https://your-video-link.mp4",
    docsUrl:
      "https://docs.catalyst.zoho.com/en/serverless/help/datastore/introduction/"
  }
];

export default function CatalystFlix() {
  const [hovered, setHovered] = useState<string | null>(null);

  const handleGetStarted = () => {
    window.open("https://catalyst.zoho.com/", "_blank");
  };

  const handleViewDocs = (url: string) => {
    window.open(url, "_blank");
  };

  const handleExploreCatalyst = () => {
    window.open("https://catalyst.zoho.com/features.html", "_blank");
  };

  return (
    <div className="p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">CatalystFlix</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl overflow-hidden bg-card border border-border"
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative h-40 bg-black">
              {hovered === service.id && service.video ? (
                <video
                  src={service.video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {service.description}
              </p>

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
                  onClick={() => handleViewDocs(service.docsUrl)}
                  className="netflix-button-secondary flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Docs</span>
                </button>
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border">
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
          </div>
        ))}
      </div>
    </div>
  );
}
