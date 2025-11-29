import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Check, MessageCircle, Share2 } from "lucide-react";
import serviceWebImg from "@/assets/service-web.jpg";
import serviceDesignImg from "@/assets/service-design.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";

const ServiceDetail = () => {
  const relatedServices = [
    {
      id: "2",
      image: serviceDesignImg,
      title: "I will design a modern logo and brand identity",
      seller: { name: "Sarah Kim", avatar: avatar2, rating: 5.0, reviews: 432 },
      price: "0.02",
      crypto: "ETH",
      deliveryTime: "2 days",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "0.03",
      crypto: "ETH",
      delivery: "3 days",
      features: ["Responsive design", "3 pages", "Basic SEO", "Mobile optimized"],
    },
    {
      name: "Standard",
      price: "0.05",
      crypto: "ETH",
      delivery: "5 days",
      features: ["Everything in Basic", "5 pages", "Advanced SEO", "CMS integration", "2 revisions"],
      popular: true,
    },
    {
      name: "Premium",
      price: "0.08",
      crypto: "ETH",
      delivery: "7 days",
      features: ["Everything in Standard", "10 pages", "E-commerce ready", "Custom animations", "Unlimited revisions"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-6">
                <img 
                  src={serviceWebImg} 
                  alt="Service"
                  className="w-full h-96 object-cover rounded-lg shadow-card"
                />
              </div>

              {/* Title & Seller Info */}
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  I will create a professional responsive website with React
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={avatar1} 
                    alt="Alex Chen"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">Alex Chen</p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-orange text-orange" />
                        <span className="font-medium">4.9</span>
                        <span className="text-muted-foreground">(287 reviews)</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">500+ orders</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Badge variant="secondary">Web Development</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews (287)</TabsTrigger>
                  <TabsTrigger value="seller">About Seller</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-display font-semibold text-lg mb-3">About This Service</h3>
                      <p className="text-muted-foreground mb-4">
                        Looking for a modern, professional website built with cutting-edge technology? 
                        I specialize in creating responsive, high-performance websites using React and modern web standards.
                      </p>
                      <p className="text-muted-foreground mb-4">
                        What you'll get:
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span>Fully responsive design that works on all devices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span>Clean, maintainable code following best practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span>SEO optimized for better search engine rankings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5" />
                          <span>Fast loading times and excellent performance</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="border-b last:border-0 pb-6 last:pb-0">
                            <div className="flex items-start gap-3 mb-3">
                              <img 
                                src={avatar2} 
                                alt="Reviewer"
                                className="w-10 h-10 rounded-full"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <p className="font-semibold">Sarah Johnson</p>
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 fill-orange text-orange" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-xs text-muted-foreground mb-2">2 weeks ago</p>
                                <p className="text-sm text-muted-foreground">
                                  Excellent work! Very professional and delivered exactly what I needed. 
                                  Communication was great throughout the project.
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="seller" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <img 
                          src={avatar1} 
                          alt="Alex Chen"
                          className="w-20 h-20 rounded-full"
                        />
                        <div>
                          <h3 className="font-display font-semibold text-xl mb-1">Alex Chen</h3>
                          <p className="text-muted-foreground mb-2">Full-Stack Developer</p>
                          <Button variant="outline" size="sm">View Profile</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-secondary rounded-lg">
                          <p className="text-2xl font-bold text-accent">500+</p>
                          <p className="text-sm text-muted-foreground">Orders Completed</p>
                        </div>
                        <div className="text-center p-4 bg-secondary rounded-lg">
                          <p className="text-2xl font-bold text-accent">1 hour</p>
                          <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">
                        Professional web developer with 5+ years of experience in React, Node.js, and modern web technologies. 
                        I'm passionate about creating beautiful, functional websites that help businesses succeed online.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Related Services */}
              <div>
                <h3 className="font-display font-semibold text-xl mb-4">Related Services</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedServices.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Pricing */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {packages.map((pkg) => (
                      <div key={pkg.name} className={`border rounded-lg p-4 ${pkg.popular ? 'border-accent' : ''}`}>
                        {pkg.popular && (
                          <Badge className="mb-2 bg-accent text-accent-foreground">Most Popular</Badge>
                        )}
                        <h4 className="font-display font-semibold text-lg mb-2">{pkg.name}</h4>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-3xl font-bold">{pkg.price}</span>
                          <span className="text-accent font-medium">{pkg.crypto}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Clock className="h-4 w-4" />
                          <span>{pkg.delivery} delivery</span>
                        </div>
                        <ul className="space-y-2 mb-4">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-accent mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-accent hover:bg-accent/90 mb-2">
                          Order Now
                        </Button>
                      </div>
                    ))}
                    
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
