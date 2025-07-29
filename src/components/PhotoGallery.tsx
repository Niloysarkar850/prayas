import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Camera } from "lucide-react";

const PhotoGallery = () => {
  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/541c7062-96a4-45ff-a444-693167c6783b.png",
      alt: "Children learning outdoors in PRAYAS education program",
      title: "Education in Action",
      description: "Our outdoor learning programs bring education directly to communities, creating inclusive spaces where children can learn and grow together."
    },
    {
      id: 2,
      src: "/lovable-uploads/9cb5fde8-d990-4823-ab25-6bc8c2e0837e.png",
      alt: "PRAYAS community group with families and volunteers",
      title: "Community Unity",
      description: "Building strong relationships with families and communities is at the heart of sustainable change and empowerment."
    },
    {
      id: 3,
      src: "/lovable-uploads/bab3f95a-f1af-45d9-854f-911d7a328097.png",
      alt: "PRAYAS volunteer with children showing care and support",
      title: "Compassionate Care",
      description: "Our dedicated volunteers and team members provide not just services, but genuine care and support to every family we serve."
    },
    {
      id: 4,
      src: "public/lovable-uploads/WhatsApp Image 2025-05-10 at 20.05.32.jpeg",
      alt: "PRAYAS volunteer with children showing care and support",
      title: "Learning",
      description: "Our dedicated volunteers and team members provide not just services, but genuine care and support to every family we serve."
    },
    {
      id: 5,
      src: "public/lovable-uploads/WhatsApp Image 2025-05-24 at 18.35.20.jpeg",
      alt: "PRAYAS volunteer with children showing care and support",
      title: "Child Care",
      description: "Our dedicated volunteers and team members provide not just services, but genuine care and support to every family we serve."
    },
    {
      id: 4,
      src: "public/lovable-uploads/WhatsApp Image 2025-07-27 at 18.56.29.jpeg",
      alt: "PRAYAS volunteer with children showing care and support",
      title: "Compassionate Care",
      description: "Our dedicated volunteers and team members provide not just services, but genuine care and support to every family we serve."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream/50 to-accent/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-r from-trust-blue to-hope-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
            See Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These moments capture the heart of PRAYAS - real people, real communities, and real impact. 
            Every photo tells a story of hope, transformation, and the power of working together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <Card 
              key={photo.id}
              className="bg-white shadow-soft hover:shadow-xl transition-all duration-300 border-0 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trust-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <Quote className="h-6 w-6 mb-2 opacity-80" />
                    <p className="text-sm font-medium">Real Impact, Real Change</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-trust-blue group-hover:text-hope-orange transition-colors">
                  {photo.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {photo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-soft p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-trust-blue to-hope-orange bg-clip-text text-transparent">
              Be Part of These Stories
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every donation, every volunteer hour, and every act of support helps create more moments like these. 
              Join us in building stronger communities and brighter futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="https://rzp.io/rzp/prayas"> <Button variant="donate" size="lg">
                Support Our Programs
              </Button>
              </a>
              <Button variant="hero" size="lg">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;