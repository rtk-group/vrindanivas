import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-madhav-green mb-4">Our Story</h1>
          <div className="w-24 h-1 bg-madhav-gold mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Vrinda Nivas Property" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-3xl font-serif font-semibold text-gray-800">Radhe Radhe!</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vrinda Nivas was born out of a desire to provide a peaceful, luxurious, and spiritually uplifting stay for devotees and travelers visiting Vrindavan. Built on our private property, it guarantees an exclusive and intimate experience that commercial hotels cannot offer.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every corner of our homestay has been designed with love, blending modern premium amenities with the traditional warmth and devotion of Brij Bhoomi.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are here for temple darshans, a spiritual retreat, or simply to find peace, Vrinda Nivas is your home away from home.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
