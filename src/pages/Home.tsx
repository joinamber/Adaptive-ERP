import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import { X, Linkedin, Twitter } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const transformationData = {
  banking: {
    title: "Banking & Finance",
    cards: [
      {
        title: "Intelligent Financial Close",
        items: [
          "Auto-reconciliation",
          "Reduction in manual matching tasks",
          "Faster close cycles"
        ]
      },
      {
        title: "Treasury & Cash Management",
        items: [
          "Dynamic cash flow forecasting",
          "Lower short-term borrowing costs"
        ]
      },
      {
        title: "Regulatory Compliance",
        items: [
          "Continuous monitoring",
          "Automatically identifies affected processes"
        ]
      }
    ]
  },
  ecommerce: {
    title: "Ecommerce Operations",
    cards: [
      {
        title: "Intelligent Product Catalog",
        items: [
          "Auto product classification",
          "Improve search relevancy"
        ]
      },
      {
        title: "Customer Service Automation",
        items: [
          "Full context awareness",
          "Reduction in manual ticket handling"
        ]
      },
      {
        title: "Return Processing",
        items: [
          "Return classification",
          "Authenticity verification"
        ]
      }
    ]
  },
  logistics: {
    title: "Logistics & Supply Chain",
    cards: [
      {
        title: "Supply Chain Risk Management",
        items: [
          "Monitor supply chain vulnerabilities",
          "Recommend optimal approaches"
        ]
      },
      {
        title: "Demand Sensing & Forecasting",
        items: [
          "Unstructured market signals",
          "Visual data analysis"
        ]
      },
      {
        title: "Intelligent Inventory Optimization",
        items: [
          "Understand supply constraints",
          "Initiate procurement actions"
        ]
      }
    ]
  }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const scrollToBottomBanner = () => {
    bottomSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToRfp = () => {
    navigate("/rfp");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-adaptive-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-adaptive-primary text-white">
        <div className="rfp-container py-16 md:py-32 text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8">
            AI TRANSFORMING<br />ERP SYSTEMS
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 px-4 md:px-0">
            Reimagining enterprise resource planning from first principles with adaptive
            intelligence
          </p>
          <Button 
            onClick={scrollToBottomBanner}
            className="bg-adaptive-secondary hover:bg-opacity-80 text-adaptive-primary text-lg py-5 md:py-6 px-6 md:px-8"
          >
            GET STARTED
          </Button>
        </div>
        <div className="bg-adaptive-secondary h-12 md:h-16 w-full"></div>
      </div>

      {/* How AI Changes the Game Section */}
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

      {/* Problems with Traditional ERP */}
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

      {/* Core AI Technologies */}
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

      {/* Key Areas of Transformation */}
      <section className="py-12 md:py-24 px-4 md:px-0">
        <div className="rfp-container">
          <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-adaptive-primary">
            KEY AREAS OF TRANSFORMATION
          </h2>
          
          <Tabs 
            defaultValue="ecommerce" 
            value={activeTab} 
            onValueChange={setActiveTab}
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

      {/* Quote Section */}
      <section className="py-12 md:py-24 bg-adaptive-secondary px-4 md:px-0">
        <div className="rfp-container text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-adaptive-primary mb-3 md:mb-4">
            "The best way to predict the future is to invent it."
          </h2>
          <p className="text-lg md:text-xl font-medium text-adaptive-primary">- Alan Kay</p>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={bottomSectionRef} className="py-12 md:py-24 px-4 md:px-0">
        <div className="rfp-container text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-adaptive-primary mb-4 md:mb-6">
            Ready to Transform Your ERP Experience?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
            Join us in reimagining enterprise systems with AI at their core.
          </p>
          <Button 
            onClick={navigateToRfp}
            className="bg-adaptive-cta hover:bg-opacity-90 text-white text-lg py-5 md:py-6 px-6 md:px-8"
          >
            CREATE YOUR RFP
          </Button>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-adaptive-primary text-white py-6">
        <div className="rfp-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-lg">Adaptive Intelligence</p>
            </div>
            
            <div className="mb-4 md:mb-0 text-center">
              <p className="text-sm text-adaptive-accent">
                © {new Date().getFullYear()} Adaptive Intelligence. All rights reserved.
              </p>
            </div>
            
            <div className="text-right flex flex-col items-center md:items-end">
              <p className="text-sm mb-2">
                A project by Co.Alt Lab<br />
                <a href="mailto:hello@coaltlab.com" className="text-adaptive-accent hover:text-white">
                  hello@coaltlab.com
                </a>
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="http://linkedin.com/company/coalt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-adaptive-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://x.com/coaltlab" target="_blank" rel="noopener noreferrer" className="text-white hover:text-adaptive-secondary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
