import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(44,186,187,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(250,204,21,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Hotel Experience?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join forward-thinking hotels already using Conci to delight guests and streamline operations. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="hero" size="lg" className="text-lg">
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </Button>
            <Button variant="heroSecondary" size="lg" className="text-lg">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-12 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Hotels Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Guest Interactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
