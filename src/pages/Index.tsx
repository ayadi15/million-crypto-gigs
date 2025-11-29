import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ServiceCard from "@/components/ServiceCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import { Code, Palette, PenTool, Video, TrendingUp, Megaphone, Camera, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import serviceWebImg from "@/assets/service-web.jpg";
import serviceDesignImg from "@/assets/service-design.jpg";
import serviceVideoImg from "@/assets/service-video.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const Index = () => {
  const popularServices = [
    {
      id: "1",
      image: serviceWebImg,
      title: "I will create a professional responsive website with React",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "0.05",
      crypto: "ETH",
      deliveryTime: "3 days",
      featured: true,
    },
    {
      id: "2",
      image: serviceDesignImg,
      title: "I will design a modern logo and brand identity",
      seller: { name: "Sarah Kim", avatar: avatar2, rating: 5.0, reviews: 432 },
      price: "0.02",
      crypto: "ETH",
      deliveryTime: "2 days",
      featured: true,
    },
    {
      id: "3",
      image: serviceVideoImg,
      title: "I will edit your video professionally with color grading",
      seller: { name: "Marcus Silva", avatar: avatar3, rating: 4.8, reviews: 198 },
      price: "150",
      crypto: "USDT",
      deliveryTime: "5 days",
    },
    {
      id: "4",
      image: serviceWebImg,
      title: "I will develop a custom WordPress website",
      seller: { name: "Alex Chen", avatar: avatar1, rating: 4.9, reviews: 287 },
      price: "200",
      crypto: "USDT",
      deliveryTime: "7 days",
    },
  ];

  const categories = [
    { icon: Code, title: "Web Development", count: "2,500+ services", href: "/browse?cat=web" },
    { icon: Palette, title: "Graphic Design", count: "3,800+ services", href: "/browse?cat=design" },
    { icon: PenTool, title: "Writing & Content", count: "1,900+ services", href: "/browse?cat=writing" },
    { icon: Video, title: "Video Editing", count: "1,200+ services", href: "/browse?cat=video" },
    { icon: Megaphone, title: "Digital Marketing", count: "2,100+ services", href: "/browse?cat=marketing" },
    { icon: Music, title: "Music & Audio", count: "850+ services", href: "/browse?cat=music" },
    { icon: Camera, title: "Photography", count: "950+ services", href: "/browse?cat=photo" },
    { icon: TrendingUp, title: "SEO Services", count: "1,600+ services", href: "/browse?cat=seo" },
  ];

  const testimonials = [
    {
      name: "Jennifer Torres",
      role: "Startup Founder",
      avatar: avatar2,
      text: "Million+ changed how we hire talent. Instant crypto payments mean our remote team gets paid immediately, no matter where they are.",
    },
    {
      name: "David Park",
      role: "Freelance Designer",
      avatar: avatar3,
      text: "As a freelancer, getting paid in crypto is a game-changer. No more waiting days for bank transfers or losing money on fees.",
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Agency Owner",
      avatar: avatar1,
      text: "The quality of talent on Million+ is exceptional. We've hired developers, designers, and marketers - all seamlessly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Popular Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">Most Popular Services</h2>
                <p className="text-muted-foreground">Hand-picked services by our team</p>
              </div>
              <Link to="/browse">
                <Button variant="outline" className="hidden md:inline-flex">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularServices.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore thousands of services across all categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Users Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of satisfied clients and freelancers
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-card transition-smooth">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join Million+ for free and start your freelancing journey today
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/for-freelancers">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                  Join as a Freelancer
                </Button>
              </Link>
              <Link to="/for-clients">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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

export default Index;
