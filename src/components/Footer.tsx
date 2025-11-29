import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <span className="text-2xl font-display font-bold">MILLION</span>
                <span className="text-2xl font-display font-bold text-accent">+</span>
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-accent"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-accent"></div>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              The world's first crypto-powered freelance marketplace. Hire experts or offer your skills. Get paid instantly in cryptocurrency.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-accent transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/browse?cat=design" className="hover:text-accent transition-smooth">Graphic Design</Link></li>
              <li><Link to="/browse?cat=web" className="hover:text-accent transition-smooth">Web Development</Link></li>
              <li><Link to="/browse?cat=writing" className="hover:text-accent transition-smooth">Writing & Content</Link></li>
              <li><Link to="/browse?cat=video" className="hover:text-accent transition-smooth">Video Editing</Link></li>
              <li><Link to="/browse?cat=marketing" className="hover:text-accent transition-smooth">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-smooth">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-accent transition-smooth">How It Works</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-smooth">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-smooth">Careers</Link></li>
              <li><Link to="/press" className="hover:text-accent transition-smooth">Press</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/help" className="hover:text-accent transition-smooth">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-accent transition-smooth">Safety Center</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-smooth">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-smooth">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Million+. All rights reserved.</p>
            <div className="flex gap-4">
              <span>🔒 Secure Crypto Payments</span>
              <span>⚡ Instant Transactions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
