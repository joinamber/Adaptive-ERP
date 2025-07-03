import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
  description: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: string;
  completedSteps: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, completedSteps }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = currentStep === step.id;
          const isUpcoming = !isCompleted && !isCurrent;
          
          return (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="relative flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors",
                    {
                      "bg-primary border-primary text-primary-foreground": isCompleted,
                      "bg-background border-primary text-primary": isCurrent,
                      "bg-background border-muted-foreground text-muted-foreground": isUpcoming,
                    }
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                
                {/* Step Label */}
                <div className="mt-3 text-center">
                  <div
                    className={cn(
                      "text-sm font-medium",
                      {
                        "text-primary": isCompleted || isCurrent,
                        "text-muted-foreground": isUpcoming,
                      }
                    )}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 max-w-24">
                    {step.description}
                  </div>
                </div>
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-4 transition-colors",
                    {
                      "bg-primary": isCompleted,
                      "bg-muted": !isCompleted,
                    }
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;