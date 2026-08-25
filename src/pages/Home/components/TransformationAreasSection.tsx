
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
        <h2 className="font-heading text-center mb-12 md:mb-16">
          Key Areas of Transformation
        </h2>
        
        <Tabs 
          defaultValue="banking" 
          value={activeTab} 
          onValueChange={setActiveTab as (value: string) => void}
          className="w-full"
        >
          <div className="flex justify-center mb-8 md:mb-12">
            <TabsList className="flex-wrap h-auto overflow-visible bg-muted/50 border border-border/50 shadow-soft rounded-lg p-1 gap-1">
              <TabsTrigger
                value="banking"
                className="text-sm md:text-lg font-medium px-3 md:px-6 py-2 md:py-4 rounded-md transition-all duration-200 data-[state=active]:bg-background data-[state=active]:text-accent data-[state=active]:shadow-sm"
              >
                Banking & Finance
              </TabsTrigger>
              <TabsTrigger
                value="ecommerce"
                className="text-sm md:text-lg font-medium px-3 md:px-6 py-2 md:py-4 rounded-md transition-all duration-200 data-[state=active]:bg-background data-[state=active]:text-accent data-[state=active]:shadow-sm"
              >
                Ecommerce Operations
              </TabsTrigger>
              <TabsTrigger
                value="logistics"
                className="text-sm md:text-lg font-medium px-3 md:px-6 py-2 md:py-4 rounded-md transition-all duration-200 data-[state=active]:bg-background data-[state=active]:text-accent data-[state=active]:shadow-sm"
              >
                Logistics & Supply Chain
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="banking" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {transformationData.banking.cards.map((card, index) => (
                <Card key={index} className="p-6 md:p-8 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
                  <h3 className="font-heading text-xl mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2 text-lg">•</span>
                        <span className="text-muted-foreground">{item}</span>
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
                <Card key={index} className="p-6 md:p-8 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
                  <h3 className="font-heading text-xl mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2 text-lg">•</span>
                        <span className="text-muted-foreground">{item}</span>
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
                <Card key={index} className="p-6 md:p-8 shadow-soft border border-border/50 hover:shadow-elegant transition-all duration-300">
                  <h3 className="font-heading text-xl mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent mr-2 text-lg">•</span>
                        <span className="text-muted-foreground">{item}</span>
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
