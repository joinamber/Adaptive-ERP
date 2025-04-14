
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStartedClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick }) => {
  return (
    <div className="bg-adaptive-primary text-white">
      <div className="rfp-container py-16 md:py-32 text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8">
          AI TRANSFORMING<br />ERP SYSTEMS
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 px-4 md:px-0">
          Reimagining enterprise resource planning from first principles with adaptive
          intelligence
        </p>
        <Button 
          onClick={onGetStartedClick}
          className="bg-adaptive-secondary hover:bg-opacity-80 text-adaptive-primary text-lg py-5 md:py-6 px-6 md:px-8"
        >
          GET STARTED
        </Button>
      </div>
      <div className="bg-adaptive-secondary h-12 md:h-16 w-full"></div>
    </div>
  );
};

export default HeroSection;
