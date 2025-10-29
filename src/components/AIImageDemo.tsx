import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sparkles, Wand2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AIImageDemo = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a description");
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-hotel-scene", {
        body: { 
          prompt: `A beautiful luxury hotel scene: ${prompt}. Professional hotel photography, ultra high resolution, elegant and inviting atmosphere.` 
        },
      });

      if (error) throw error;
      if (!data?.imageUrl) throw new Error("No image generated");

      setImageUrl(data.imageUrl);
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Image generation error:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const examples = [
    "Modern hotel room with city view at sunset",
    "Luxury hotel lobby with marble floors and chandelier",
    "Rooftop pool overlooking the ocean",
    "Cozy hotel restaurant with warm lighting",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <Wand2 className="w-4 h-4 text-secondary animate-pulse-glow" />
            <span className="text-sm text-muted-foreground">AI-Powered Visualization</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Visualize Your <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">Perfect Stay</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Conci can help guests imagine their ideal hotel experience with AI-generated visualizations.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Describe a hotel scene you'd like to see
              </label>
              <div className="flex gap-2">
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && generateImage()}
                  placeholder="e.g., Modern hotel room with mountain view"
                  className="flex-1 bg-background/50"
                  disabled={isGenerating}
                />
                <Button
                  onClick={generateImage}
                  disabled={isGenerating || !prompt.trim()}
                  variant="hero"
                  size="lg"
                >
                  {isGenerating ? (
                    <>Generating...</>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Generate
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Try:</span>
              {examples.map((example, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => setPrompt(example)}
                  disabled={isGenerating}
                  className="text-xs"
                >
                  {example}
                </Button>
              ))}
            </div>

            {imageUrl && (
              <div className="relative rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] animate-fade-in">
                <img
                  src={imageUrl}
                  alt="Generated hotel scene"
                  className="w-full h-auto"
                />
              </div>
            )}

            {!imageUrl && !isGenerating && (
              <div className="flex items-center justify-center h-64 bg-muted/30 rounded-xl border-2 border-dashed border-border">
                <div className="text-center">
                  <Wand2 className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Your generated image will appear here
                  </p>
                </div>
              </div>
            )}

            {isGenerating && (
              <div className="flex items-center justify-center h-64 bg-muted/30 rounded-xl border-2 border-dashed border-primary/50">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-2 animate-pulse-glow" />
                  <p className="text-foreground font-medium">Creating your vision...</p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIImageDemo;
