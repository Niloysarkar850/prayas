import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Home, Heart, Utensils } from "lucide-react";
import impactIcon from "@/assets/impact-icon.jpg";

const Impact = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education for All",
      description: "Providing quality education and learning resources to underprivileged children",
      impact: "15+ children educated",
      color: "from-trust-blue to-growth-green"
    },
    {
      icon: Home,
      title: "Housing Solutions",
      description: "Building safe and sustainable homes for families in need",
      impact: "Will be there soon",
      color: "from-hope-orange to-trust-blue"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Delivering essential medical care to remote and underserved communities",
      impact: "Will be there soon",
      color: "from-growth-green to-hope-orange"
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description: "Ensuring food security and proper nutrition for vulnerable populations",
      impact: "1000+ meals provided",
      color: "from-trust-blue to-hope-orange"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden shadow-soft">
            <img 
              src={impactIcon} 
              alt="Impact Icon" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through dedicated efforts and community partnerships, PRAYAS has created meaningful 
            change across multiple sectors. Here's how we're making a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="bg-white shadow-soft hover:shadow-xl transition-all duration-300 border-0 group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-trust-blue group-hover:text-hope-orange transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="text-lg font-semibold text-growth-green">
                  {program.impact}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-8">
            Ready to be part of our next success story?
          </p>
          <Button variant="impact" size="lg" className="text-lg px-8 py-4">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Impact;