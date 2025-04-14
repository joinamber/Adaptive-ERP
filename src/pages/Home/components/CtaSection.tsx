
import React from "react";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  onCreateRfpClick: () => void;
  bottomSectionRef: React.RefObject<HTMLDivElement>;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onCreateRfpClick, bottomSectionRef }) => {
  return (
    <section ref={bottomSectionRef} className="py-12 md:py-24 px-4 md:px-0">
      <div className="rfp-container text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-adaptive-primary mb-4 md:mb-6">
          Ready to Transform Your ERP Experience?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
          Join us in reimagining enterprise systems with AI at their core.
        </p>
        <Button 
          onClick={onCreateRfpClick}
          className="bg-adaptive-cta hover:bg-opacity-90 text-white text-lg py-5 md:py-6 px-6 md:px-8"
        >
          CREATE YOUR RFP
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
