import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ArrowRight, Edit, Save, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useRfp } from '@/contexts/RfpContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import AiGenerationModal from '@/components/AiGenerationModal';
import { llmService } from '@/services/llmService';
import { projectOverviewSchema, ProjectOverviewFormData } from '@/schemas/rfpSchemas';

const steps = [
  { id: 'basic-info', title: 'Basic Info', description: 'Project details' },
  { id: 'overview', title: 'Overview', description: 'AI generation' },
  { id: 'requirements', title: 'Requirements', description: 'Custom needs' },
  { id: 'review', title: 'Review', description: 'Final review' },
];

const sections = [
  { key: 'overview', title: 'Project Overview', description: 'High-level project summary and purpose' },
  { key: 'background', title: 'Background', description: 'Business context and current state' },
  { key: 'objectives', title: 'Objectives', description: 'Specific goals and success criteria' },
  { key: 'scope', title: 'Scope of Work', description: 'What is included and excluded' },
];

const RfpProjectOverview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { rfpData, updateRfpData, setCurrentStep, completedSteps, addCompletedStep } = useRfp();
  const [isGenerating, setIsGenerating] = useState(false);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ProjectOverviewFormData>({
    resolver: zodResolver(projectOverviewSchema),
    defaultValues: {
      overview: rfpData.overview,
      background: rfpData.background,
      objectives: rfpData.objectives,
      scope: rfpData.scope,
    }
  });

  const watchedValues = watch();

  useEffect(() => {
    if (!rfpData.title) {
      navigate('/rfp/basic-info');
      return;
    }

    // Auto-generate content if not already generated
    if (!hasGenerated && !rfpData.overview) {
      generateAllSections();
    }
  }, []);

  const generateAllSections = async () => {
    setIsGenerating(true);
    try {
      await llmService.initialize();

      const context = { basicInfo: rfpData };
      
      const [overview, background, objectives, scope] = await Promise.all([
        llmService.generateContent('overview', context),
        llmService.generateContent('background', context),
        llmService.generateContent('objectives', context),
        llmService.generateContent('scope', context),
      ]);

      setValue('overview', overview);
      setValue('background', background);
      setValue('objectives', objectives);
      setValue('scope', scope);

      setHasGenerated(true);
      
      toast({
        title: "Content Generated Successfully",
        description: "AI has generated your project overview sections. Review and edit as needed.",
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

  const saveSection = (sectionKey: string) => {
    const value = watchedValues[sectionKey as keyof ProjectOverviewFormData];
    updateRfpData({ [sectionKey]: value });
    setEditingSection(null);
    
    toast({
      title: "Section Saved",
      description: `${sections.find(s => s.key === sectionKey)?.title} has been saved.`,
    });
  };

  const onSubmit = async (data: ProjectOverviewFormData) => {
    try {
      updateRfpData(data);
      addCompletedStep('basic-info');
      addCompletedStep('overview');
      setCurrentStep('requirements');
      
      toast({
        title: "Project Overview Saved",
        description: "Proceeding to requirements and evaluation criteria.",
      });
      
      navigate('/rfp/requirements');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save project overview. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="rfp-container py-8">
          <div className="mb-8">
            <button 
              onClick={() => navigate('/rfp/basic-info')}
              className="flex items-center text-gray-600 hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Basic Info
            </button>
            
            <h1 className="text-3xl font-bold text-rfp-blue mb-2">
              Project Overview
            </h1>
            <p className="text-gray-600">
              AI-generated sections for your RFP. Review and edit as needed.
            </p>
          </div>

          <StepIndicator 
            steps={steps} 
            currentStep="overview" 
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
                        {...register(section.key as keyof ProjectOverviewFormData)}
                        className="min-h-[200px]"
                        placeholder={`Enter ${section.title.toLowerCase()}...`}
                      />
                      {errors[section.key as keyof ProjectOverviewFormData] && (
                        <p className="text-sm text-destructive">
                          {errors[section.key as keyof ProjectOverviewFormData]?.message}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-sm text-gray-700 bg-gray-50 p-4 rounded-md">
                        {watchedValues[section.key as keyof ProjectOverviewFormData] || 
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
                onClick={() => navigate('/rfp/basic-info')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={generateAllSections}
                  disabled={isGenerating}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {isGenerating ? 'Regenerating...' : 'Regenerate All'}
                </Button>
                
                <Button type="submit" size="lg">
                  Next: Requirements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <AiGenerationModal
        isOpen={isGenerating}
        title="Generating Project Overview"
        description="Our AI is creating professional RFP sections based on your project information."
        sections={['Project Overview', 'Background', 'Objectives', 'Scope of Work']}
      />
      
      <Footer />
    </div>
  );
};

export default RfpProjectOverview;