
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { transformationData, TransformationDataKey } from "./TransformationData";

interface TransformationAreasSectionProps {
  activeTab: TransformationDataKey;
  setActiveTab: (tab: TransformationDataKey) => void;
}

const TransformationAreasSection: React.FC<TransformationAreasSectionProps> = ({ 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-0">
      <div className="rfp-container">
        <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-adaptive-primary">
          KEY AREAS OF TRANSFORMATION
        </h2>
        
        <Tabs 
          defaultValue="ecommerce" 
          value={activeTab} 
          onValueChange={setActiveTab as (value: string) => void}
          className="w-full"
        >
          <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto pb-2">
            <TabsList className="mb-2">
              <TabsTrigger 
                value="banking"
                className={`px-3 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium ${activeTab === 'banking' ? 'text-adaptive-secondary border-b-2 border-adaptive-secondary' : 'text-gray-600'}`}
              >
                Banking & Finance
              </TabsTrigger>
              <TabsTrigger 
                value="ecommerce"
                className={`px-3 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium ${activeTab === 'ecommerce' ? 'text-adaptive-secondary border-b-2 border-adaptive-secondary' : 'text-gray-600'}`}
              >
                Ecommerce Operations
              </TabsTrigger>
              <TabsTrigger 
                value="logistics"
                className={`px-3 md:px-6 py-2 md:py-3 text-base md:text-lg font-medium ${activeTab === 'logistics' ? 'text-adaptive-secondary border-b-2 border-adaptive-secondary' : 'text-gray-600'}`}
              >
                Logistics & Supply Chain
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="banking" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {transformationData.banking.cards.map((card, index) => (
                <Card key={index} className="p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary mb-3 md:mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-adaptive-secondary mr-2 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ecommerce" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {transformationData.ecommerce.cards.map((card, index) => (
                <Card key={index} className="p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary mb-3 md:mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-adaptive-secondary mr-2 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="logistics" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {transformationData.logistics.cards.map((card, index) => (
                <Card key={index} className="p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-adaptive-primary mb-3 md:mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-adaptive-secondary mr-2 text-lg">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TransformationAreasSection;
