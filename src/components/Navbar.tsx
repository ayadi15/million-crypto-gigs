import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, Wallet } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <span className="text-2xl font-display font-bold">MILLION</span>
              <span className="text-2xl font-display font-bold text-accent">+</span>
              <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-accent"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-accent"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/browse" className="hover:text-accent transition-smooth">
              Browse Services
            </Link>
            <Link to="/how-it-works" className="hover:text-accent transition-smooth">
              How It Works
            </Link>
            <Link to="/about-million-coin" className="hover:text-accent transition-smooth">
              About M+ Coin
            </Link>
            <Link to="/become-seller" className="hover:text-accent transition-smooth">
              Become a Seller
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                  <Search className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="h-auto">
                <div className="container mx-auto px-4 py-8">
                  <h3 className="text-2xl font-display font-bold mb-4">Search Million+</h3>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Search for services, freelancers, or jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="flex-1"
                      autoFocus
                    />
                    <Button onClick={handleSearch} className="bg-accent hover:bg-accent/90">
                      Search
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link to="/wallet">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Wallet className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="hidden md:inline-flex text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground shadow-orange-glow">
                Join Now
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/browse" className="text-lg hover:text-accent transition-smooth">
                    Browse Services
                  </Link>
                  <Link to="/how-it-works" className="text-lg hover:text-accent transition-smooth">
                    How It Works
                  </Link>
                  <Link to="/about-million-coin" className="text-lg hover:text-accent transition-smooth">
                    About M+ Coin
                  </Link>
                  <Link to="/become-seller" className="text-lg hover:text-accent transition-smooth">
                    Become a Seller
                  </Link>
                  <div className="border-t pt-4 mt-4 space-y-3">
                    <Link to="/login" className="block">
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </Link>
                    <Link to="/signup" className="block">
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Join Now</Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
