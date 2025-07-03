export const rfpKnowledgeBase = {
  industryBestPractices: {
    overview: [
      "Clearly state the purpose and expected outcomes of the project",
      "Include high-level requirements and scope boundaries",
      "Mention compliance requirements and industry standards",
      "Specify the target timeline and key milestones"
    ],
    background: [
      "Explain the business problem or opportunity driving this RFP",
      "Describe current state and pain points",
      "Reference any existing systems or processes",
      "Include relevant organizational context"
    ],
    objectives: [
      "Use SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound)",
      "Prioritize objectives by importance",
      "Include both functional and non-functional objectives",
      "Align objectives with business strategy"
    ],
    scope: [
      "Define what is included and explicitly state what is excluded",
      "Break down work into phases if applicable",
      "Specify deliverables and acceptance criteria",
      "Include integration requirements with existing systems"
    ]
  },
  
  itProcurementTemplates: {
    technicalRequirements: [
      "System architecture and technology stack requirements",
      "Performance, scalability, and availability requirements",
      "Security and compliance requirements",
      "Integration capabilities and API requirements",
      "User interface and user experience requirements",
      "Data migration and management requirements",
      "Backup and disaster recovery requirements"
    ],
    evaluationCriteria: [
      "Technical compliance with requirements (30-40%)",
      "Cost effectiveness and total cost of ownership (20-30%)",
      "Vendor experience and track record (15-25%)",
      "Implementation approach and timeline (10-20%)",
      "Post-implementation support and maintenance (5-15%)"
    ],
    budgetConsiderations: [
      "Software licensing costs (initial and ongoing)",
      "Implementation and professional services",
      "Training and change management",
      "Hardware and infrastructure requirements",
      "Ongoing support and maintenance",
      "Contingency for scope changes"
    ]
  },
  
  commonSections: {
    terms: [
      "Contract duration and renewal options",
      "Payment terms and milestones",
      "Intellectual property rights",
      "Service level agreements",
      "Termination clauses",
      "Liability and insurance requirements"
    ],
    submission: [
      "Proposal format and structure requirements",
      "Required documentation and certifications",
      "Submission deadline and method",
      "Evaluation process and timeline",
      "Contact information for questions",
      "Presentation or demo requirements"
    ]
  },
  
  contextPrompts: {
    generateOverview: (basicInfo: any) => 
      `Generate a professional RFP project overview for ${basicInfo.organization}'s ${basicInfo.title} project. Include the purpose, expected outcomes, high-level scope, and strategic importance. Keep it concise and professional.`,
    
    generateBackground: (basicInfo: any) => 
      `Create a background section explaining why ${basicInfo.organization} is issuing this RFP for ${basicInfo.title}. Include current challenges, business drivers, and organizational context. Make it specific to ${basicInfo.department}.`,
    
    generateObjectives: (basicInfo: any) => 
      `List specific, measurable objectives for ${basicInfo.title} at ${basicInfo.organization}. Include both functional and business objectives. Make them SMART (Specific, Measurable, Achievable, Relevant, Time-bound).`,
    
    generateScope: (basicInfo: any) => 
      `Define the scope of work for ${basicInfo.title} including what is included, what is excluded, key deliverables, and phases. Consider ${basicInfo.department}'s specific needs.`,
    
    generateRequirements: (basicInfo: any, userPrompt: string) => 
      `Based on the user's requirements: "${userPrompt}", generate detailed technical requirements for ${basicInfo.title} at ${basicInfo.organization}. Include functional, non-functional, integration, and compliance requirements.`,
    
    generateEvaluation: (basicInfo: any, userPrompt: string) => 
      `Create evaluation criteria for selecting a vendor for ${basicInfo.title}. Base it on "${userPrompt}" and include weighted scoring criteria for technical, commercial, and vendor-related factors.`,
    
    generateBudget: (basicInfo: any, userPrompt: string) => 
      `Provide budget information and cost structure guidance for ${basicInfo.title} based on "${userPrompt}". Include cost categories, payment terms, and budget ranges if appropriate.`,
    
    generateTerms: (basicInfo: any) => 
      `Generate standard terms and conditions for ${basicInfo.title} RFP including contract duration, payment terms, intellectual property, service levels, and liability considerations.`,
    
    generateSubmission: (basicInfo: any) => 
      `Create submission instructions for ${basicInfo.title} RFP including proposal format, required documents, submission process, evaluation timeline, and contact information for ${basicInfo.contact.name} at ${basicInfo.contact.email}.`
  }
};