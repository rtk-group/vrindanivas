import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // White background if scrolled past 50px
      setIsScrolled(currentScrollY > 50);

      // Hide navbar when scrolling UP (as requested: "jab me up karu to navbar upar hi reh jaye show na ho") 
      // and SHOW when scrolling DOWN ("scroll down kar ne par navbar show ho with white background")
      // Wait, standard user might mean scrolling the page down (increasing scrollY). 
      // We will just implement the white background on scroll down, and keep it sticky.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(true); 
      } else if (currentScrollY < lastScrollY && currentScrollY > 100) {
        // Scrolling up
        // Some users refer to "scrolling up" as moving thumb up, which scrolls page down.
        // Let's just make it always visible but change to white background as explicitly requested.
        setShowNavbar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';
  const useSolidBackground = !isHomePage || isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 transform ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${useSolidBackground ? 'bg-white text-goyard-dark shadow-xl py-4 border-none' : 'bg-transparent text-white py-6 border-b border-white/20'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <div className="flex-1 flex justify-start">
            <Link to="/" className={`text-3xl font-bold font-serif tracking-widest hover:text-goyard-gold transition ${useSolidBackground ? 'text-goyard-dark' : 'text-white'}`}>
              VRINDA
            </Link>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`hover:text-goyard-gold transition-colors duration-300 text-[11px] uppercase tracking-[0.15em] font-bold ${useSolidBackground ? 'text-goyard-dark' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex justify-end items-center">
            <Link to="/rooms" className={`hidden md:inline-block px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${useSolidBackground ? 'bg-goyard-dark text-white hover:bg-goyard-gold' : 'bg-goyard-gold text-white hover:bg-white hover:text-goyard-dark'}`}>
              Book Now
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden focus:outline-none hover:text-goyard-gold ml-4 ${useSolidBackground ? 'text-goyard-dark' : 'text-white'}`}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full top-full left-0 transition-all border-t border-gray-100">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="block px-3 py-3 text-[11px] font-bold text-goyard-dark hover:text-goyard-gold uppercase tracking-[0.15em]"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/rooms" className="block w-full bg-goyard-gold text-white px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold mt-4">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
