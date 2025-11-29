import { Search, Handshake, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Post or Browse",
      description: "Post your service offerings or browse thousands of talented freelancers ready to help.",
    },
    {
      icon: Handshake,
      title: "Hire or Apply",
      description: "Connect with the perfect match. Chat, negotiate, and agree on project terms.",
    },
    {
      icon: Wallet,
      title: "Pay with Crypto",
      description: "Complete secure transactions instantly using your preferred cryptocurrency.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps. Join the future of freelancing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full hover:shadow-card transition-smooth">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 relative">
                    <step.icon className="h-10 w-10 text-accent" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
