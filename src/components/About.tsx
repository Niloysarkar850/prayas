import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Lives Impacted", value: "50,000+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: Globe, label: "Communities Served", value: "100+" },
    { icon: Award, label: "Years of Service", value: "15+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-warm-cream to-accent/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
            About PRAYAS
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            PRAYAS, meaning "effort" in Sanskrit, represents our unwavering commitment to creating 
            positive change in the world. Founded with the belief that every small action can lead 
            to transformational impact, we work tirelessly to empower communities and individuals.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-soft hover:shadow-xl transition-all duration-300 border-0">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-trust-blue to-hope-orange rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-trust-blue">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create sustainable solutions for social challenges through community-driven 
                initiatives, education, and empowerment programs that foster long-term positive change.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-soft hover:shadow-xl transition-all duration-300 border-0">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-gradient-to-r from-growth-green to-trust-blue rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-trust-blue">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every individual has access to opportunities for growth, education, 
                and dignity, creating communities that thrive through mutual support and compassion.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-soft hover:shadow-xl transition-all duration-300 text-center border-0"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-hope-orange to-growth-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-trust-blue mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;