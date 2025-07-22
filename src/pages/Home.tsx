import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-dental.jpg";
import drGetimaImage from "@/assets/dr-geetima-khanna.jpg";
import drVikramImage from "@/assets/dr-vikram-khanna.jpg";
import drBalramImage from "@/assets/dr-balram-bhargava.jpg";
import { 
  Shield, 
  Smile, 
  Sparkles, 
  Award, 
  Users, 
  Heart,
  Star,
  Stethoscope
} from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments."
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile makeovers to enhance your confidence."
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Regular checkups and preventive treatments to maintain optimal oral health."
    },
    {
      icon: Sparkles,
      title: "Teeth Cleaning",
      description: "Professional deep cleaning and plaque removal for healthier gums."
    }
  ];

  const doctors = [
    {
      name: "Dr. Vikram Khanna",
      specialization: "Implantologist",
      image: drVikramImage,
      bio: "Dr. Vikram Khanna is a highly skilled implantologist with extensive experience in dental implants and advanced oral surgery. He is committed to providing the highest quality care using cutting-edge technology.",
      education: "BDS, MDS (Oral & Maxillofacial Surgery)"
    },
    {
      name: "Dr. Geetima Khanna",
      specialization: "Paedodontist",
      image: drGetimaImage,
      bio: "Dr. Geetima Khanna specializes in pediatric dentistry with a gentle approach that makes children feel comfortable. She is dedicated to ensuring optimal oral health for young patients.",
      education: "BDS, MDS (Paediatric Dentistry)"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Bhargava Dental Care
          </h1>
          <p className="text-lg md:text-xl mb-2 text-primary-foreground/80 font-medium">
            Estd. 1985
          </p>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            A multispecialty and multidisciplinary dental clinic situated in the heart of Noida, NCR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Dental Specialists Section */}
      <section className="py-16 bg-medical-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Dental Specialists
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our experienced team of dental professionals dedicated to providing you with the highest quality care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card hover:shadow-soft transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-primary font-semibold mb-2">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-trust-green font-medium mb-3">
                        {doctor.education}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {doctor.bio}
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        <span className="font-medium">Highly Rated Specialist</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive dental care tailored to your needs with state-of-the-art technology and gentle care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-light rounded-full mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-medical-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Bhargava Dental Care
            </h2>
            
            {/* Founder Memorial */}
            <div className="mb-12 p-6 bg-background rounded-lg shadow-card">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img 
                  src={drBalramImage} 
                  alt="Late Dr. Balram Bhargava"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Late Dr. Balram Bhargava</h3>
                  <p className="text-primary font-semibold mb-2">Founder & Chief Dental Surgeon</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Balram Bhargava founded this clinic in 1985 with a vision to provide comprehensive dental care to the community. 
                    His dedication to excellence and patient comfort laid the foundation for what Bhargava Dental Care represents today. 
                    His legacy continues through our commitment to quality care and compassionate service.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">39+ Years</h3>
                <p className="text-muted-foreground">Of Excellence (Since 1985)</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trust-green rounded-full mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">10,000+</h3>
                <p className="text-muted-foreground">Happy Patients</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">100%</h3>
                <p className="text-muted-foreground">Patient Care</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Bhargava Dental Care, we are committed to providing exceptional dental care in a comfortable and welcoming environment. 
              Located in Sector 29, Noida, our multispecialty and multidisciplinary clinic has been serving the NCR community since 1985. 
              Our team of experienced professionals uses the latest technology and techniques to ensure you receive the best possible treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Timings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Clinic Timings
            </h2>
            <div className="bg-primary/10 rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Tuesday to Sunday</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-background rounded-lg p-4 shadow-card">
                    <h4 className="font-semibold text-primary mb-2">Morning</h4>
                    <p className="text-2xl font-bold text-foreground">10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-card">
                    <h4 className="font-semibold text-primary mb-2">Evening</h4>
                    <p className="text-2xl font-bold text-foreground">5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">Monday</h4>
                  <p className="text-red-600 font-medium">Weekly Off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;