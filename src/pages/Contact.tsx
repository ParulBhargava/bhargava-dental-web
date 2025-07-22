import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
        "123 Dental Street",
        "Medical District, City 560001",
        "Karnataka, India"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 80 2345 6789",
        "Emergency: +91 98765 00000"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@bhargavadentalcare.com",
        "appointments@bhargavadentalcare.com",
        "emergency@bhargavadentalcare.com"
      ]
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: [
        "Mon - Fri: 9:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 6:00 PM",
        "Sunday: 10:00 AM - 4:00 PM"
      ]
    }
  ];

  const achievements = [
    { icon: Award, number: "15+", text: "Years of Excellence" },
    { icon: Users, number: "5000+", text: "Happy Patients" },
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

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your dental needs or questions..."
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
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
              Dedicated to providing exceptional dental care with compassion, expertise, and state-of-the-art technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Bhargava Dental Care, our mission is to provide comprehensive, high-quality dental care in a comfortable and welcoming environment. We believe that everyone deserves a healthy, beautiful smile, and we're committed to helping our patients achieve optimal oral health through personalized treatment plans and compassionate care.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team of experienced dental professionals stays current with the latest advancements in dental technology and techniques to ensure our patients receive the most effective and comfortable treatments available.
              </p>
              <div className="flex items-center space-x-2 text-trust-green">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Trusted by families for over 15 years</span>
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

      <Footer />
    </div>
  );
};

export default Contact;