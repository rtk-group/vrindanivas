import { motion } from 'framer-motion';
import { FaWifi, FaSnowflake, FaCoffee, FaBath } from 'react-icons/fa';
import { images } from '../assets/images';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      title: "First Floor Deluxe - Room 1",
      desc: "Elevated comfort on the first floor with large windows bringing in natural light and fresh air. A perfect retreat after a long day of darshan.",
      price: "₹999 / day",
      img: `${images.img1}`,
    },
    {
      id: 2,
      title: "First Floor Deluxe - Room 2",
      desc: "A stunning deluxe room on the first floor perfect for families or couples seeking a serene retreat with a premium homestay feel.",
      price: "₹999 / day",
      img: `${images.img5}`,
    }
  ];

  const amenities = [
    { icon: <FaSnowflake size={20} />, name: "Air Conditioning" },
    { icon: <FaWifi size={20} />, name: "Free Wi-Fi" },
    { icon: <FaBath size={20} />, name: "Separate Bathroom" },
    { icon: <FaCoffee size={20} />, name: "Coffee/Tea Maker" },
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-goyard-gold uppercase tracking-[0.25em] font-bold text-xs mb-4">Our Accommodation</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-goyard-dark mb-6">Premium Rooms</h1>
          <div className="w-16 h-[1px] bg-goyard-gold mx-auto"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-serif">
            Experience complete privacy in our exclusive 4-room property. Featuring 2 rooms on the ground floor and 2 on the first floor, fully equipped for your comfort.
          </p>
        </motion.div>

        {/* Rooms List */}
        <div className="space-y-16">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0 bg-goyard-light overflow-hidden border border-gray-100 shadow-sm`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden group">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-serif text-goyard-dark font-bold mb-4">{room.title}</h2>
                <p className="text-goyard-gold text-sm font-bold uppercase tracking-widest mb-6">{room.price}</p>

                <p className="text-gray-600 mb-8 leading-relaxed font-serif text-lg">
                  {room.desc}
                </p>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-goyard-dark mb-4">Room Amenities</h3>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {amenities.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-600 text-sm font-medium">
                      <span className="text-goyard-gold mr-3">{item.icon}</span>
                      {item.name}
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919690103443?text=Radhe%20Radhe!%20I%20want%20to%20book%20${encodeURIComponent(room.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-goyard-dark hover:bg-goyard-gold text-white text-center py-4 px-8 text-xs uppercase tracking-widest font-bold transition-colors duration-400 self-start"
                >
                  Book Now via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Rooms;
