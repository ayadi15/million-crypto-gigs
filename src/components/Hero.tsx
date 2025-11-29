import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Code, Palette, Video, PenTool } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/browse?search=${encodeURIComponent(tag)}`);
  };

  const trendingTags = [
    { icon: Palette, label: "Designer" },
    { icon: Code, label: "Developer" },
    { icon: PenTool, label: "Writer" },
    { icon: Video, label: "Video Editor" },
  ];

  return (
    <section className="gradient-hero text-primary-foreground py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-6">
            <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              Powered by Cryptocurrency
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight">
              Million<span className="text-accent">+</span> — Freelancing Powered by Crypto
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Hire experts or offer your skills. Get paid instantly in Million+ Coin (M+).
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search for services, freelancers, or jobs..."
                  className="pl-12 h-14 bg-background text-foreground border-0 shadow-elevated"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
              </div>
              <Button 
                size="lg" 
                className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Trending Tags */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="text-sm text-primary-foreground/70">Trending:</span>
            {trendingTags.map((tag) => (
              <Button
                key={tag.label}
                variant="outline"
                size="sm"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth"
                onClick={() => handleTagClick(tag.label)}
              >
                <tag.icon className="h-4 w-4 mr-2" />
                {tag.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
