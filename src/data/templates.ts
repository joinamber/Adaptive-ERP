
import { Template } from "../contexts/RfpContext";

export const rfpTemplates: Template[] = [
  {
    id: "hr-automation",
    name: "HR Process Automation",
    icon: "user-cog",
    description: "Template for HR workflow automation projects including recruitment, onboarding, and performance management",
    sections: ["overview", "background", "objectives", "scope", "requirements", "evaluation", "budget", "terms", "submission"]
  },
  {
    id: "finance",
    name: "Finance System Implementation",
    icon: "landmark",
    description: "Template for finance and accounting system implementations including ERP, accounting software, and reporting tools",
    sections: ["overview", "background", "objectives", "scope", "requirements", "evaluation", "budget", "terms", "submission"]
  },
  {
    id: "marketing",
    name: "Marketing Automation",
    icon: "megaphone",
    description: "Template for marketing automation systems including CRM integration, email marketing, and campaign management",
    sections: ["overview", "background", "objectives", "scope", "requirements", "evaluation", "budget", "terms", "submission"]
  },
  {
    id: "logistics",
    name: "Supply Chain & Logistics",
    icon: "truck",
    description: "Template for supply chain management systems including inventory, warehouse, and transportation management",
    sections: ["overview", "background", "objectives", "scope", "requirements", "evaluation", "budget", "terms", "submission"]
  },
  {
    id: "it-services",
    name: "IT Services Procurement",
    icon: "server",
    description: "Template for IT service procurement including software development, system integration, and managed services",
    sections: ["overview", "background", "objectives", "scope", "requirements", "evaluation", "budget", "terms", "submission"]
  },
  {
    id: "custom",
    name: "Custom RFP",
    icon: "file-plus",
    description: "Start from scratch with a blank template that you can fully customize to your needs",
    sections: ["overview", "background", "objectives", "scope", "requirements", "evaluation", "budget", "terms", "submission"]
  }
];
