import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Rocket, DollarSign, Users, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BecomeSellerPage = () => {
  const steps = [
    {
      step: "1",
      title: "Create Your Account",
      description: "Sign up for free and set up your Million+ profile. Connect your XRPL wallet (XUMM or Crossmark) to receive instant M+ payments.",
      time: "2 minutes"
    },
    {
      step: "2",
      title: "Build Your Profile",
      description: "Add your skills, portfolio, and professional experience. The more complete your profile, the more clients will trust you.",
      time: "10 minutes"
    },
    {
      step: "3",
      title: "Create Service Listings",
      description: "Create gigs showcasing your services with clear descriptions, pricing packages, and delivery times.",
      time: "15 minutes"
    },
    {
      step: "4",
      title: "Start Getting Orders",
      description: "Receive orders from clients worldwide and get paid instantly in Million+ Coin upon completion.",
      time: "Start earning"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Instant M+ Payments",
      description: "Receive payments immediately in Million+ Coin (M+). No more waiting for bank transfers or dealing with payment processors."
    },
    {
      icon: Users,
      title: "Global Client Base",
      description: "Access clients from around the world without currency conversion hassles or international payment delays."
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Earn reviews and ratings to establish yourself as a top-rated seller and attract more high-value clients."
    },
    {
      icon: TrendingUp,
      title: "Scale Your Business",
      description: "Grow from side hustle to full-time income. Many sellers earn thousands in crypto monthly on Million+."
    }
  ];

  const features = [
    "Zero listing fees - create unlimited service listings",
    "Transparent 10% commission only on completed orders",
    "Secure escrow system protects both parties",
    "Real-time messaging with clients",
    "Portfolio showcase to display your best work",
    "Analytics dashboard to track your performance",
    "Seller support and resources",
    "Flexible pricing - set your own rates"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Become a Seller on Million+
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of freelancers earning Million+ Coin by offering their skills to a global marketplace.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/signup">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                    <Rocket className="mr-2 h-5 w-5" />
                    Start Selling Today
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Browse Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Getting Started is Easy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to start earning in crypto
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">{step.description}</p>
                    <p className="text-sm text-accent font-semibold">{step.time}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Sell on Million+?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the future of freelancing with Million+ Coin on XRPL
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="h-7 w-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Everything You Need to Succeed
                </h2>
                <p className="text-lg text-muted-foreground">
                  Million+ provides all the tools to build and grow your freelance business
                </p>
              </div>
              
              <Card className="hover:shadow-card transition-smooth">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Million+ today and start earning Million+ Coin for your skills
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                <Rocket className="mr-2 h-5 w-5" />
                Create Your Seller Account
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeSellerPage;
