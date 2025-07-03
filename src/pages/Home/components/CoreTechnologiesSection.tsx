
import React from "react";

const CoreTechnologiesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-primary text-primary-foreground px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="font-heading text-center mb-4 md:mb-6">
          Core Research Areas
        </h2>
        <p className="text-center text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 md:mb-20">
          Our interdisciplinary approach combines advances in machine learning, 
          cognitive science, and systems theory to create truly intelligent enterprise platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-primary-foreground/20">
            <h3 className="font-heading text-xl mb-6 text-accent">Large Language Models</h3>
            <ul className="space-y-4 text-primary-foreground/90">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Contextual understanding of business processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Natural language interfaces for complex queries</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Automated documentation and knowledge synthesis</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-primary-foreground/20">
            <h3 className="font-heading text-xl mb-6 text-accent">Multi-Agent Systems</h3>
            <ul className="space-y-4 text-primary-foreground/90">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Distributed decision-making architectures</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Emergent organizational intelligence</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Adaptive coordination protocols</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-primary-foreground/20 md:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-xl mb-6 text-accent">Causal Inference</h3>
            <ul className="space-y-4 text-primary-foreground/90">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Understanding of cause-effect relationships</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Counterfactual reasoning for decision support</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>Intervention planning and outcome prediction</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologiesSection;
