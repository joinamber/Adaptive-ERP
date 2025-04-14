
import React from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const TraditionalErpProblemsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-50 px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-adaptive-primary">
          THE PROBLEMS WITH TRADITIONAL ERP
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <Card className="p-6 md:p-8 shadow-lg">
            <div className="flex items-start mb-4">
              <X className="text-adaptive-primary h-6 md:h-8 w-6 md:w-8 mr-3 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary">Legacy Systems</h3>
            </div>
            <p className="text-gray-700">
              The ERP market is massive ($55B+) but dominated by legacy systems designed before the AI revolution
            </p>
          </Card>
          
          <Card className="p-6 md:p-8 shadow-lg">
            <div className="flex items-start mb-4">
              <X className="text-adaptive-primary h-6 md:h-8 w-6 md:w-8 mr-3 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary">Complex & Rigid</h3>
            </div>
            <p className="text-gray-700">
              Traditional ERPs are complex, rigid, and often fail to deliver on promises of efficiency
            </p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-6 md:p-8 shadow-lg">
            <div className="flex items-start mb-4">
              <X className="text-adaptive-primary h-6 md:h-8 w-6 md:w-8 mr-3 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary">Implementation Failures</h3>
            </div>
            <p className="text-gray-700">
              Implementation failures and massive cost overruns are common
            </p>
          </Card>
          
          <Card className="p-6 md:p-8 shadow-lg">
            <div className="flex items-start mb-4">
              <X className="text-adaptive-primary h-6 md:h-8 w-6 md:w-8 mr-3 flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary">Siloed Data</h3>
            </div>
            <p className="text-gray-700">
              Data often remains siloed despite promises of integration
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TraditionalErpProblemsSection;
