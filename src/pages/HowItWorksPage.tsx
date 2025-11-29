import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Handshake, Wallet, Shield, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Post or Browse",
      description: "Clients post job listings or browse freelancer profiles. Freelancers create service listings (gigs) showcasing their skills and expertise.",
      clientAction: "Post a job or browse freelancers",
      freelancerAction: "Create your service listing"
    },
    {
      icon: Handshake,
      title: "2. Connect & Hire",
      description: "Clients review proposals and hire the best talent. Freelancers apply to jobs or receive direct orders on their service listings.",
      clientAction: "Review proposals and hire",
      freelancerAction: "Submit proposals or get hired"
    },
    {
      icon: Wallet,
      title: "3. Work & Get Paid in M+",
      description: "Freelancers deliver high-quality work. Payments are made instantly in Million+ Coin with no delays or high fees.",
      clientAction: "Pay instantly in M+",
      freelancerAction: "Receive instant M+ payments"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Instant Payments",
      description: "No more waiting days for bank transfers. Get paid immediately in Million+ Coin."
    },
    {
      icon: Shield,
      title: "Secure Escrow",
      description: "Funds are held in smart contract escrow until work is completed and approved."
    },
    {
      icon: TrendingUp,
      title: "Global Access",
      description: "Work with clients and freelancers from anywhere in the world without currency barriers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How Million+ Works
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              The simplest way to hire talent or offer your services—powered by Million+ Coin for instant, global payments.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="mb-16 last:mb-0">
                  <Card className="hover:shadow-card transition-smooth">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                            <step.icon className="h-10 w-10 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                          <p className="text-muted-foreground text-lg mb-6">{step.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-secondary rounded-lg">
                              <h4 className="font-semibold mb-2 text-accent">For Clients:</h4>
                              <p className="text-sm text-muted-foreground">{step.clientAction}</p>
                            </div>
                            <div className="p-4 bg-secondary rounded-lg">
                              <h4 className="font-semibold mb-2 text-accent">For Freelancers:</h4>
                              <p className="text-sm text-muted-foreground">{step.freelancerAction}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className="w-1 h-16 bg-accent/30"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Million+?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the future of freelancing with Million+ Coin payments on XRPL
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of clients and freelancers already using Million+
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/for-freelancers">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                  Join as a Freelancer
                </Button>
              </Link>
              <Link to="/for-clients">
                <Button size="lg" variant="outline">
                  I'm Looking to Hire
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;
