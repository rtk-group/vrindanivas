import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-goyard-dark text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left border-b border-gray-800 pb-16">
        
        <div>
          <h3 className="text-3xl font-serif tracking-widest mb-6 text-goyard-gold">VRINDA NIVAS</h3>
          <p className="text-gray-400 text-[13px] leading-relaxed mb-6">
            A premium, private 4-room homestay in the spiritual heart of Vrindavan. Experience divinity with unparalleled privacy and comfort.
          </p>
          <a href="#" className="text-[11px] uppercase tracking-widest font-bold text-goyard-gold hover:text-white transition">Book via WhatsApp</a>
        </div>
        
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] mb-6 text-white">Nearby Temples</h4>
          <ul className="space-y-4 text-[13px] text-gray-400">
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Banke Bihari Temple</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">ISKCON Temple</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Prem Mandir</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Radha Raman Temple</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Nidhivan</span></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] mb-6 text-white">Transportation</h4>
          <ul className="space-y-4 text-[13px] text-gray-400">
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Mathura Railway Station</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Vrindavan Bus Stand</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Yamuna Expressway</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Nearest Airport (Agra)</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Local E-Rickshaws</span></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] mb-6 text-white">Homestay Features</h4>
          <ul className="space-y-4 text-[13px] text-gray-400">
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">4 Premium Rooms</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Separate Bathrooms</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Coffee Maker</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Safe Parking</span></li>
            <li><span className="hover:text-goyard-gold transition-colors cursor-pointer">Private Booking</span></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-500 uppercase tracking-widest font-bold">
        <p>&copy; {new Date().getFullYear()} Vrinda Nivas. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
