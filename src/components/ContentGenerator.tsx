
import React, { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContentGeneratorProps {
  sectionTitle: string;
  sectionKey: string;
  currentContent: string;
  onGenerateContent: (section: string, prompt: string) => Promise<string>;
  onContentUpdate: (content: string) => void;
}

const ContentGenerator: React.FC<ContentGeneratorProps> = ({
  sectionTitle,
  sectionKey,
  currentContent,
  onGenerateContent,
  onContentUpdate
}) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt required",
        description: "Please enter a brief description to generate content",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const generatedContent = await onGenerateContent(sectionKey, prompt);
      onContentUpdate(generatedContent);
      toast({
        title: "Content generated",
        description: `${sectionTitle} content has been generated successfully.`
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating content. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
      setPrompt("");
    }
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Sparkles className="w-5 h-5 mr-2 text-yellow-500" />
          Generate AI content for {sectionTitle}
        </CardTitle>
        <CardDescription>
          Provide a brief description of what you need for this section
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="e.g., HR onboarding system for a 500-employee company"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate Content
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentGenerator;
