import { Mic, Brain, Zap, Shield, BarChart3, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "Voice Activated",
    description: "Simply say 'Hey Conci' to control lights, temperature, and request services hands-free.",
  },
  {
    icon: Brain,
    title: "AI Personalization",
    description: "Recognizes guests and provides tailored recommendations for dining, activities, and local experiences.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Real-time processing ensures immediate action on guest requests, from towels to room service.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Bank-level encryption and on-device processing keep all guest data secure and private.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Track guest preferences and request patterns to optimize operations and improve service.",
  },
  {
    icon: Smartphone,
    title: "Seamless Integration",
    description: "Connects with existing hotel systems without costly infrastructure overhauls.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Revolutionizing Hotel <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conci brings cutting-edge AI capabilities to every guest interaction, elevating service while reducing operational costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
