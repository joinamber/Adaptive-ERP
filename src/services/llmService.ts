import { rfpKnowledgeBase } from '@/data/rfpKnowledgeBase';

class LLMService {
  private isAvailable = false;

  async initialize() {
    // Check if Netlify function is available
    try {
      const response = await fetch('/.netlify/functions/groq-proxy', {
        method: 'OPTIONS'
      });
      this.isAvailable = response.status === 200;
    } catch (error) {
      console.log('Netlify function not available, using mock content');
      this.isAvailable = false;
    }
  }

  async generateContent(section: string, context: any, userPrompt?: string): Promise<string> {
    if (!this.isAvailable) {
      return this.generateMockContent(section, context, userPrompt);
    }

    try {
      return await this.generateNetlifyContent(section, context, userPrompt);
    } catch (error) {
      console.error('Netlify function failed, falling back to mock:', error);
      return this.generateMockContent(section, context, userPrompt);
    }
  }

  private async generateNetlifyContent(section: string, context: any, userPrompt?: string): Promise<string> {
    const { basicInfo } = context;
    
    const systemPrompt = this.getSystemPrompt(section);
    const userMessage = this.buildUserMessage(section, basicInfo, userPrompt);

    const response = await fetch('/.netlify/functions/groq-proxy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        model: 'llama3-8b-8192',
        temperature: 0.7,
        max_tokens: 2500,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`Netlify function failed: ${response.status}`);
    }

