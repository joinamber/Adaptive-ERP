import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileDown, Mail, Link as LinkIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRfp } from "@/contexts/RfpContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import jsPDF from "jspdf";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const RfpPreview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { rfpData } = useRfp();
  const [copying, setCopying] = useState(false);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleExport = (format: string) => {
    if (format === 'pdf') {
      exportToPdf();
    } else if (format === 'docx') {
      exportToDocx();
    }
  };

  const exportToPdf = () => {
    try {
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(20);
      doc.text(rfpData.title || "Request for Proposal", 105, 20, { align: 'center' });
      
      // Add metadata
      doc.setFontSize(12);
      doc.text(`Organization: ${rfpData.organization || "Not specified"}`, 20, 40);
      doc.text(`Department: ${rfpData.department || "Not specified"}`, 20, 50);
      doc.text(`Release Date: ${formatDate(rfpData.timeline.releaseDate)}`, 20, 60);
      
      // Add sections with content
      let yPosition = 80;
      
      // Helper function to add section content with word wrapping
      const addSection = (title: string, content: string) => {
        doc.setFontSize(14);
        doc.text(title, 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(content || "Not specified", 170);
        doc.text(splitText, 20, yPosition);
        yPosition += splitText.length * 7 + 15;
        
        // Add new page if needed
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
      };
      
      // Add RFP sections
      addSection("Overview", rfpData.overview);
      addSection("Background", rfpData.background);
      addSection("Objectives", rfpData.objectives);
      addSection("Scope of Work", rfpData.scope);
      addSection("Requirements", rfpData.requirements);
      addSection("Evaluation Criteria", rfpData.evaluation);
      addSection("Budget Information", rfpData.budget);
      addSection("Terms and Conditions", rfpData.terms);
      addSection("Submission Instructions", rfpData.submission);
      
      // Save PDF
      const filename = `${rfpData.title || "RFP"}_${new Date().toISOString().split('T')[0]}.pdf`;
      doc.save(filename);
      
      toast({
        title: "PDF Exported Successfully",
        description: `Your RFP has been exported as ${filename}`,
      });
    } catch (error) {
      console.error("PDF export error:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting the PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const exportToDocx = () => {
    try {
      // Create a text version of the RFP for download
      let content = `# ${rfpData.title || "Request for Proposal"}\n\n`;
      content += `Organization: ${rfpData.organization || "Not specified"}\n`;
      content += `Department: ${rfpData.department || "Not specified"}\n`;
      content += `Release Date: ${formatDate(rfpData.timeline.releaseDate)}\n\n`;
      
      content += `## Contact Information\n`;
      content += `Name: ${rfpData.contact.name || "Not specified"}\n`;
      content += `Email: ${rfpData.contact.email || "Not specified"}\n`;
      content += `Phone: ${rfpData.contact.phone || "Not specified"}\n\n`;
      
      content += `## Timeline\n`;
      content += `Release Date: ${formatDate(rfpData.timeline.releaseDate)}\n`;
      content += `Submission Deadline: ${formatDate(rfpData.timeline.submissionDeadline)}\n`;
      content += `Decision Date: ${formatDate(rfpData.timeline.decisionDate)}\n\n`;
      
      content += `## 1. Overview\n${rfpData.overview || "Not specified"}\n\n`;
      content += `## 2. Background\n${rfpData.background || "Not specified"}\n\n`;
      content += `## 3. Objectives\n${rfpData.objectives || "Not specified"}\n\n`;
      content += `## 4. Scope of Work\n${rfpData.scope || "Not specified"}\n\n`;
      content += `## 5. Requirements\n${rfpData.requirements || "Not specified"}\n\n`;
      content += `## 6. Evaluation Criteria\n${rfpData.evaluation || "Not specified"}\n\n`;
      content += `## 7. Budget Information\n${rfpData.budget || "Not specified"}\n\n`;
      content += `## 8. Terms and Conditions\n${rfpData.terms || "Not specified"}\n\n`;
      content += `## 9. Submission Instructions\n${rfpData.submission || "Not specified"}\n\n`;
      
      // Create a download link
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const filename = `${rfpData.title || "RFP"}_${new Date().toISOString().split('T')[0]}.txt`;
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Document Exported Successfully",
        description: `Your RFP has been exported as ${filename}`,
      });
    } catch (error) {
      console.error("Text export error:", error);
      toast({
        title: "Export Failed",
        description: "There was an error exporting the document. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = (method: string) => {
    if (method === 'email') {
      shareViaEmail();
    } else if (method === 'link') {
      copyShareLink();
    }
  };

  const shareViaEmail = () => {
    try {
      const subject = encodeURIComponent(rfpData.title || "Request for Proposal");
      const body = encodeURIComponent(`Please find attached our Request for Proposal: ${rfpData.title || "RFP"}.

Organization: ${rfpData.organization || "Not specified"}
Department: ${rfpData.department || "Not specified"}
Contact: ${rfpData.contact.name || "Not specified"}
Email: ${rfpData.contact.email || "Not specified"}
Phone: ${rfpData.contact.phone || "Not specified"}

Submission Deadline: ${formatDate(rfpData.timeline.submissionDeadline)}
Decision Date: ${formatDate(rfpData.timeline.decisionDate)}

For full details, please review the attached document or contact us directly.`);
      
      window.open(`mailto:?subject=${subject}&body=${body}`);
      
      toast({
        title: "Email Client Opened",
        description: "Your email client has been opened with the RFP details.",
      });
    } catch (error) {
      console.error("Email share error:", error);
      toast({
        title: "Email Share Failed",
        description: "There was an error opening your email client. Please try again.",
        variant: "destructive",
      });
    }
  };

  const copyShareLink = () => {
    try {
      // In a real app, this would generate a shareable link to the RFP
      // For this MVP, we'll copy the current URL
      setCopying(true);
      navigator.clipboard.writeText(window.location.href).then(() => {
        toast({
          title: "Link Copied!",
          description: "Shareable link copied to clipboard.",
        });
        
        // Reset the button state after a delay
        setTimeout(() => setCopying(false), 2000);
      }).catch(err => {
        console.error("Clipboard error:", err);
        toast({
          title: "Copy Failed",
          description: "Failed to copy link to clipboard. Please try again.",
          variant: "destructive",
        });
        setCopying(false);
      });
    } catch (error) {
      console.error("Share link error:", error);
      toast({
        title: "Share Failed",
        description: "There was an error sharing the link. Please try again.",
        variant: "destructive",
      });
      setCopying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="rfp-container py-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Editor
            </button>
            <h1 className="text-3xl font-bold text-rfp-blue">
              Preview RFP
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={() => handleExport('pdf')}>
                    <FileDown className="h-4 w-4 mr-2" />
                    Export as PDF
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download as PDF document</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={() => handleExport('docx')}>
                    <FileDown className="h-4 w-4 mr-2" />
                    Export as DOCX
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Download as text document</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={() => handleShare('email')}>
                    <Mail className="h-4 w-4 mr-2" />
                    Share via Email
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open email client with RFP details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={() => handleShare('link')}>
                    {copying ? <Check className="h-4 w-4 mr-2" /> : <LinkIcon className="h-4 w-4 mr-2" />}
                    {copying ? "Copied!" : "Copy Share Link"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy shareable link to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 mb-8">
          <div className="border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-center mb-2">
              {rfpData.title || "[RFP Title]"}
            </h1>
            <p className="text-center text-gray-600 mb-4">
              Request for Proposal
            </p>
            <div className="flex flex-col md:flex-row justify-between text-sm">
              <p>
                <strong>Issued By:</strong> {rfpData.organization || "[Organization]"}
              </p>
              <p>
                <strong>Department:</strong> {rfpData.department || "[Department]"}
              </p>
              <p>
                <strong>Release Date:</strong> {formatDate(rfpData.timeline.releaseDate)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
              <p><strong>Name:</strong> {rfpData.contact.name || "[Contact Name]"}</p>
              <p><strong>Email:</strong> {rfpData.contact.email || "[Email]"}</p>
              <p><strong>Phone:</strong> {rfpData.contact.phone || "[Phone]"}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">Important Dates</h2>
              <p><strong>RFP Release:</strong> {formatDate(rfpData.timeline.releaseDate)}</p>
              <p><strong>Submission Deadline:</strong> {formatDate(rfpData.timeline.submissionDeadline)}</p>
              <p><strong>Decision Date:</strong> {formatDate(rfpData.timeline.decisionDate)}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">1. Overview</h2>
            <div className="whitespace-pre-line">
              {rfpData.overview || "[No overview provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">2. Background</h2>
            <div className="whitespace-pre-line">
              {rfpData.background || "[No background provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">3. Objectives</h2>
            <div className="whitespace-pre-line">
              {rfpData.objectives || "[No objectives provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">4. Scope of Work</h2>
            <div className="whitespace-pre-line">
              {rfpData.scope || "[No scope provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">5. Requirements</h2>
            <div className="whitespace-pre-line">
              {rfpData.requirements || "[No requirements provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">6. Evaluation Criteria</h2>
            <div className="whitespace-pre-line">
              {rfpData.evaluation || "[No evaluation criteria provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">7. Budget Information</h2>
            <div className="whitespace-pre-line">
              {rfpData.budget || "[No budget information provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">8. Terms and Conditions</h2>
            <div className="whitespace-pre-line">
              {rfpData.terms || "[No terms and conditions provided]"}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">9. Submission Instructions</h2>
            <div className="whitespace-pre-line">
              {rfpData.submission || "[No submission instructions provided]"}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-600">
            This is a preview of your RFP. Make any necessary changes in the editor before exporting.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RfpPreview;
