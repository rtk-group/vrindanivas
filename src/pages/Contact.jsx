import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-goyard-gold uppercase tracking-[0.25em] font-bold text-xs mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-goyard-dark mb-6">Get in Touch</h1>
          <div className="w-16 h-[1px] bg-goyard-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-goyard-light p-10 lg:p-12 border border-gray-100 shadow-sm"
          >
            <h2 className="text-3xl font-serif font-bold text-goyard-dark mb-10">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full text-goyard-gold mr-5 border border-goyard-gold/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-goyard-dark text-lg uppercase tracking-widest text-xs mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed font-serif text-lg">Rukmani Vihar Golchakkar,<br/>Vrindavan 281121</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full text-goyard-gold mr-5 border border-goyard-gold/30">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-goyard-dark text-lg uppercase tracking-widest text-xs mb-2">Phone / WhatsApp</h3>
                  <p className="text-gray-600 font-serif text-lg">+91 96901 03443</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full text-goyard-gold mr-5 border border-goyard-gold/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-goyard-dark text-lg uppercase tracking-widest text-xs mb-2">Email</h3>
                  <p className="text-gray-600 font-serif text-lg">info@vrindanivas.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/919690103443"
                target="_blank"
                rel="noreferrer"
                className="block w-full bg-goyard-dark hover:bg-goyard-gold text-white text-center py-4 text-xs uppercase tracking-widest font-bold transition-colors duration-400"
              >
                Message us on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[600px] bg-gray-200 shadow-sm relative"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://maps.google.com/maps?q=Rukmani%20Vihar%20Golchakkar,%20Vrindavan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Vrinda Nivas Location"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
