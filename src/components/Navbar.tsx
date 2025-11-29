import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, Wallet } from "lucide-react";

const Navbar = () => {
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
            <Link to="/become-seller" className="hover:text-accent transition-smooth">
              Become a Seller
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
              <Wallet className="h-5 w-5" />
            </Button>
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
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
