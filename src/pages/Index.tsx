import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import ContentRow from "@/components/ContentRow";
import TopTenRow from "@/components/TopTenRow";

import Footer from "@/components/Footer";

import ServiceDetailModal from "@/components/ServiceDetailModal";
import {
  serverlessServices,
  cloudScaleServices,
  ziaServices,
  devToolsServices,
  topTenServices,
  CatalystService,
} from "@/data/services";

const Index = () => {
  const [selectedService, setSelectedService] = useState<CatalystService | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleServiceSelect = (service: CatalystService) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner onServiceSelect={handleServiceSelect} />
      
      <div className="-mt-32 relative z-10 space-y-2">
        <ContentRow 
          title="Serverless & Compute" 
          services={serverlessServices} 
          onServiceSelect={handleServiceSelect}
        />
        <TopTenRow 
          services={topTenServices} 
          onServiceSelect={handleServiceSelect}
        />
        <ContentRow 
          title="Cloud Scale — Storage & Database" 
          services={cloudScaleServices} 
          onServiceSelect={handleServiceSelect}
        />
        <ContentRow 
          title="Zia AI & Intelligence" 
          services={ziaServices} 
          onServiceSelect={handleServiceSelect}
        />
        <ContentRow 
          title="Developer Tools & Communication" 
          services={devToolsServices} 
          onServiceSelect={handleServiceSelect}
        />
      </div>
      
      <Footer />

      <ServiceDetailModal
        service={selectedService}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
