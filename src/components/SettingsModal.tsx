import React, { useState } from 'react';
import { Settings, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            AI Settings
          </DialogTitle>
          <DialogDescription>
            Information about AI content generation setup.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              AI content generation is now handled securely through Netlify Functions. 
              The Groq API key is configured as an environment variable on the server 
              and is not exposed to the frontend.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>Current Model:</strong> Llama 3 8B (Fast)
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Status:</strong> Secure server-side configuration
            </p>
          </div>
        </div>
        
        <DialogFooter>
          <Button onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Legacy function - no longer needed with Netlify Functions
export const getGroqSettings = () => {
  return {
    apiKey: '',
    model: 'llama3-8b-8192'
  };
};