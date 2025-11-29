import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, TrendingUp, Globe, Check } from "lucide-react";
import millionPlusCoin from "@/assets/million-plus-coin.png";

const AboutMillionCoin = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Lightning-Fast Transactions",
      description: "Settlements in 3-5 seconds on the XRP Ledger. No more waiting days for payments.",
    },
    {
      icon: Shield,
      title: "Low Transaction Fees",
      description: "Pay fractions of a cent per transaction. Keep more of what you earn.",
    },
    {
      icon: TrendingUp,
      title: "Stable Value",
      description: "1 M+ = 1 XRP. Predictable pricing tied to XRP's market value.",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Accept payments from anywhere in the world without borders or restrictions.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Get M+ Coins",
      description: "Purchase M+ through our platform or connect your XRPL wallet (XUMM, Crossmark).",
    },
    {
      step: "2",
      title: "Complete Transactions",
      description: "Use M+ to pay for services or receive payments for your work. All transactions are instant.",
    },
    {
      step: "3",
      title: "Withdraw Anytime",
      description: "Convert M+ to XRP or withdraw directly to your XRPL wallet. Your funds, your control.",
    },
  ];

  const features = [
    "Built on XRP Ledger (XRPL) - proven, secure blockchain",
    "1:1 peg with XRP for price stability",
    "3-5 second transaction finality",
    "Negligible transaction fees (< $0.01)",
    "No chargebacks or payment disputes",
    "Full transparency with on-chain verification",
    "Compatible with all XRPL wallets",
    "24/7 instant settlements",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
                Built on XRPL
              </Badge>
              <div className="flex justify-center mb-6">
                <img 
                  src={millionPlusCoin} 
                  alt="Million+ Coin"
                  className="w-32 h-32 animate-float"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                What is Million+ Coin?
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Million+ Coin (M+) is our proprietary cryptocurrency built on the XRP Ledger. 
                It powers all transactions on the Million+ platform with speed, security, and simplicity.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Why Million+ Coin?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-display font-bold mb-6">
                        M+ Coin Specifications
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Name</p>
                          <p className="font-semibold">Million+ Coin</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Symbol</p>
                          <p className="font-semibold">M+</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Blockchain</p>
                          <p className="font-semibold">XRP Ledger (XRPL)</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Exchange Rate</p>
                          <p className="font-semibold">1 M+ = 1 XRP</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Transaction Speed</p>
                          <p className="font-semibold">3-5 seconds</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Transaction Fee</p>
                          <p className="font-semibold">~$0.0002 per transaction</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-display font-bold mb-6">
                        Key Features
                      </h2>
                      <ul className="space-y-3">
                        {features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why XRPL */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                Why We Chose XRP Ledger
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The XRP Ledger is one of the most efficient and sustainable blockchains in existence. 
                It's been operating since 2012 with a proven track record of reliability, processing billions of dollars in transactions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-accent mb-2">3-5s</p>
                    <p className="text-sm text-muted-foreground">Transaction Speed</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-accent mb-2">$0.0002</p>
                    <p className="text-sm text-muted-foreground">Average Fee</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-accent mb-2">2012</p>
                    <p className="text-sm text-muted-foreground">Operating Since</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Get Started with M+ Coin?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of freelancers and clients using Million+ Coin for fast, secure transactions.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/signup" className="inline-block">
                <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth shadow-orange-glow">
                  Create Account
                </button>
              </a>
              <a href="/wallet" className="inline-block">
                <button className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 px-8 py-3 rounded-lg font-semibold transition-smooth">
                  View Wallet
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMillionCoin;
