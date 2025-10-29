import { Button } from "@/components/ui/button";
import { Mic, Sparkles } from "lucide-react";
import conciDevice from "@/assets/conci-device.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(44,186,187,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">Powered by Startupathon</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conci</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The AI-powered voice assistant transforming hotel experiences through seamless automation and personalized service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg">
                <Mic className="w-5 h-5" />
                See Conci in Action
              </Button>
              <Button variant="heroSecondary" size="lg" className="text-lg">
                Request Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">45%</div>
                <div className="text-sm text-muted-foreground">Faster Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Always Available</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src={conciDevice} 
                alt="Conci AI Assistant Device" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating indicator */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-glow)] backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
                <span className="text-sm font-medium">Active & Listening</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
