import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919940711214"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="absolute right-full mr-3 bg-black px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}; 