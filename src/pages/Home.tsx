
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { X } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-blue-700 text-white">
        <div className="rfp-container py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            AI TRANSFORMING<br />ERP SYSTEMS
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Reimagining enterprise resource planning from first principles with adaptive
            intelligence
          </p>
          <Button 
            asChild 
            className="bg-[#c5ff00] hover:bg-[#d9ff66] text-black text-lg py-6 px-8"
          >
            <Link to="/">GET STARTED</Link>
          </Button>
        </div>
        <div className="bg-[#c5ff00] h-12 md:h-16 w-full"></div>
      </div>

      {/* How AI Changes the Game Section */}
      <section className="py-16 md:py-24">
        <div className="rfp-container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            HOW AI CHANGES THE GAME
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-lg text-center">
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Cost Reduction</h3>
              <p className="text-gray-700">
                Significant cost reduction in building and shipping software
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg text-center">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Proactive AI Agents</h3>
              <p className="text-gray-700">
                AI agents can proactively identify opportunities and risks
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg text-center">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Industry-Specific Intelligence</h3>
              <p className="text-gray-700">
                Vertical-specific AI models can encode industry best practices
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems with Traditional ERP */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="rfp-container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            THE PROBLEMS WITH TRADITIONAL ERP
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <X className="text-blue-600 h-8 w-8 mr-3 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-blue-600">Legacy Systems</h3>
              </div>
              <p className="text-gray-700">
                The ERP market is massive ($55B+) but dominated by legacy systems designed before the AI revolution
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <X className="text-blue-600 h-8 w-8 mr-3 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-blue-600">Complex & Rigid</h3>
              </div>
              <p className="text-gray-700">
                Traditional ERPs are complex, rigid, and often fail to deliver on promises of efficiency
              </p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <X className="text-blue-600 h-8 w-8 mr-3 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-blue-600">Implementation Failures</h3>
              </div>
              <p className="text-gray-700">
                Implementation failures and massive cost overruns are common
              </p>
            </Card>
            
            <Card className="p-8 shadow-lg">
              <div className="flex items-start mb-4">
                <X className="text-blue-600 h-8 w-8 mr-3 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-blue-600">Siloed Data</h3>
              </div>
              <p className="text-gray-700">
                Data often remains siloed despite promises of integration
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core AI Technologies */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="rfp-container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            CORE AI TECHNOLOGIES TRANSFORMING ERP
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#c5ff00] mb-6">Foundation Models Integration</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Natural language UI
                </li>
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Conversational prompts
                </li>
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Contextual recommendations
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#c5ff00] mb-6">AI Agents & Orchestration</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Autonomous workflow
                </li>
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Dynamic adaptation
                </li>
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Cross-system coordination
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-600 p-8 rounded-lg md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-[#c5ff00] mb-6">Knowledge Graph Technologies</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Semantic data integration
                </li>
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Causal reasoning capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-[#c5ff00] mr-2">•</span>
                  Institutional knowledge capture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas of Transformation */}
      <section className="py-16 md:py-24">
        <div className="rfp-container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            KEY AREAS OF TRANSFORMATION
          </h2>
          
          <div className="flex justify-center mb-12">
            <div className="border-b-2 border-gray-200 inline-flex">
              <button className="px-4 py-2 font-medium">Banking & Finance</button>
              <button className="px-4 py-2 font-medium border-b-2 border-blue-600 -mb-0.5 text-blue-600">
                Ecommerce Operations
              </button>
              <button className="px-4 py-2 font-medium">Logistics & Supply Chain</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Intelligent Product Catalog</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c5ff00] mr-2 text-lg">•</span>
                  <span>Auto product classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5ff00] mr-2 text-lg">•</span>
                  <span>Improve search relevancy</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Customer Service Automation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c5ff00] mr-2 text-lg">•</span>
                  <span>Full context awareness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5ff00] mr-2 text-lg">•</span>
                  <span>Reduction in manual ticket handling</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Return Processing</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#c5ff00] mr-2 text-lg">•</span>
                  <span>Return classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c5ff00] mr-2 text-lg">•</span>
                  <span>Authenticity verification</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-24 bg-[#c5ff00]">
        <div className="rfp-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
            "The best way to predict the future is to invent it."
          </h2>
          <p className="text-xl font-medium text-blue-700">- Alan Kay</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="rfp-container text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
            Ready to Transform Your ERP Experience?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Join us in reimagining enterprise systems with AI at their core.
          </p>
          <Button 
            className="bg-[#c5ff00] hover:bg-[#d9ff66] text-black text-lg py-6 px-8"
          >
            CONTACT US
          </Button>
        </div>
      </section>

      {/* Custom Footer */}
      <footer className="bg-blue-700 text-white py-6">
        <div className="rfp-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-lg">Adaptive Intelligence</p>
            </div>
            
            <div className="mb-4 md:mb-0 text-center">
              <p className="text-sm text-blue-200">
                © {new Date().getFullYear()} Adaptive Intelligence. All rights reserved.
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-sm">
                A project by Co.Alt Lab<br />
                <a href="mailto:hello@coaltlab.com" className="text-blue-200 hover:text-white">
                  hello@coaltlab.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
