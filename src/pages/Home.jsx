import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaWifi, FaCar, FaCoffee, FaBed, FaHome, FaBath, FaShieldAlt, FaLeaf, FaVolumeMute, FaVolumeUp, FaArrowUp, FaDoorOpen, FaHotTub, FaSuitcaseRolling, FaGlassMartiniAlt, FaShuttleVan } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  // Video Slider States
  const swiperRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Scroll Animation States
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "center center"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  const handleBooking = (e) => {
    e.preventDefault();
    const message = `Radhe Radhe! Booking Query:%0A*Check-in:* ${checkIn}%0A*Check-out:* ${checkOut}%0A*Guests:* ${guests}`;
    window.open(`https://wa.me/919690103443?text=${message}`, '_blank');
  };

  const fadeUpVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const interactiveVideoSlides = [
    {
      title: "Exclusive Private Property",
      heading: "Exclusive Private Property",
      desc: "We guarantee you'll find the best deals right here on our website. So BOOK DIRECT and receive these added benefits at no extra cost:",
      video: "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.480p.vp9.webm"
    },
    {
      title: "Peaceful Darshan & Retreat",
      heading: "Peaceful Darshan & Retreat",
      desc: "We guarantee you'll find the best deals right here on our website. So BOOK DIRECT and receive these added benefits at no extra cost:",
      video: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      title: "Premium 4-Room Comfort",
      heading: "Premium 4-Room Comfort",
      desc: "We guarantee you'll find the best deals right here on our website. So BOOK DIRECT and receive these added benefits at no extra cost:",
      video: "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.480p.vp9.webm"
    },
    {
      title: "The Heart of Vrindavan",
      heading: "The Heart of Vrindavan",
      desc: "We guarantee you'll find the best deals right here on our website. So BOOK DIRECT and receive these added benefits at no extra cost:",
      video: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Peacock_Plumage_Display.webm/Peacock_Plumage_Display.webm.480p.vp9.webm"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen">
        <div className="h-full w-full relative">
          <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920" className="absolute inset-0 w-full h-full object-cover z-0" alt="Vrinda Nivas" />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 mt-16">
            <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-goyard-gold uppercase tracking-[0.25em] font-bold text-xs mb-6">Private Homestay in Vrindavan</motion.p>
            <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.4 }} className="text-5xl md:text-7xl text-white font-serif leading-tight max-w-4xl">Book Directly With Us For Best Price Guaranteed</motion.h1>
          </div>
        </div>

        {/* BOOKING OVERLAY */}
        <div className="absolute bottom-0 left-0 w-full z-30 transform translate-y-1/2 px-4">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="max-w-[1100px] mx-auto bg-white shadow-2xl flex flex-col md:flex-row border border-gray-100">
            <div className="flex-1 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Check-in</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full focus:outline-none text-goyard-dark font-serif text-lg cursor-pointer bg-transparent"/>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Check-out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full focus:outline-none text-goyard-dark font-serif text-lg cursor-pointer bg-transparent"/>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-200">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Guests</label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full focus:outline-none text-goyard-dark font-serif text-lg cursor-pointer bg-transparent appearance-none">
                <option value="1">1 Person</option><option value="2">2 Persons</option><option value="3">3 Persons</option><option value="4">4+ Persons</option>
              </select>
            </div>
            <button onClick={handleBooking} className="flex-1 bg-goyard-gold text-white hover:bg-goyard-dark transition-colors duration-400 uppercase tracking-widest text-[11px] font-bold flex items-center justify-center py-6 md:py-0">
              Check Availability
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID & ANIMATED IMAGE */}
      <section className="pt-32 pb-20 bg-white">
        {/* 5 Column Grid */}
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-y-12">
          
          <div className="flex flex-col items-center justify-start text-center px-6 md:border-r border-gray-200">
            <FaDoorOpen className="text-4xl text-goyard-gold mb-6 opacity-80"/>
            <h4 className="font-serif text-[22px] text-goyard-dark mb-3 leading-tight">Early check-in and<br/>late check-out</h4>
            <p className="text-[13px] text-gray-500 font-light">Subject to availability</p>
          </div>
          
          <div className="flex flex-col items-center justify-start text-center px-6 md:border-r border-gray-200">
            <FaHotTub className="text-4xl text-goyard-gold mb-6 opacity-80"/>
            <h4 className="font-serif text-[22px] text-goyard-dark mb-3 leading-tight">Peaceful environment<br/>and relaxation</h4>
            <p className="text-[13px] text-gray-500 font-light">Serene Garden Area</p>
          </div>

          <div className="flex flex-col items-center justify-start text-center px-6 md:border-r border-gray-200">
            <FaSuitcaseRolling className="text-4xl text-goyard-gold mb-6 opacity-80"/>
            <h4 className="font-serif text-[22px] text-goyard-dark mb-3 leading-tight">VIP treatment<br/>for all guests</h4>
            <p className="text-[13px] text-gray-500 font-light">On Arrival</p>
          </div>

          <div className="flex flex-col items-center justify-start text-center px-6 md:border-r border-gray-200">
            <FaGlassMartiniAlt className="text-4xl text-goyard-gold mb-6 opacity-80"/>
            <h4 className="font-serif text-[22px] text-goyard-dark mb-3 leading-tight">Fresh local drinks<br/>and sweets</h4>
            <p className="text-[13px] text-gray-500 font-light">Welcome offering upon arrival</p>
          </div>

          <div className="flex flex-col items-center justify-start text-center px-6 col-span-2 md:col-span-1">
            <FaShuttleVan className="text-4xl text-goyard-gold mb-6 opacity-80"/>
            <h4 className="font-serif text-[22px] text-goyard-dark mb-3 leading-tight">Local e-rickshaw<br/>assistance</h4>
            <p className="text-[13px] text-gray-500 font-light">Easy transport for Darshan</p>
          </div>

        </div>

        {/* Scroll Animated Image Container */}
        <div ref={scrollRef} className="w-full max-w-[1500px] mx-auto px-4 mt-24 h-[50vh] md:h-[75vh] flex justify-center items-center overflow-hidden">
          <motion.div 
            style={{ scale: imageScale }} 
            className="w-full h-full rounded-[30px] md:rounded-[40px] overflow-hidden origin-center shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Vrinda Nivas Luxury" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. OUR ROOMS */}
      <section className="py-20 bg-goyard-light">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVars} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-goyard-dark">Explore Our Rooms</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">We offer exactly 4 beautifully furnished rooms (2 on the ground floor, 2 on the first floor) to ensure an exclusive and quiet stay.</p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVars} className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ground Floor Room 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-goyard-gold text-xs font-bold uppercase tracking-widest mb-2">Ground Floor</span>
              <h3 className="text-white text-3xl font-serif mb-2">Premium Room 1</h3>
              <p className="text-gray-300 text-sm">Separate Bathroom • Coffee Maker • AC</p>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ground Floor Room 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-goyard-gold text-xs font-bold uppercase tracking-widest mb-2">Ground Floor</span>
              <h3 className="text-white text-3xl font-serif mb-2">Premium Room 2</h3>
              <p className="text-gray-300 text-sm">Separate Bathroom • Coffee Maker • AC</p>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="First Floor Room 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-goyard-gold text-xs font-bold uppercase tracking-widest mb-2">First Floor</span>
              <h3 className="text-white text-3xl font-serif mb-2">Deluxe Room 1</h3>
              <p className="text-gray-300 text-sm">Separate Bathroom • Coffee Maker • AC</p>
            </div>
          </div>
          <div className="relative group overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="First Floor Room 2" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-goyard-gold text-xs font-bold uppercase tracking-widest mb-2">First Floor</span>
              <h3 className="text-white text-3xl font-serif mb-2">Deluxe Room 2</h3>
              <p className="text-gray-300 text-sm">Separate Bathroom • Coffee Maker • AC</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. AMENITIES TEXT & LIST */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVars} className="py-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif text-goyard-dark mb-8 leading-tight">
            We provide all the basic amenities you need for a comfortable stay
          </h2>
          <ul className="space-y-4 font-serif text-xl text-gray-600">
            <li className="flex items-center"><span className="w-2 h-2 bg-goyard-gold rounded-full mr-4"></span>Air Conditioned Rooms</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-goyard-gold rounded-full mr-4"></span>Private and peaceful environment</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-goyard-gold rounded-full mr-4"></span>Clean separate bathrooms</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-goyard-gold rounded-full mr-4"></span>In-room coffee/tea maker</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-goyard-gold rounded-full mr-4"></span>Daily housekeeping</li>
            <li className="flex items-center"><span className="w-2 h-2 bg-goyard-gold rounded-full mr-4"></span>Close to major temples</li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-goyard-light p-12">
          <h3 className="text-2xl font-serif text-goyard-dark mb-10">Your stay at Vrinda Nivas includes:</h3>
          <div className="grid grid-cols-2 gap-y-10 gap-x-6">
            <div className="flex items-center"><FaHome className="text-3xl text-goyard-gold mr-4"/><span className="text-sm font-bold uppercase tracking-widest text-goyard-dark">Homely Vibe</span></div>
            <div className="flex items-center"><FaWifi className="text-3xl text-goyard-gold mr-4"/><span className="text-sm font-bold uppercase tracking-widest text-goyard-dark">Free Wi-Fi</span></div>
            <div className="flex items-center"><FaBath className="text-3xl text-goyard-gold mr-4"/><span className="text-sm font-bold uppercase tracking-widest text-goyard-dark">Clean Baths</span></div>
            <div className="flex items-center"><FaShieldAlt className="text-3xl text-goyard-gold mr-4"/><span className="text-sm font-bold uppercase tracking-widest text-goyard-dark">High Security</span></div>
            <div className="flex items-center"><FaLeaf className="text-3xl text-goyard-gold mr-4"/><span className="text-sm font-bold uppercase tracking-widest text-goyard-dark">Peaceful</span></div>
            <div className="flex items-center"><FaCar className="text-3xl text-goyard-gold mr-4"/><span className="text-sm font-bold uppercase tracking-widest text-goyard-dark">Parking space</span></div>
          </div>
        </div>
      </motion.section>

      {/* 5. INTERACTIVE VIDEO SHOWCASE (As requested in image) */}
      <section className="relative h-screen w-full bg-black text-white font-sans overflow-hidden">
        <Swiper
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveVideo(swiper.realIndex)}
          className="w-full h-full absolute inset-0 z-0"
        >
          {interactiveVideoSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full h-full relative">
                <video
                  src={slide.video}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* OVERLAY UI */}
        <div className="absolute inset-0 z-10 max-w-[1600px] mx-auto px-6 md:px-12 pointer-events-none flex items-center">
          
          {/* LEFT NAVIGATION */}
          <div className="hidden lg:flex flex-col space-y-3 pointer-events-auto w-1/4">
            {interactiveVideoSlides.map((slide, idx) => (
              <button 
                key={idx}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className={`text-left text-sm transition-all duration-500 ${activeVideo === idx ? 'text-white font-bold' : 'text-gray-400 hover:text-gray-200 font-normal'}`}
              >
                {slide.title}
              </button>
            ))}
          </div>

          {/* CENTER CONTENT */}
          <div className="w-full lg:w-2/4 pointer-events-auto flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-gray-300">Book Your Stay</p>
            <motion.h2 
              key={activeVideo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-[1.1]"
            >
              {interactiveVideoSlides[activeVideo].heading}
            </motion.h2>
            <motion.p 
              key={`desc-${activeVideo}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-sm md:text-base mb-10 max-w-md leading-relaxed"
            >
              {interactiveVideoSlides[activeVideo].desc}
            </motion.p>
            <button className="bg-white text-black px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-goyard-gold hover:text-white transition-colors self-start pointer-events-auto">
              Discover More
            </button>
          </div>

          {/* RIGHT PAGINATION DOTS */}
          <div className="hidden lg:flex flex-col space-y-4 items-center justify-center pointer-events-auto absolute right-12">
            {interactiveVideoSlides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => swiperRef.current?.slideToLoop(idx)}
                className="flex items-center justify-center w-6 h-6 rounded-full group outline-none"
              >
                <span className={`flex items-center justify-center rounded-full transition-all duration-300 ${activeVideo === idx ? 'w-5 h-5 border border-white' : 'w-1.5 h-1.5 bg-gray-500 group-hover:bg-gray-300'}`}>
                  {activeVideo === idx && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 md:right-12 z-20 flex justify-between items-center pointer-events-auto">
          <button 
            onClick={() => setIsMuted(!isMuted)} 
            className="flex items-center text-white hover:text-goyard-gold transition-colors group outline-none"
          >
            {isMuted ? <FaVolumeMute className="mr-3 text-xl"/> : <FaVolumeUp className="mr-3 text-xl"/>}
            <span className="text-[10px] uppercase font-bold tracking-[0.15em]">{isMuted ? 'Muted' : 'Active sound'}</span>
          </button>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-goyard-gold hover:text-white transition-colors outline-none"
          >
            <FaArrowUp />
          </button>
        </div>
      </section>

      {/* 6. STAY CONNECTED (Infinite Marquee) */}
      <section className="pt-24 pb-0 overflow-hidden bg-white border-t border-gray-100">
        <h2 className="text-4xl md:text-5xl font-serif text-goyard-dark mb-16 text-center">Stay Connected</h2>
        
        {/* Continuous slide right to left */}
        <div className="animate-marquee hover:pause flex w-[200%] h-[300px]">
          {/* First set of images */}
          <div className="flex w-1/2">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 1"/>
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 2"/>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 3"/>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 4"/>
            <img src="https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 5"/>
          </div>
          {/* Second cloned set of images for seamless loop */}
          <div className="flex w-1/2">
            <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 1"/>
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 2"/>
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 3"/>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 4"/>
            <img src="https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-4.0.3&w=400&q=80" className="w-1/5 h-full object-cover border-r border-white" alt="Gallery 5"/>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
