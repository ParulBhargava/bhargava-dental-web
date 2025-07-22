import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">706, Ward 8, Sector 29</p>
                  <p className="text-sm">Noida, Uttar Pradesh</p>
                  <p className="text-sm">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div className="text-sm">
                  <p>+91 9818032955</p>
                  <p>+91 1204374921</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <p className="text-sm">info@bhargavadentalcare.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <div className="text-sm">
                  <p>Tuesday - Sunday:</p>
                  <p>10:00 AM - 2:00 PM</p>
                  <p>5:00 PM - 9:00 PM</p>
                  <p className="text-red-300 mt-1">Monday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80">
              A multispecialty and multidisciplinary dental clinic serving Noida, NCR since 1985.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Bhargava Dental Care. All rights reserved. | Estd. 1985
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;