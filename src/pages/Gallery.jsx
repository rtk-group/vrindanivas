import { motion } from 'framer-motion';
import { images } from '../assets/images.js'

const Gallery = () => {
  // Placeholder images
  const image = [
    images.img1,
    images.img2,
    images.img4,
    images.img5,
    images.img6,
    images.img7,
    images.img8,
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-madhav-green mb-4">Gallery</h1>
          <div className="w-24 h-1 bg-madhav-gold mx-auto"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A glimpse into the serene and premium environment at Vrinda Nivas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {image.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Vrinda Nivas Gallery ${index + 1}`} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
