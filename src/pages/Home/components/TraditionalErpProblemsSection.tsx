
import React from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const TraditionalErpProblemsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-muted/50 px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="font-heading text-center mb-4 md:mb-6">
          Challenges in Enterprise Systems
        </h2>
        <p className="text-center text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 md:mb-20">
          Current enterprise solutions face fundamental limitations that impede organizational effectiveness and adaptability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <X className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-heading text-xl mb-4">Architectural Constraints</h3>
            <p className="text-muted-foreground leading-relaxed">
              Legacy architectures built on outdated assumptions about data flow, user interaction, 
              and computational capabilities limit organizational agility and innovation potential.
            </p>
          </Card>
          
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <X className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-heading text-xl mb-4">Cognitive Overhead</h3>
            <p className="text-muted-foreground leading-relaxed">
              Complex interfaces and rigid workflows impose significant cognitive burden on users, 
              reducing productivity and hindering adoption of organizational best practices.
            </p>
          </Card>
          
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <X className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-heading text-xl mb-4">Integration Fragmentation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Siloed data structures and incompatible protocols prevent the emergence of 
              holistic organizational intelligence and cross-functional insights.
            </p>
          </Card>
          
          <Card className="p-8 md:p-10 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
              <X className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="font-heading text-xl mb-4">Static Intelligence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Absence of adaptive learning mechanisms means systems cannot evolve with 
              organizational patterns or capitalize on emerging opportunities for optimization.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TraditionalErpProblemsSection;
