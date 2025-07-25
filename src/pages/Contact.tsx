import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award,
  Users,
  Heart,
  Shield,
  Star,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details: [
        "706, Ward 8, Sector 29",
        "Noida, Uttar Pradesh",
        "India"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 9818032955",
        "+91 1204374921"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "bhargavadentalcare@gmail.com"
      ]
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: [
        "Tuesday - Sunday:",
        "10:00 AM - 2:00 PM",
        "5:00 PM - 9:00 PM",
        "Monday: Closed"
      ]
    }
  ];

  const achievements = [
    { icon: Award, number: "39+", text: "Years of Excellence (Since 1985)" },
    { icon: Users, number: "10,000+", text: "Happy Patients" },
    { icon: Star, number: "4.9/5", text: "Patient Rating" },
    { icon: CheckCircle, number: "100%", text: "Success Rate" }
  ];

  const services = [
    "General & Family Dentistry",
    "Cosmetic Dentistry & Smile Makeovers",
    "Orthodontics & Braces",
    "Oral Surgery & Extractions",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Preventive Care & Cleanings",
    "Pediatric Dentistry",
    "Emergency Dental Care"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-medical-blue to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact & About Us
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get in touch with our friendly team or learn more about our commitment to exceptional dental care.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help you with all your dental needs. Contact us today to schedule your appointment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-medical-light rounded-full mb-4 mx-auto">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground mb-1">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Clinic Image */}
          <div className="max-w-4xl mx-auto mb-16">
            <img 
              src="/src/assets/hero-dental.jpg" 
              alt="Bhargava Dental Care Clinic" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-medical-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Bhargava Dental Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A multispecialty and multidisciplinary dental clinic serving Noida, NCR since 1985 with compassion, expertise, and state-of-the-art technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established in 1985 by Late Dr. Balram Bhargava, our clinic has been providing comprehensive, high-quality dental care in a comfortable and welcoming environment for nearly four decades. We believe that everyone deserves a healthy, beautiful smile, and we're committed to helping our patients achieve optimal oral health through personalized treatment plans and compassionate care.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Located in the heart of Noida, NCR, our multispecialty and multidisciplinary clinic continues the founder's legacy with experienced dental professionals who stay current with the latest advancements in dental technology and techniques.
              </p>
              <div className="flex items-center space-x-2 text-trust-green">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Trusted by families for over 39 years</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-card">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <achievement.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">
                    {achievement.number}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Compassionate Care</h4>
                <p className="text-muted-foreground">
                  We treat every patient with kindness, understanding, and respect, ensuring a comfortable experience for all.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trust-green rounded-full mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Excellence</h4>
                <p className="text-muted-foreground">
                  We maintain the highest standards of dental care through continuous education and advanced technology.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Trust</h4>
                <p className="text-muted-foreground">
                  We build lasting relationships with our patients based on transparency, honesty, and reliable care.
                </p>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">
              Comprehensive Dental Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                  <CheckCircle className="w-5 h-5 text-trust-green flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-medical-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Noida, NCR. Easily accessible with ample parking facilities.
            </p>
          </div>
          <GoogleMap />
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pb-0">
        <div className="w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.037690655144!2d77.3401599!3d28.568630899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce58ba62cc943%3A0x53f0a7a82b77123a!2sBhargava%20Dental%20Care!5e0!3m2!1sen!2sin!4v1753237942411!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;