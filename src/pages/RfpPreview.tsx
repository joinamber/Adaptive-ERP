
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileDown, Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRfp } from "@/contexts/RfpContext";
import Header from "@/components/Header";

const RfpPreview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { rfpData } = useRfp();

  const formatDate = (dateString: string) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleExport = (format: string) => {
    // In a real app, this would generate and download the file
    toast({
      title: `Export as ${format.toUpperCase()}`,
      description: `Your RFP has been exported as a ${format.toUpperCase()} file.`
    });
  };

  const handleShare = (method: string) => {
    // In a real app, this would share the RFP
    toast({
      title: `Share via ${method}`,
      description: `Your RFP has been shared via ${method}.`
    });
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
            <Button variant="outline" onClick={() => handleExport('pdf')}>
              <FileDown className="h-4 w-4 mr-2" />
              Export as PDF
            </Button>
            <Button variant="outline" onClick={() => handleExport('docx')}>
              <FileDown className="h-4 w-4 mr-2" />
              Export as DOCX
            </Button>
            <Button variant="outline" onClick={() => handleShare('email')}>
              <Mail className="h-4 w-4 mr-2" />
              Share via Email
            </Button>
            <Button variant="outline" onClick={() => handleShare('link')}>
              <LinkIcon className="h-4 w-4 mr-2" />
              Copy Share Link
            </Button>
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
    </div>
  );
};

export default RfpPreview;
