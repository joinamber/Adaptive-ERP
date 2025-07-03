
import React from "react";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  onCreateRfpClick: () => void;
  bottomSectionRef: React.RefObject<HTMLDivElement>;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onCreateRfpClick, bottomSectionRef }) => {
  return (
    <section ref={bottomSectionRef} className="py-16 md:py-32 px-4 md:px-0 bg-gradient-to-b from-background to-muted">
      <div className="rfp-container text-center">
        <h2 className="font-heading mb-6 md:mb-8">
          Begin Your Research Journey
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 md:mb-16 text-muted-foreground leading-relaxed">
          Partner with us to explore the intersection of artificial intelligence and enterprise systems. 
          Our research-driven approach ensures every solution is grounded in rigorous methodology 
          and empirical validation.
        </p>
        <Button 
          onClick={onCreateRfpClick}
          className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground text-lg py-6 md:py-7 px-8 md:px-12 rounded-lg shadow-elegant transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
        >
          Initiate Collaboration
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
