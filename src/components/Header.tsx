import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-trust-blue to-hope-orange p-2 rounded-full">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
              PRAYAS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-trust-blue transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-trust-blue transition-colors">
              About
            </a>
            <a href="#impact" className="text-foreground hover:text-trust-blue transition-colors">
              Our Impact
            </a>
            <a href="#help" className="text-foreground hover:text-trust-blue transition-colors">
              How to Help
            </a>
            <a href="#contact" className="text-foreground hover:text-trust-blue transition-colors">
              Contact
            </a>
            <a href="https://rzp.io/rzp/prayas"><Button variant="donate" size="sm">
              Donate Now
            </Button></a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-foreground hover:text-trust-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-trust-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#impact" 
                className="text-foreground hover:text-trust-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Impact
              </a>
              <a 
                href="#help" 
                className="text-foreground hover:text-trust-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How to Help
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-trust-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="https://rzp.io/rzp/prayas"><Button variant="donate" size="sm" className="w-fit">
                Donate Now
              </Button></a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;