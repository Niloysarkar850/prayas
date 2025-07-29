import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, HandHeart, Share2 } from "lucide-react";

const HowToHelp = () => {
  const ways = [
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Your financial contribution directly supports our programs and helps us reach more communities in need.",
      action: "Donate Now",
      variant: "donate" as const,
      color: "from-hope-orange to-trust-blue"
    },
    {
      icon: Clock,
      title: "Volunteer Your Time",
      description: "Join our team of dedicated volunteers and contribute your skills and time to make a hands-on difference.",
      action: "Volunteer",
      variant: "hero" as const,
      color: "from-trust-blue to-growth-green"
    },
    {
      icon: HandHeart,
      title: "Sponsor a Program",
      description: "Sponsor specific programs like education, healthcare, or housing to create targeted impact in communities.",
      action: "Sponsor",
      variant: "impact" as const,
      color: "from-growth-green to-hope-orange"
      
    },
    {
      icon: Share2,
      title: "Spread Awareness",
      description: "Share our mission with your network and help us reach more people who want to make a difference.",
      action: "Share",
      variant: "outline" as const,
      color: "from-trust-blue to-hope-orange"
    }
  ];

  return (
    <section id="help" className="py-20 bg-gradient-to-br from-accent/20 to-warm-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
            How You Can Help
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            There are many ways to support PRAYAS and become part of our mission to transform lives. 
            Choose the way that resonates most with you and start making a difference today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ways.map((way, index) => (
            <Card 
              key={index}
              className="bg-white shadow-soft hover:shadow-xl transition-all duration-300 border-0 group"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${way.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <way.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-trust-blue">
                  {way.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {way.description}
                </p>
                <Button variant={way.variant} size="lg" className="w-full">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
            Every Action Counts
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's a small donation, a few hours of volunteering, or simply sharing our story, 
            every contribution helps us create lasting change in communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="donate" size="lg" className="text-lg px-8 py-4">
              Start Contributing Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;