    const result = await response.json();
    return result.content || this.generateMockContent(section, context, userPrompt);
  }

  private getSystemPrompt(section: string): string {
    const basePrompt = "You are a professional RFP writing expert. Generate well-structured, comprehensive content for procurement documents. Use clear headings, bullet points, and professional language. Do not use markdown formatting (no # symbols).";
    
    switch (section) {
      case 'overview':
        return `${basePrompt} Focus on creating a compelling project overview that clearly states the purpose, expected outcomes, and strategic importance.`;
      case 'background':
        return `${basePrompt} Explain the business context, current challenges, and organizational drivers for this RFP.`;
      case 'objectives':
        return `${basePrompt} Define specific, measurable objectives using SMART criteria. Include both functional and business objectives.`;
      case 'scope':
        return `${basePrompt} Clearly define what is included and excluded from the project scope. Break down into phases and deliverables.`;
      case 'requirements':
        return `${basePrompt} Create detailed technical requirements including functional, non-functional, integration, and compliance requirements.`;
      case 'evaluation':
        return `${basePrompt} Develop weighted evaluation criteria for vendor selection with clear scoring methodology.`;
      case 'budget':
        return `${basePrompt} Provide budget ranges, cost categories, and payment terms. Be realistic and comprehensive.`;
      case 'terms':
        return `${basePrompt} Generate standard contract terms including duration, payment, IP rights, and liability considerations.`;
      case 'submission':
        return `${basePrompt} Create clear submission instructions including format requirements, deadlines, and evaluation timeline.`;
      default:
        return basePrompt;
    }
  }

  private buildUserMessage(section: string, basicInfo: any, userPrompt?: string): string {
    let message = `Generate ${section} content for an RFP titled "${basicInfo?.title || 'Technology Solution'}" for ${basicInfo?.organization || 'the organization'}.`;
    
    if (basicInfo?.department) {
      message += ` This is a ${basicInfo.department} department initiative.`;
    }
    
    if (userPrompt) {
      message += ` Specific requirements: ${userPrompt}`;
    }
    
    message += ` Make the content professional, comprehensive, and tailored to this specific project.`;
    
    return message;
  }

  private generateMockContent(section: string, context: any, userPrompt?: string): string {
    const { basicInfo } = context;
    
    switch (section) {
      case 'overview':
        return `Project Overview

This Request for Proposal (RFP) is issued by ${basicInfo?.organization || '[Organization]'} for ${basicInfo?.title || '[Project Title]'}. This initiative represents a strategic investment in modernizing our operational capabilities and enhancing service delivery.

Purpose
The primary purpose of this RFP is to identify and engage a qualified vendor to deliver a comprehensive solution that addresses our specific business requirements and technical needs.

Expected Outcomes
- Improved operational efficiency and productivity
- Enhanced user experience and satisfaction
- Scalable solution that grows with our organization
- Reduced operational costs and improved ROI
- Compliance with industry standards and regulations

Strategic Importance
This project aligns with our organization's digital transformation strategy and will serve as a foundation for future technology initiatives.`;

      case 'background':
        return `Background

${basicInfo?.organization || '[Organization]'}'s ${basicInfo?.department || '[Department]'} department has identified the need to implement ${basicInfo?.title || 'this solution'} to address current operational challenges and position the organization for future growth.

Current State
Our current processes rely heavily on manual workflows and legacy systems that limit our ability to:
- Scale operations effectively
- Provide real-time visibility into key metrics
- Maintain data accuracy and consistency
- Meet evolving compliance requirements

Business Drivers
- Increasing demand for digital services
- Need for improved operational efficiency
- Regulatory compliance requirements
- Competitive pressure to innovate
- Cost optimization initiatives

Organizational Context
This initiative is part of our broader digital transformation strategy and has executive sponsorship from the ${basicInfo?.department || '[Department]'} leadership team.`;

      case 'objectives':
        return `Project Objectives

The following objectives will guide the selection and implementation of the ${basicInfo?.title || 'solution'}:

Primary Objectives
1. **Operational Efficiency**: Reduce manual processing time by at least 50% and eliminate redundant workflows
2. **User Experience**: Provide an intuitive, accessible interface that improves user satisfaction scores
3. **Data Quality**: Ensure 99.9% data accuracy and real-time access to critical information
4. **Scalability**: Support 100% growth in transaction volume without performance degradation
5. **Compliance**: Meet all relevant industry regulations and security standards

Secondary Objectives
- Integration with existing enterprise systems
- Mobile accessibility for remote users
- Advanced reporting and analytics capabilities
- Automated approval workflows
- Audit trail and compliance reporting

Success Metrics
- User adoption rate > 90% within 6 months
- Processing time reduction of 50%+
- System uptime > 99.5%
- Cost savings of 20% within first year`;

      case 'scope':
        return `Scope of Work

Included in Scope
The selected vendor will be responsible for:

Phase 1: Analysis & Design (Months 1-2)
- Current state assessment and gap analysis
- Solution architecture design
- Integration planning with existing systems
- User experience design and workflows
- Technical specifications documentation

Phase 2: Implementation (Months 3-6)
- System configuration and customization
- Data migration from legacy systems
- Integration development and testing
- User acceptance testing coordination
- Security testing and compliance validation

Phase 3: Deployment & Training (Months 7-8)
- Production deployment and go-live support
- End-user training delivery
- Documentation and knowledge transfer
- Post-go-live support and optimization

Deliverables
- Detailed project plan and timeline
- Technical architecture documentation
- Configured and tested system
- User training materials and sessions
- Operations and maintenance documentation

Excluded from Scope
- Hardware procurement and installation
- Network infrastructure changes
- Third-party software licensing (unless specified)
- Ongoing operations beyond initial support period`;

      case 'requirements':
        return `Technical Requirements

Based on the project requirements${userPrompt ? ` and specific needs: "${userPrompt}"` : ''}, the solution must meet the following technical specifications:

Functional Requirements
- **User Management**: Role-based access control with single sign-on (SSO) integration
- **Workflow Automation**: Configurable business process automation with approval routing
- **Data Management**: Comprehensive data entry, validation, and reporting capabilities
- **Integration**: REST API support for enterprise system integration
- **Reporting**: Real-time dashboards and customizable report generation

Non-Functional Requirements
- **Performance**: Page load times < 3 seconds, support for 500+ concurrent users
- **Availability**: 99.5% uptime SLA with 24/7 monitoring
- **Security**: Industry-standard encryption, regular security updates, penetration testing
- **Scalability**: Horizontal scaling capability to handle 2x current volume
- **Usability**: Intuitive interface requiring minimal training, mobile responsive design

Technical Specifications
- **Platform**: Cloud-native solution with multi-tenant architecture
- **Database**: Enterprise-grade database with backup and recovery capabilities
- **APIs**: RESTful web services with comprehensive documentation
- **Authentication**: Support for LDAP/Active Directory integration
- **Compliance**: SOC 2 Type II, GDPR, and relevant industry compliance

Integration Requirements
- Single sign-on (SSO) with existing identity management system
- Real-time data synchronization with ERP systems
- Email and notification system integration
- Document management system connectivity`;

      case 'evaluation':
        return `Evaluation Criteria

Proposals will be evaluated using the following weighted criteria:

Technical Compliance (35%)
- **Functional Requirements Coverage** (15%): Completeness of solution features
- **Technical Architecture** (10%): Scalability, security, and performance design
- **Integration Capabilities** (10%): Ability to integrate with existing systems

Commercial Evaluation (25%)
- **Total Cost of Ownership** (15%): Initial and ongoing costs over 3 years
- **Pricing Model** (10%): Flexibility and scalability of pricing structure

Vendor Qualifications (20%)
- **Company Stability** (7%): Financial strength and market position
- **Implementation Experience** (8%): Track record with similar projects
- **Reference Customers** (5%): Satisfaction from comparable implementations

Implementation Approach (15%)
- **Project Methodology** (8%): Approach to project management and delivery
- **Timeline Realism** (4%): Feasibility of proposed implementation schedule
- **Risk Management** (3%): Identification and mitigation strategies

Support & Maintenance (5%)
- **Support Model** (3%): Availability and quality of ongoing support
- **Training Program** (2%): Comprehensiveness of user training offerings

Scoring Method
Each criterion will be scored on a scale of 1-10, with weighted averages calculated to determine the overall score. A minimum score of 7.0 is required for consideration.`;

      case 'budget':
        return `Budget Information

Budget Range
The anticipated budget for this project is **$150,000 - $250,000** for the initial implementation, with annual operating costs estimated at **$30,000 - $50,000**.

Cost Categories
Vendors must provide detailed pricing for:

Initial Implementation
- **Software Licensing** (Year 1): Base platform license and user licenses
- **Professional Services**: Implementation, configuration, and customization
- **Data Migration**: Legacy system data extraction and migration services
- **Training**: End-user and administrator training programs
- **Project Management**: Dedicated project management resources

Ongoing Costs (Annual)
- **Software Maintenance**: License renewals and platform maintenance
- **Support Services**: Technical support and help desk services
- **Updates & Upgrades**: Platform updates and feature enhancements
- **Additional Services**: Optional consulting and enhancement services

Payment Terms
- **30%** upon contract execution and project initiation
- **40%** upon successful completion of system implementation and testing
- **20%** upon completion of training and user acceptance
- **10%** upon final project closure and knowledge transfer

Cost Considerations
- All prices should be inclusive of taxes and fees
- Provide fixed pricing valid for 90 days from proposal submission
- Include any applicable discounts or volume pricing
- Specify any costs not included in the proposal`;

      case 'terms':
        return `Terms and Conditions

Contract Terms
- **Contract Duration**: Initial term of 36 months with automatic renewal options
- **Performance Period**: Implementation to be completed within 8 months of contract execution
- **Service Level Agreements**: Minimum 99.5% uptime with response time commitments
- **Termination Rights**: Either party may terminate with 90 days written notice

Payment Terms
- **Net Payment**: 30 days from receipt of approved invoices
- **Milestone Payments**: Payments tied to specific deliverable acceptance
- **Late Payment**: 1.5% monthly charge on overdue amounts
- **Disputed Amounts**: Good faith resolution process within 30 days

Intellectual Property
- **Vendor IP**: Vendor retains rights to pre-existing intellectual property
- **Custom Development**: Rights to custom developments as specified in contract
- **Data Ownership**: Client retains full ownership of all data and content
- **License Rights**: Perpetual license to use delivered software and systems

Warranties and Liability
- **Performance Warranty**: 12-month warranty on all delivered services
- **Professional Indemnity**: Minimum $2M professional liability insurance
- **Limitation of Liability**: Mutual liability limitations as agreed
- **Force Majeure**: Standard force majeure protections for both parties

Compliance Requirements
- **Data Protection**: Full compliance with GDPR and applicable privacy laws
- **Security Standards**: Adherence to industry security best practices
- **Audit Rights**: Client right to audit security and compliance measures
- **Regulatory Compliance**: Vendor responsibility for all applicable regulations`;

      case 'submission':
        return `Submission Instructions

Proposal Requirements
Your proposal must include the following components:

Executive Summary (5 pages maximum)
- Overview of your understanding of the project
- Summary of your proposed solution approach
- Key differentiators and value proposition
- High-level implementation timeline

Technical Response (25 pages maximum)
- Detailed response to each functional requirement
- Technical architecture and design approach
- Integration methodology and capabilities
- Security and compliance measures
- Performance and scalability considerations

Project Approach (15 pages maximum)
- Implementation methodology and project phases
- Project timeline with key milestones
- Risk assessment and mitigation strategies
- Quality assurance and testing approach
- Change management and training plan

Commercial Proposal (10 pages maximum)
- Detailed pricing breakdown by category
- Payment schedule aligned with milestones
- Total cost of ownership analysis
- Pricing validity period and terms

Company Information (10 pages maximum)
- Company background and financial stability
- Relevant project experience and case studies
- Key personnel and their qualifications
- Customer references (minimum 3)

Submission Process
- **Deadline**: ${context.basicInfo?.timeline?.submissionDeadline || '[Submission Deadline]'} by 5:00 PM local time
- **Method**: Electronic submission to ${context.basicInfo?.contact?.email || 'rfp@company.com'}
- **Format**: PDF format with clear section divisions
- **File Naming**: [Company Name]_${basicInfo?.title?.replace(/\s+/g, '_') || 'RFP'}_Proposal.pdf

Evaluation Timeline
- **Proposal Review**: 2 weeks from submission deadline
- **Vendor Presentations**: Selected vendors will be invited for presentations
- **Final Selection**: Award notification within 30 days of submission deadline
- **Contract Execution**: Target contract signing within 45 days

Contact Information
**Primary Contact**: ${context.basicInfo?.contact?.name || '[Contact Name]'}
**Email**: ${context.basicInfo?.contact?.email || '[Email]'}
**Phone**: ${context.basicInfo?.contact?.phone || '[Phone]'}

Questions must be submitted in writing by email no later than one week prior to the submission deadline.`;

      default:
        return `Generated content for ${section} section based on provided context and requirements.`;
    }
  }
}

export const llmService = new LLMService();