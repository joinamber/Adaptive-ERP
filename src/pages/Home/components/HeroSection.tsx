
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStartedClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStartedClick }) => {
  return (
    <div className="bg-gradient-to-b from-background to-muted text-foreground">
      <div className="rfp-container py-20 md:py-40 text-center">
        <h1 className="font-heading mb-8 md:mb-12">
          Intelligent Enterprise<br />
          <span className="text-accent">Research & Development</span>
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 md:mb-16 px-4 md:px-0 text-muted-foreground leading-relaxed">
          We're advancing the frontier of enterprise intelligence through rigorous research 
          and elegant engineering. Our AI-enhanced systems represent a fundamental 
          reimagining of how organizations operate and evolve.
        </p>
        <Button 
          onClick={onGetStartedClick}
          className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg py-6 md:py-7 px-8 md:px-10 rounded-lg shadow-elegant transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          Explore Our Research
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
