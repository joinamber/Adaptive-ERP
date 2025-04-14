
import React from "react";

const CoreTechnologiesSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-adaptive-primary text-white px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          CORE AI TECHNOLOGIES TRANSFORMING ERP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-opacity-20 bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-adaptive-secondary mb-4 md:mb-6">Foundation Models Integration</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Natural language UI
              </li>
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Conversational prompts
              </li>
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Contextual recommendations
              </li>
            </ul>
          </div>
          
          <div className="bg-opacity-20 bg-white p-6 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-adaptive-secondary mb-4 md:mb-6">AI Agents & Orchestration</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Autonomous workflow
              </li>
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Dynamic adaptation
              </li>
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Cross-system coordination
              </li>
            </ul>
          </div>
          
          <div className="bg-opacity-20 bg-white p-6 md:p-8 rounded-lg md:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold text-adaptive-secondary mb-4 md:mb-6">Knowledge Graph Technologies</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Semantic data integration
              </li>
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Causal reasoning capabilities
              </li>
              <li className="flex items-center">
                <span className="text-adaptive-secondary mr-2">•</span>
                Institutional knowledge capture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologiesSection;
