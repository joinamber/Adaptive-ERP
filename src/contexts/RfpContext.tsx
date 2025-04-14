
import React, { createContext, useContext, useState } from "react";
import { rfpTemplates } from "../data/templates";

interface RfpContextType {
  rfpData: RfpData;
  updateRfpData: (data: Partial<RfpData>) => void;
  updateSection: (section: string, data: any) => void;
  resetRfp: () => void;
  currentTemplate: Template | null;
  setCurrentTemplate: (templateId: string) => void;
  generateContent: (section: string, prompt: string) => Promise<string>;
}

export interface Template {
  id: string;
  name: string;
  icon: string;
  description: string;
  sections: string[];
}

export interface RfpData {
  title: string;
  organization: string;
  department: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  timeline: {
    releaseDate: string;
    submissionDeadline: string;
    decisionDate: string;
  };
  overview: string;
  background: string;
  objectives: string;
  scope: string;
  requirements: string;
  evaluation: string;
  budget: string;
  terms: string;
  submission: string;
}

const defaultRfpData: RfpData = {
  title: "",
  organization: "",
  department: "",
  contact: {
    name: "",
    email: "",
    phone: "",
  },
  timeline: {
    releaseDate: new Date().toISOString().split("T")[0],
    submissionDeadline: "",
    decisionDate: "",
  },
  overview: "",
  background: "",
  objectives: "",
  scope: "",
  requirements: "",
  evaluation: "",
  budget: "",
  terms: "",
  submission: "",
};

const RfpContext = createContext<RfpContextType | undefined>(undefined);

export const RfpProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rfpData, setRfpData] = useState<RfpData>(defaultRfpData);
  const [currentTemplate, setTemplate] = useState<Template | null>(null);

  const updateRfpData = (data: Partial<RfpData>) => {
    setRfpData((prev) => ({ ...prev, ...data }));
  };

  const updateSection = (section: string, data: any) => {
    setRfpData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const resetRfp = () => {
    setRfpData(defaultRfpData);
    setTemplate(null);
  };

  const setCurrentTemplate = (templateId: string) => {
    const template = rfpTemplates.find((t) => t.id === templateId) || null;
    setTemplate(template);
  };

  // Simple mock AI content generation - in a real app, this would call an LLM API
  const generateContent = async (section: string, prompt: string): Promise<string> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock responses based on section
    const responses: Record<string, string> = {
      overview: `This Request for Proposal (RFP) outlines our organization's requirements for ${prompt}. We seek proposals from qualified vendors who can deliver comprehensive solutions that address our specific needs while offering competitive pricing and robust support.`,
      background: `Our organization has identified the need to implement ${prompt} to address operational challenges and improve efficiency. Current processes rely on manual workflows that are time-consuming and prone to errors. This initiative aims to modernize our approach and leverage technological solutions to streamline operations.`,
      objectives: `The primary objectives of this project are to:\n\n1. Implement a ${prompt} solution that integrates with existing systems\n2. Reduce manual processing time by at least 50%\n3. Improve accuracy and compliance with industry regulations\n4. Provide comprehensive reporting and analytics capabilities\n5. Ensure scalability to accommodate future growth`,
      scope: `The scope of this project includes:\n\n- Analysis of current workflows and processes\n- Design and implementation of ${prompt} solution\n- Integration with existing enterprise systems\n- Data migration from legacy systems\n- User training and documentation\n- Post-implementation support for 6 months`,
      requirements: `Key requirements for this ${prompt} solution include:\n\n1. User-friendly interface accessible through web and mobile platforms\n2. Role-based access controls and permissions\n3. Automated workflow capabilities with approval routing\n4. Comprehensive audit logging and reporting features\n5. Enterprise-grade security measures including data encryption\n6. Compliance with relevant industry regulations`,
      evaluation: `Proposals will be evaluated based on the following criteria:\n\n- Technical compliance with requirements (30%)\n- Cost effectiveness and value for money (25%)\n- Vendor experience and track record (20%)\n- Implementation approach and timeline (15%)\n- Post-implementation support and maintenance (10%)`,
      budget: `The anticipated budget range for this project is $100,000 to $150,000, including implementation, licensing for the first year, and initial training. Vendors should provide detailed cost breakdowns for:\n\n- Software licensing\n- Implementation services\n- Training\n- Ongoing support and maintenance`,
      terms: `The contract term will be for an initial period of 36 months with options for extension. Payment terms include:\n\n- 30% upon contract signature\n- 40% upon system implementation and acceptance\n- 30% upon completion of training and handover`,
      submission: `Proposals must be submitted electronically to rfp@company.com by the submission deadline. All proposals should include:\n\n1. Executive summary\n2. Detailed response to requirements\n3. Project approach and timeline\n4. Pricing structure\n5. Company profile and relevant experience\n6. References from similar implementations`
    };
    
    return responses[section] || `Generated content for ${section} based on: ${prompt}`;
  };

  return (
    <RfpContext.Provider
      value={{
        rfpData,
        updateRfpData,
        updateSection,
        resetRfp,
        currentTemplate,
        setCurrentTemplate,
        generateContent,
      }}
    >
      {children}
    </RfpContext.Provider>
  );
};

export const useRfp = () => {
  const context = useContext(RfpContext);
  if (context === undefined) {
    throw new Error("useRfp must be used within a RfpProvider");
  }
  return context;
};
