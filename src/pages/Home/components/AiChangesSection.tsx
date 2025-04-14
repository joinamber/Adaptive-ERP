
import React from "react";
import { Card } from "@/components/ui/card";

const AiChangesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-adaptive-primary">
          HOW AI CHANGES THE GAME
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6 md:p-8 shadow-lg text-center">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">💰</div>
            <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary mb-3 md:mb-4">Cost Reduction</h3>
            <p className="text-gray-700">
              Significant cost reduction in building and shipping software
            </p>
          </Card>
          
          <Card className="p-6 md:p-8 shadow-lg text-center">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🤖</div>
            <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary mb-3 md:mb-4">Proactive AI Agents</h3>
            <p className="text-gray-700">
              AI agents can proactively identify opportunities and risks
            </p>
          </Card>
          
          <Card className="p-6 md:p-8 shadow-lg text-center">
            <div className="text-4xl md:text-5xl mb-4 md:mb-6">🏭</div>
            <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary mb-3 md:mb-4">Industry-Specific Intelligence</h3>
            <p className="text-gray-700">
              Vertical-specific AI models can encode industry best practices
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AiChangesSection;
