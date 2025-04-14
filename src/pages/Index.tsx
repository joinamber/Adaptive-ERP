import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Landmark, 
  UserCog, 
  Megaphone, 
  Truck, 
  Server, 
  FilePlus,
  ArrowRight,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRfp } from "@/contexts/RfpContext";
import Header from "@/components/Header";
import { rfpTemplates } from "@/data/templates";

const iconMap: Record<string, React.ReactNode> = {
  "landmark": <Landmark className="h-8 w-8 text-primary" />,
  "user-cog": <UserCog className="h-8 w-8 text-primary" />,
  "megaphone": <Megaphone className="h-8 w-8 text-primary" />,
  "truck": <Truck className="h-8 w-8 text-primary" />,
  "server": <Server className="h-8 w-8 text-primary" />,
  "file-plus": <FilePlus className="h-8 w-8 text-primary" />
};

const customTemplateIndex = rfpTemplates.findIndex(template => template.name === "Custom RFP RFP");
if (customTemplateIndex !== -1) {
  rfpTemplates[customTemplateIndex].name = "Custom RFP";
}

const Index = () => {
  const navigate = useNavigate();
  const { setCurrentTemplate, resetRfp } = useRfp();

  const handleTemplateSelect = (templateId: string) => {
    resetRfp();
    setCurrentTemplate(templateId);
    navigate(`/editor/${templateId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="rfp-container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-rfp-blue mb-4">
              AI-Powered RFP Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create professional Request for Proposal documents in minutes with our 
              intelligent templates and AI-powered content suggestions.
            </p>
          </div>
          
          <section className="mb-12">
            <h2 className="section-heading text-center mb-8">
              Choose a template to get started
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rfpTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      {iconMap[template.icon]}
                      <CardTitle>{template.name}</CardTitle>
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      className="w-full mt-2" 
                      onClick={() => handleTemplateSelect(template.id)}
                    >
                      Select Template
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="section-heading mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Select a Template</h3>
                <p className="text-gray-600">
                  Choose from industry-specific templates designed for different business needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fill in Details</h3>
                <p className="text-gray-600">
                  Complete the guided form with your project details, leveraging AI suggestions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-2xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Export & Share</h3>
                <p className="text-gray-600">
                  Review your RFP, make final edits, and export in your preferred format.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-rfp-blue text-white py-8">
        <div className="rfp-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                <span className="font-semibold">RFP Craft</span>
              </p>
              <p className="text-sm mt-1 text-blue-100">
                AI-Powered RFP Generator for Business Professionals
              </p>
            </div>
            <p className="text-sm text-blue-100">
              © {new Date().getFullYear()} RFP Craft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
