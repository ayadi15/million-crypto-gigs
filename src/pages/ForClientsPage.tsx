import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserCheck, Shield, Clock, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ForClientsPage = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse or Post",
      description: "Search through thousands of verified freelancers or post your job and let them come to you."
    },
    {
      icon: UserCheck,
      title: "Review & Hire",
      description: "Compare proposals, check ratings and portfolios, then hire the perfect freelancer for your project."
    },
    {
      icon: Zap,
      title: "Pay with M+",
      description: "Fund your project in escrow using Million+ Coin. Release payment when you're satisfied with the work."
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Access Global Talent",
      description: "Hire skilled professionals from anywhere in the world without worrying about currency conversion or payment delays."
    },
    {
      icon: Clock,
      title: "Fast Hiring Process",
      description: "Post a job and start receiving proposals within hours. Hire quickly and get your project started immediately."
    },
    {
      icon: Shield,
      title: "Secure Escrow System",
      description: "Your funds are held safely in smart contract escrow until work is completed and approved by you."
    }
  ];

  const categories = [
    { name: "Web Development", count: "2,500+" },
    { name: "Graphic Design", count: "3,800+" },
    { name: "Content Writing", count: "1,900+" },
    { name: "Video Editing", count: "1,200+" },
    { name: "Digital Marketing", count: "2,100+" },
    { name: "SEO Services", count: "1,600+" }
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
                Hire Expert Freelancers
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Find the perfect talent for your project and pay instantly with Million+ Coin. No delays, no hassles.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/signup">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Browse Freelancers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How Hiring Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three simple steps to find and hire the perfect freelancer
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
                Why Clients Choose Million+
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the future of hiring with Million+ Coin payments
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Popular Service Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find freelancers across all skill categories
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {categories.map((category, index) => (
                <Link key={index} to={`/browse?cat=${category.name.toLowerCase().replace(/ /g, '-')}`}>
                  <Card className="hover:shadow-card transition-smooth cursor-pointer hover:border-accent">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-semibold text-lg">{category.name}</h3>
                        <span className="text-accent font-semibold">{category.count}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/browse">
                <Button size="lg" variant="outline">
                  View All Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Find Your Perfect Freelancer?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of clients who trust Million+ for their projects
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                  Post Your First Job Free
                </Button>
              </Link>
              <Link to="/browse">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Browse Freelancers
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

export default ForClientsPage;
