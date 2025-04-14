
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useRfp } from "@/contexts/RfpContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentGenerator from "@/components/ContentGenerator";

const RfpEditor = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    rfpData, 
    updateRfpData, 
    updateSection, 
    currentTemplate, 
    setCurrentTemplate,
    generateContent
  } = useRfp();

  useEffect(() => {
    if (templateId && (!currentTemplate || currentTemplate.id !== templateId)) {
      setCurrentTemplate(templateId);
    }
  }, [templateId, currentTemplate, setCurrentTemplate]);

  const handlePreview = () => {
    navigate("/rfp/preview");
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft saved",
      description: "Your RFP has been saved as a draft."
    });
  };

  if (!currentTemplate) {
    return <div className="p-8 text-center">Loading template...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="rfp-container py-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div>
            <button 
              onClick={() => navigate("/rfp")}
              className="flex items-center text-gray-600 hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Templates
            </button>
            <h1 className="text-3xl font-bold text-rfp-blue">
              {currentTemplate.name} RFP
            </h1>
            <p className="text-gray-600 mt-1">
              {currentTemplate.description}
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline" onClick={handleSaveDraft}>
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            <Button onClick={handlePreview}>
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>

        <Tabs defaultValue="basic-info" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic-info">Basic Information</TabsTrigger>
            <TabsTrigger value="content">Content Sections</TabsTrigger>
            <TabsTrigger value="requirements">Requirements & Evaluation</TabsTrigger>
          </TabsList>

          {/* Basic Information Tab */}
          <TabsContent value="basic-info">
            <Card>
              <CardHeader>
                <CardTitle>RFP Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">RFP Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Enter RFP title" 
                    value={rfpData.title}
                    onChange={(e) => updateRfpData({ title: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name</Label>
                    <Input 
                      id="organization" 
                      placeholder="Your company name" 
                      value={rfpData.organization}
                      onChange={(e) => updateRfpData({ organization: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input 
                      id="department" 
                      placeholder="Issuing department" 
                      value={rfpData.department}
                      onChange={(e) => updateRfpData({ department: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-md font-medium">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact_name">Contact Name</Label>
                      <Input 
                        id="contact_name" 
                        placeholder="Primary contact" 
                        value={rfpData.contact.name}
                        onChange={(e) => updateRfpData({ 
                          contact: { ...rfpData.contact, name: e.target.value } 
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact_email">Email</Label>
                      <Input 
                        id="contact_email" 
                        type="email" 
                        placeholder="Email address" 
                        value={rfpData.contact.email}
                        onChange={(e) => updateRfpData({ 
                          contact: { ...rfpData.contact, email: e.target.value } 
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact_phone">Phone</Label>
                      <Input 
                        id="contact_phone" 
                        placeholder="Phone number" 
                        value={rfpData.contact.phone}
                        onChange={(e) => updateRfpData({ 
                          contact: { ...rfpData.contact, phone: e.target.value } 
                        })}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-md font-medium">Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="release_date">Release Date</Label>
                      <Input 
                        id="release_date" 
                        type="date" 
                        value={rfpData.timeline.releaseDate}
                        onChange={(e) => updateRfpData({ 
                          timeline: { ...rfpData.timeline, releaseDate: e.target.value } 
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="submission_deadline">Submission Deadline</Label>
                      <Input 
                        id="submission_deadline" 
                        type="date" 
                        value={rfpData.timeline.submissionDeadline}
                        onChange={(e) => updateRfpData({ 
                          timeline: { ...rfpData.timeline, submissionDeadline: e.target.value } 
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="decision_date">Decision Date</Label>
                      <Input 
                        id="decision_date" 
                        type="date" 
                        value={rfpData.timeline.decisionDate}
                        onChange={(e) => updateRfpData({ 
                          timeline: { ...rfpData.timeline, decisionDate: e.target.value } 
                        })}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Sections Tab */}
          <TabsContent value="content">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="overview">Overview</Label>
                      <Textarea 
                        id="overview" 
                        placeholder="Brief overview of the RFP" 
                        rows={4}
                        value={rfpData.overview}
                        onChange={(e) => updateSection("overview", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Overview"
                        sectionKey="overview"
                        currentContent={rfpData.overview}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("overview", content)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="background">Background</Label>
                      <Textarea 
                        id="background" 
                        placeholder="Background information and context" 
                        rows={4}
                        value={rfpData.background}
                        onChange={(e) => updateSection("background", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Background"
                        sectionKey="background"
                        currentContent={rfpData.background}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("background", content)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="objectives">Objectives</Label>
                      <Textarea 
                        id="objectives" 
                        placeholder="Key objectives and goals" 
                        rows={4}
                        value={rfpData.objectives}
                        onChange={(e) => updateSection("objectives", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Objectives"
                        sectionKey="objectives"
                        currentContent={rfpData.objectives}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("objectives", content)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scope">Scope of Work</Label>
                      <Textarea 
                        id="scope" 
                        placeholder="Project scope and deliverables" 
                        rows={4}
                        value={rfpData.scope}
                        onChange={(e) => updateSection("scope", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Scope of Work"
                        sectionKey="scope"
                        currentContent={rfpData.scope}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("scope", content)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Requirements Tab */}
          <TabsContent value="requirements">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Requirements & Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Technical Requirements</Label>
                      <Textarea 
                        id="requirements" 
                        placeholder="Detailed requirements" 
                        rows={4}
                        value={rfpData.requirements}
                        onChange={(e) => updateSection("requirements", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Technical Requirements"
                        sectionKey="requirements"
                        currentContent={rfpData.requirements}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("requirements", content)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="evaluation">Evaluation Criteria</Label>
                      <Textarea 
                        id="evaluation" 
                        placeholder="How proposals will be evaluated" 
                        rows={4}
                        value={rfpData.evaluation}
                        onChange={(e) => updateSection("evaluation", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Evaluation Criteria"
                        sectionKey="evaluation"
                        currentContent={rfpData.evaluation}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("evaluation", content)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Information</Label>
                      <Textarea 
                        id="budget" 
                        placeholder="Budget constraints and considerations" 
                        rows={4}
                        value={rfpData.budget}
                        onChange={(e) => updateSection("budget", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Budget Information"
                        sectionKey="budget"
                        currentContent={rfpData.budget}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("budget", content)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="terms">Terms & Conditions</Label>
                      <Textarea 
                        id="terms" 
                        placeholder="Contract terms and conditions" 
                        rows={4}
                        value={rfpData.terms}
                        onChange={(e) => updateSection("terms", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Terms & Conditions"
                        sectionKey="terms"
                        currentContent={rfpData.terms}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("terms", content)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="submission">Submission Instructions</Label>
                      <Textarea 
                        id="submission" 
                        placeholder="How to submit proposals" 
                        rows={4}
                        value={rfpData.submission}
                        onChange={(e) => updateSection("submission", e.target.value)}
                      />
                      <ContentGenerator
                        sectionTitle="Submission Instructions"
                        sectionKey="submission"
                        currentContent={rfpData.submission}
                        onGenerateContent={generateContent}
                        onContentUpdate={(content) => updateSection("submission", content)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default RfpEditor;
