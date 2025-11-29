import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Star, TrendingUp, Users, Briefcase, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const ForFreelancersPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Get Paid Instantly",
      description: "Receive your earnings immediately in Million+ Coin (M+). No more waiting days for bank transfers or dealing with payment delays."
    },
    {
      icon: Users,
      title: "Work with Global Clients",
      description: "Connect with clients from around the world without worrying about currency conversion or international payment fees."
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Earn reviews and ratings to establish yourself as a top-rated freelancer and attract more high-paying clients."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Income",
      description: "Set your own rates, scale your services, and build a sustainable freelance career with consistent crypto earnings."
    }
  ];

  const features = [
    {
      title: "Create Service Listings",
      description: "Showcase your skills with detailed service listings (gigs) that clients can purchase directly."
    },
    {
      title: "Apply to Jobs",
      description: "Browse job postings and submit proposals to clients actively looking for talent."
    },
    {
      title: "Portfolio Showcase",
      description: "Display your best work in your portfolio to attract more clients and justify premium rates."
    },
    {
      title: "Secure Escrow",
      description: "Funds are held safely in escrow until work is delivered, protecting both you and your client."
    },
    {
      title: "Real-Time Messaging",
      description: "Communicate directly with clients to clarify requirements and provide updates."
    },
    {
      title: "Analytics Dashboard",
      description: "Track your earnings, orders, and performance with detailed analytics."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Freelancers" },
    { number: "$2M+", label: "Paid in Crypto" },
    { number: "100K+", label: "Projects Completed" },
    { number: "4.8/5", label: "Average Rating" }
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
                Freelance. Get Paid in Crypto.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join Million+ and offer your skills to a global marketplace. Receive instant M+ payments for your work.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/signup">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Start Freelancing
                  </Button>
                </Link>
                <Link to="/become-seller">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-display font-bold text-accent mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Freelancers Love Million+
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the freedom and benefits of crypto-powered freelancing
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
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools to help you build and grow your freelance business
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-display font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Start Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Wallet className="h-16 w-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Create your free account, set up your profile, and start offering your services today. It takes less than 5 minutes to get started.
              </p>
              <Link to="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                  Create Your Free Account
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                No credit card required • Connect your XRPL wallet • Start earning in M+ immediately
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Join Thousands of Successful Freelancers
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Start your crypto-powered freelancing journey on Million+ today
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/become-seller">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn How to Sell
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

export default ForFreelancersPage;
