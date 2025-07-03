import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface AiGenerationModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  sections?: string[];
}

const AiGenerationModal: React.FC<AiGenerationModalProps> = ({
  isOpen,
  title,
  description,
  sections = []
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-4 py-6">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground text-center">
            AI is generating your content...
          </p>
          
          {sections.length > 0 && (
            <div className="w-full space-y-2">
              <p className="text-sm font-medium text-center">Generating sections:</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                {sections.map((section, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="text-xs text-muted-foreground text-center">
          This may take a few moments. Please don't close this window.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AiGenerationModal;