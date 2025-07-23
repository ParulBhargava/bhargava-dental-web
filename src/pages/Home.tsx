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
      specialization: "Prosthodontist & Implantologist",
      image: drVikramImage,
      bio: "Dr. Vikram Khanna who is a Prosthodontist and Implantologist has completed his Bachelors from IDST Meerut and his Masters from SBBDC Ghaziabad both from CCS University, Meerut. He is currently a Reader (faculty) in SBBDC, Ghaziabad and has been practicing since 2008 and running a chain of dental clinics successfully since 2009 in Noida. He has done his certification courses in PGDCR and FAGE as well. Extremely well versed with his dental knowledge and skills he has done multiple number of complicated cases including all types of implants including all on 4 and all on 6 hybrid dentures and different kinds of crowns and bridges. He also specializes in pterygoid implants and various replacements possible in complicated cases.",
      education: "BDS (IDST Meerut), MDS (SBBDC Ghaziabad), PGDCR, FAGE"
    },
    {
      name: "Dr. Geetima Khanna",
      specialization: "Paediatric Dentist",
      image: drGetimaImage,
      bio: "Dr. Geetima Khanna who is a Paediatric dentist has completed her Bachelors from ITS Muradnagar in 2008 and her Masters from SBBDC, Ghaziabad in 2015 both from CCS University, Meerut. She is currently a Reader (faculty) in SBBDC, Ghaziabad in Paediatric department. She has been practicing since 2008 and with her never ending dedication towards dentistry and wide knowledge about her subject has been a great choice for patients always. She is always ready for all kinds of challenges working effortlessly and with expertise making dental treatments easy for everyone.",
      education: "BDS (ITS Muradnagar, 2008), MDS (SBBDC Ghaziabad, 2015)"
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

      {/* About Section */}
      <section className="py-16 bg-clinic-warm/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Bhargava Dental Care
              </h2>
            </div>
            
            {/* Founder Memorial */}
            <div className="mb-8 p-8 bg-background rounded-2xl shadow-gentle border border-clinic-warm/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src={drBalramImage} 
                  alt="Late Dr. Balram Bhargava"
                  className="w-40 h-40 rounded-full object-cover border-4 border-clinic-warm shadow-gentle"
                />
                <div className="text-left flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-3">Late Dr. Balram Bhargava</h3>
                  <p className="text-primary font-semibold mb-4 text-lg">Founder & Chief Dental Surgeon</p>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    <p>
                      Bhargava Dental Care was established in 1985 by Late Dr Balram Bhargava in East Delhi.
                    </p>
                    <p>
                      Subsequently, in the year 2002 as a result of popular demand he opened his second clinic in Sector 29 Noida. Back then, this was the only Dental Clinic in and around Sector 29, 30 & 37 with Dr Balram Bhargava also being the senior most Dental Surgeon in Noida.
                    </p>
                    <p>
                      In the last ~20 years, the clinic has been known for quality of treatments, customer satisfaction & the ability to handle complicated cases.
                    </p>
                    <p className="font-medium text-primary">
                      In order to carry forward the legacy left behind by Dr. Balram Bhargava, the clinic now offers the same services with specialised expert dentists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Specialists Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Dental Specialists
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our experienced team of dental professionals dedicated to providing you with the highest quality care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
            {doctors.map((doctor, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-gentle hover:shadow-soft transition-all duration-300 bg-clinic-warm/10 border border-clinic-warm/20">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/4">
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="w-full h-80 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-3/4 p-8">
                      <h3 className="text-3xl font-bold text-foreground mb-3">
                        {doctor.name}
                      </h3>
                      <p className="text-primary font-semibold mb-3 text-lg">
                        {doctor.specialization}
                      </p>
                      <p className="text-sm text-clinic-warm-dark font-medium mb-4 bg-clinic-warm/20 px-3 py-1 rounded-full inline-block">
                        {doctor.education}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                        {doctor.bio}
                      </p>
                      <div className="flex items-center text-sm text-primary bg-primary/10 px-4 py-2 rounded-full inline-flex">
                        <Star className="w-4 h-4 mr-2 fill-current" />
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
      <section className="py-16 bg-clinic-warm/10">
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
              <Card key={index} className="text-center border-0 shadow-gentle hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-background border border-clinic-warm/30">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-clinic-warm/30 rounded-full mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-clinic-warm/10 rounded-2xl border border-clinic-warm/30">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">39+ Years</h3>
                <p className="text-muted-foreground">Of Excellence (Since 1985)</p>
              </div>
              <div className="text-center p-6 bg-clinic-warm/10 rounded-2xl border border-clinic-warm/30">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-clinic-warm-dark rounded-full mb-6">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">10,000+</h3>
                <p className="text-muted-foreground">Happy Patients</p>
              </div>
              <div className="text-center p-6 bg-clinic-warm/10 rounded-2xl border border-clinic-warm/30">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">100%</h3>
                <p className="text-muted-foreground">Patient Care</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed bg-clinic-warm/10 p-8 rounded-2xl border border-clinic-warm/30">
              At Bhargava Dental Care, we are committed to providing exceptional dental care in a comfortable and welcoming environment. 
              Located in Sector 29, Noida, our multispecialty and multidisciplinary clinic has been serving the NCR community since 1985. 
              Our team of experienced professionals uses the latest technology and techniques to ensure you receive the best possible treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Timings Section */}
      <section className="py-16 bg-clinic-warm/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Clinic Timings
            </h2>
            <div className="bg-background rounded-2xl p-8 border border-clinic-warm/30 shadow-gentle">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Tuesday to Sunday</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-clinic-warm/20 rounded-2xl p-6 border border-clinic-warm/40">
                    <h4 className="font-semibold text-primary mb-3 text-lg">Morning</h4>
                    <p className="text-2xl font-bold text-foreground">10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="bg-clinic-warm/20 rounded-2xl p-6 border border-clinic-warm/40">
                    <h4 className="font-semibold text-primary mb-3 text-lg">Evening</h4>
                    <p className="text-2xl font-bold text-foreground">5:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h4 className="font-semibold text-red-800 mb-2 text-lg">Monday</h4>
                  <p className="text-red-600 font-medium text-lg">Weekly Off</p>
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