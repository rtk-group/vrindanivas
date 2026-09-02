import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "919690103443"; // Original number with country code
  const message = "Radhe Radhe! I would like to inquire about booking a room at Vrinda Nivas.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm py-2 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium pointer-events-none">
        Book on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
