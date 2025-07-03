
import React from "react";
import { Card } from "@/components/ui/card";

const AiChangesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="font-heading text-center mb-4 md:mb-6">
          Research Foundation
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 md:mb-20">
          Our work is grounded in cutting-edge research across artificial intelligence, 
          systems engineering, and organizational behavior.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-accent rounded-sm"></div>
            </div>
            <h3 className="font-heading text-xl mb-4">Adaptive Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our systems employ continuous learning architectures that evolve with organizational 
              patterns, developing increasingly sophisticated understanding of enterprise dynamics.
            </p>
          </Card>
          
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-gradient-to-br from-accent to-accent/70 rounded-sm"></div>
            </div>
            <h3 className="font-heading text-xl mb-4">Predictive Modeling</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced statistical models and machine learning techniques enable unprecedented 
              forecasting accuracy across complex, interconnected business processes.
            </p>
          </Card>
          
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
              <div className="w-6 h-6 bg-accent/80 rounded-sm"></div>
            </div>
            <h3 className="font-heading text-xl mb-4">Natural Language Processing</h3>
            <p className="text-muted-foreground leading-relaxed">
              State-of-the-art language models enable intuitive interaction with complex data structures, 
              democratizing access to sophisticated analytical capabilities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AiChangesSection;
