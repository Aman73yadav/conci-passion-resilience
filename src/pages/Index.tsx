import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";
import AIImageDemo from "@/components/AIImageDemo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="dashboard">
        <Dashboard />
      </div>
      <AIImageDemo />
      <div id="about">
        <CTA />
      </div>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
