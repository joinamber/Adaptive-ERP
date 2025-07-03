import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ArrowRight, Edit, Save, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useRfp } from '@/contexts/RfpContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import AiGenerationModal from '@/components/AiGenerationModal';
import { llmService } from '@/services/llmService';
import { requirementsSchema, RequirementsFormData, userPromptSchema, UserPromptFormData } from '@/schemas/rfpSchemas';

const steps = [
  { id: 'basic-info', title: 'Basic Info', description: 'Project details' },
  { id: 'overview', title: 'Overview', description: 'AI generation' },
  { id: 'requirements', title: 'Requirements', description: 'Custom needs' },
  { id: 'review', title: 'Review', description: 'Final review' },
];

const sections = [
  { key: 'requirements', title: 'Technical Requirements', description: 'Detailed functional and technical specifications' },
  { key: 'evaluation', title: 'Evaluation Criteria', description: 'How proposals will be evaluated and scored' },
  { key: 'budget', title: 'Budget Information', description: 'Cost expectations and payment terms' },
  { key: 'terms', title: 'Terms & Conditions', description: 'Contract terms and legal requirements' },
  { key: 'submission', title: 'Submission Instructions', description: 'How to submit proposals and timeline' },
];

const RfpRequirements = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { rfpData, updateRfpData, setCurrentStep, completedSteps, addCompletedStep } = useRfp();
  const [isGenerating, setIsGenerating] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [showPromptDialog, setShowPromptDialog] = useState(true);
  const [hasGenerated, setHasGenerated] = useState(false);

  const promptForm = useForm<UserPromptFormData>({
    resolver: zodResolver(userPromptSchema),
    defaultValues: { prompt: '' }
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<RequirementsFormData>({
    resolver: zodResolver(requirementsSchema),
    defaultValues: {
      requirements: rfpData.requirements,
      evaluation: rfpData.evaluation,
      budget: rfpData.budget,
      terms: rfpData.terms,
      submission: rfpData.submission,
    }
  });

  const watchedValues = watch();

  useEffect(() => {
    if (!rfpData.title || !rfpData.overview) {
      navigate('/rfp/project-overview');
      return;
    }

    // Show prompt dialog if requirements haven't been generated yet
    if (!rfpData.requirements) {
      setShowPromptDialog(true);
    } else {
      setShowPromptDialog(false);
      setHasGenerated(true);
    }
  }, []);

  const generateRequirements = async (userPrompt: string) => {
    setIsGenerating(true);
    setShowPromptDialog(false);
    
    try {
      await llmService.initialize();

      const context = { basicInfo: rfpData };
      
      const [requirements, evaluation, budget, terms, submission] = await Promise.all([
        llmService.generateContent('requirements', context, userPrompt),
        llmService.generateContent('evaluation', context, userPrompt),
        llmService.generateContent('budget', context, userPrompt),
        llmService.generateContent('terms', context),
        llmService.generateContent('submission', context),
      ]);

      setValue('requirements', requirements);
      setValue('evaluation', evaluation);
      setValue('budget', budget);
      setValue('terms', terms);
      setValue('submission', submission);

      setHasGenerated(true);
      
      toast({
        title: "Requirements Generated Successfully",
        description: "AI has generated your requirements sections based on your input. Review and edit as needed.",
      });
    } catch (error) {
      console.error('Generation error:', error);
      toast({
        title: "Generation Failed",
        description: "Failed to generate content. Please try again or fill in manually.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const onPromptSubmit = (data: UserPromptFormData) => {
    generateRequirements(data.prompt);
  };

  const saveSection = (sectionKey: string) => {
    const value = watchedValues[sectionKey as keyof RequirementsFormData];
    updateRfpData({ [sectionKey]: value });
    setEditingSection(null);
    
    toast({
      title: "Section Saved",
      description: `${sections.find(s => s.key === sectionKey)?.title} has been saved.`,
    });
  };

  const onSubmit = async (data: RequirementsFormData) => {
    try {
      updateRfpData(data);
      addCompletedStep('basic-info');
      addCompletedStep('overview');
      addCompletedStep('requirements');
      setCurrentStep('review');
      
      toast({
        title: "Requirements Saved",
        description: "All requirements saved. Proceeding to final review.",
      });
      
      navigate('/rfp/review');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save requirements. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSkipPrompt = () => {
    setShowPromptDialog(false);
    // Generate with a generic prompt
    generateRequirements("Standard business requirements for enterprise software solution");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="rfp-container py-8">
          <div className="mb-8">
            <button 
              onClick={() => navigate('/rfp/project-overview')}
              className="flex items-center text-gray-600 hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Project Overview
            </button>
            
            <h1 className="text-3xl font-bold text-rfp-blue mb-2">
              Requirements & Evaluation
            </h1>
            <p className="text-gray-600">
              Describe your specific needs to generate tailored requirements
            </p>
          </div>

          <StepIndicator 
            steps={steps} 
            currentStep="requirements" 
            completedSteps={completedSteps} 
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {sections.map((section) => (
              <Card key={section.key}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        {section.title}
                      </CardTitle>
                      <CardDescription>{section.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {editingSection === section.key ? (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => saveSection(section.key)}
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      ) : (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setEditingSection(section.key)}
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {editingSection === section.key ? (
                    <div className="space-y-2">
                      <Textarea
                        {...register(section.key as keyof RequirementsFormData)}
                        className="min-h-[200px]"
                        placeholder={`Enter ${section.title.toLowerCase()}...`}
                      />
                      {errors[section.key as keyof RequirementsFormData] && (
                        <p className="text-sm text-destructive">
                          {errors[section.key as keyof RequirementsFormData]?.message}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-sm text-gray-700 bg-gray-50 p-4 rounded-md">
                        {watchedValues[section.key as keyof RequirementsFormData] || 
                         `Click Edit to add ${section.title.toLowerCase()}`}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/rfp/project-overview')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowPromptDialog(true)}
                  disabled={isGenerating}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Regenerate with Prompt
                </Button>
                
                <Button type="submit" size="lg">
                  Next: Review
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Requirements Prompt Dialog */}
      <Dialog open={showPromptDialog} onOpenChange={setShowPromptDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Describe Your Requirements
            </DialogTitle>
            <DialogDescription>
              Tell us about your specific needs, technical requirements, or business constraints. 
              This will help our AI generate more accurate and relevant content.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={promptForm.handleSubmit(onPromptSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Textarea
                {...promptForm.register('prompt')}
                placeholder="e.g., We need a cloud-based solution that integrates with Salesforce, supports 500+ users, and must comply with GDPR. Budget range is $100k-200k..."
                className="min-h-[120px]"
              />
              {promptForm.formState.errors.prompt && (
                <p className="text-sm text-destructive">
                  {promptForm.formState.errors.prompt.message}
                </p>
              )}
            </div>
            
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={handleSkipPrompt}
              >
                Skip & Use Defaults
              </Button>
              <Button type="submit" disabled={isGenerating}>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Requirements
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      <AiGenerationModal
        isOpen={isGenerating}
        title="Generating Requirements"
        description="Our AI is creating detailed requirements and evaluation criteria based on your input."
        sections={['Technical Requirements', 'Evaluation Criteria', 'Budget Information', 'Terms & Conditions', 'Submission Instructions']}
      />
      
      <Footer />
    </div>
  );
};

export default RfpRequirements;