import React, { useState, useEffect } from 'react';
import { Settings, Key, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const GROQ_API_KEY = 'groq_api_key';
const GROQ_MODEL = 'groq_model';

export const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('llama3-8b-8192');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved settings
    const savedApiKey = localStorage.getItem(GROQ_API_KEY) || '';
    const savedModel = localStorage.getItem(GROQ_MODEL) || 'llama3-8b-8192';
    setApiKey(savedApiKey);
    setModel(savedModel);
  }, [isOpen]);

  const handleSave = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter a valid Groq API key.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Save to localStorage
      localStorage.setItem(GROQ_API_KEY, apiKey.trim());
      localStorage.setItem(GROQ_MODEL, model);
      
      toast({
        title: "Settings Saved",
        description: "Your Groq settings have been saved successfully.",
      });
      
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Save Failed",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const maskApiKey = (key: string) => {
    if (key.length <= 8) return key;
    return key.substring(0, 4) + '....' + key.substring(key.length - 4);
  };

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
            LLM Settings
          </DialogTitle>
          <DialogDescription>
            Configure your Groq API settings for AI content generation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey" className="flex items-center gap-2">
              <Key className="h-4 w-4" />
              Groq API Key
            </Label>
            <Input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Groq API key..."
            />
            {apiKey && (
              <p className="text-xs text-muted-foreground">
                Current key: {maskApiKey(apiKey)}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger>
                <SelectValue placeholder="Select model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="llama3-8b-8192">Llama 3 8B (Fast)</SelectItem>
                <SelectItem value="llama3-70b-8192">Llama 3 70B (High Quality)</SelectItem>
                <SelectItem value="mixtral-8x7b-32768">Mixtral 8x7B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4 mr-2" />
            {isLoading ? 'Saving...' : 'Save Settings'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const getGroqSettings = () => {
  return {
    apiKey: localStorage.getItem(GROQ_API_KEY) || '',
    model: localStorage.getItem(GROQ_MODEL) || 'llama3-8b-8192'
  };
};