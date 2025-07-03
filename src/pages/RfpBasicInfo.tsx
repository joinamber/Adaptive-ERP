import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useRfp } from '@/contexts/RfpContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StepIndicator from '@/components/StepIndicator';
import { basicInfoSchema, BasicInfoFormData } from '@/schemas/rfpSchemas';

const steps = [
  { id: 'basic-info', title: 'Basic Info', description: 'Project details' },
  { id: 'overview', title: 'Overview', description: 'AI generation' },
  { id: 'requirements', title: 'Requirements', description: 'Custom needs' },
  { id: 'review', title: 'Review', description: 'Final review' },
];

const RfpBasicInfo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { rfpData, updateRfpData, setCurrentStep, completedSteps } = useRfp();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      title: rfpData.title,
      organization: rfpData.organization,
      department: rfpData.department,
      contact: rfpData.contact,
      timeline: rfpData.timeline,
    }
  });

  const onSubmit = async (data: BasicInfoFormData) => {
    try {
      updateRfpData(data);
      setCurrentStep('overview');
      
      toast({
        title: "Basic Information Saved",
        description: "Proceeding to AI-powered project overview generation.",
      });
      
      navigate('/rfp/project-overview');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save basic information. Please try again.",
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
              onClick={() => navigate('/rfp')}
              className="flex items-center text-gray-600 hover:text-primary mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Templates
            </button>
            
            <h1 className="text-3xl font-bold text-rfp-blue mb-2">
              Create Your RFP
            </h1>
            <p className="text-gray-600">
              Let's start with the basic information about your project
            </p>
          </div>

          <StepIndicator 
            steps={steps} 
            currentStep="basic-info" 
            completedSteps={completedSteps} 
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
                <CardDescription>
                  Tell us about your RFP project and organization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">RFP Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Enterprise Resource Planning System"
                      {...register('title')}
                    />
                    {errors.title && (
                      <p className="text-sm text-destructive">{errors.title.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization Name *</Label>
                    <Input
                      id="organization"
                      placeholder="e.g., ABC Corporation"
                      {...register('organization')}
                    />
                    {errors.organization && (
                      <p className="text-sm text-destructive">{errors.organization.message}</p>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      placeholder="e.g., Information Technology"
                      {...register('department')}
                    />
                    {errors.department && (
                      <p className="text-sm text-destructive">{errors.department.message}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Primary contact person for this RFP
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact.name">Contact Name *</Label>
                    <Input
                      id="contact.name"
                      placeholder="e.g., John Smith"
                      {...register('contact.name')}
                    />
                    {errors.contact?.name && (
                      <p className="text-sm text-destructive">{errors.contact.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact.email">Email Address *</Label>
                    <Input
                      id="contact.email"
                      type="email"
                      placeholder="e.g., john.smith@company.com"
                      {...register('contact.email')}
                    />
                    {errors.contact?.email && (
                      <p className="text-sm text-destructive">{errors.contact.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact.phone">Phone Number *</Label>
                    <Input
                      id="contact.phone"
                      placeholder="e.g., +1 (555) 123-4567"
                      {...register('contact.phone')}
                    />
                    {errors.contact?.phone && (
                      <p className="text-sm text-destructive">{errors.contact.phone.message}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
                <CardDescription>
                  Important dates for your RFP process
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="timeline.releaseDate">RFP Release Date *</Label>
                    <Input
                      id="timeline.releaseDate"
                      type="date"
                      {...register('timeline.releaseDate')}
                    />
                    {errors.timeline?.releaseDate && (
                      <p className="text-sm text-destructive">{errors.timeline.releaseDate.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline.submissionDeadline">Submission Deadline *</Label>
                    <Input
                      id="timeline.submissionDeadline"
                      type="date"
                      {...register('timeline.submissionDeadline')}
                    />
                    {errors.timeline?.submissionDeadline && (
                      <p className="text-sm text-destructive">{errors.timeline.submissionDeadline.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline.decisionDate">Decision Date *</Label>
                    <Input
                      id="timeline.decisionDate"
                      type="date"
                      {...register('timeline.decisionDate')}
                    />
                    {errors.timeline?.decisionDate && (
                      <p className="text-sm text-destructive">{errors.timeline.decisionDate.message}</p>
                    )}
                  </div>
                </div>
                {errors.timeline && !errors.timeline.releaseDate && !errors.timeline.submissionDeadline && !errors.timeline.decisionDate && (
                  <p className="text-sm text-destructive">{errors.timeline.message}</p>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end pt-6">
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Saving...</>
                ) : (
                  <>
                    Next: Generate Overview
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RfpBasicInfo;