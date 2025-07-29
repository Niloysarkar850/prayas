import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-trust-blue/80 to-hope-orange/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-full">
            <Heart className="h-8 w-8 text-white animate-pulse-soft" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Lives Through
            <span className="block bg-gradient-to-r from-warm-cream to-white bg-clip-text text-transparent">
              Compassion & Action
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join PRAYAS in our mission to create lasting change in communities. 
            Together, we can build a world where every person has the opportunity to thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://rzp.io/rzp/prayas"><Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Button></a>
             <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-sky-500 hover:bg-white hover:text-trust-blue">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        
       {/* Floating Elements */}
      <div className="absolute top-20 left-4 sm:left-10 animate-float">
        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-hope-orange rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-36 right-4 sm:top-40 sm:right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-growth-green rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-16 left-4 sm:left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-warm-cream rounded-full opacity-50"></div>
      </div>

      </div>

      {/* Scroll Indicator */}
<div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
    <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
  </div>
</div>

    </section>
  );
};

export default Hero;