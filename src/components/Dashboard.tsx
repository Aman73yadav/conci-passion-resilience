import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const Dashboard = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
              <img 
                src={dashboardPreview} 
                alt="Hotel Dashboard Interface" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              
              {/* Floating stats cards */}
              <Card className="absolute top-6 left-6 p-4 bg-card/90 backdrop-blur-sm border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">+127%</div>
                    <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute bottom-6 right-6 p-4 bg-card/90 backdrop-blur-sm border-border shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2.3min</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-sm text-muted-foreground">Hotel Management Platform</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Command Center for <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Modern Hotels</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Real-time dashboard gives your staff complete visibility into guest requests, analytics, and operations. Manage everything from one intuitive interface.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Request Management</h4>
                  <p className="text-sm text-muted-foreground">Track and respond to guest needs instantly with automated prioritization.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Predictive Analytics</h4>
                  <p className="text-sm text-muted-foreground">Identify trends and optimize staffing based on demand patterns.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Seamless System Integration</h4>
                  <p className="text-sm text-muted-foreground">Works with your existing PMS, POS, and other hotel systems.</p>
                </div>
              </div>
            </div>
            
            <Button variant="hero" size="lg">
              Explore Dashboard
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
