
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { transformationData, TransformationDataKey } from "./components/TransformationData";
import HeroSection from "./components/HeroSection";
import AiChangesSection from "./components/AiChangesSection";
import TraditionalErpProblemsSection from "./components/TraditionalErpProblemsSection";
import CoreTechnologiesSection from "./components/CoreTechnologiesSection";
import TransformationAreasSection from "./components/TransformationAreasSection";
import QuoteSection from "./components/QuoteSection";
import CtaSection from "./components/CtaSection";

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TransformationDataKey>("banking");
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollToBottomBanner = () => {
    bottomSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToRfp = () => {
    navigate("/rfp");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-adaptive-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection onGetStartedClick={scrollToBottomBanner} />

      {/* How AI Changes the Game Section */}
      <AiChangesSection />

      {/* Problems with Traditional ERP */}
      <TraditionalErpProblemsSection />

      {/* Core AI Technologies */}
      <CoreTechnologiesSection />

      {/* Key Areas of Transformation */}
      <TransformationAreasSection 
        activeTab={activeTab} 
        setActiveTab={(tab: TransformationDataKey) => setActiveTab(tab)} 
      />

      {/* Quote Section */}
      <QuoteSection />

      {/* CTA Section */}
      <CtaSection 
        onCreateRfpClick={navigateToRfp}
        bottomSectionRef={bottomSectionRef}
      />

      {/* Footer is now imported as a component */}
      <Footer />
    </div>
  );
};

export default Home;
