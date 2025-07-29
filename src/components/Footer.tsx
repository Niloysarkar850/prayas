import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trust-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-hope-orange to-growth-green p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">PRAYAS</h3>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Transforming lives through compassion and action. Join us in creating 
              sustainable solutions for social challenges and building stronger communities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/g/16idM9EtMo/" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-hope-orange transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-hope-orange transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-hope-orange transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-hope-orange transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-hope-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-hope-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white/80 hover:text-hope-orange transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#help" className="text-white/80 hover:text-hope-orange transition-colors">
                  How to Help
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-hope-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-hope-orange transition-colors">
                  Education for All
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-hope-orange transition-colors">
                  Housing Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-hope-orange transition-colors">
                  Healthcare Access
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-hope-orange transition-colors">
                  Nutrition Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-hope-orange transition-colors">
                  Volunteer Opportunities
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 PRAYAS. All rights reserved. Built with love for the community.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-hope-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-hope-orange transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-hope-orange transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;