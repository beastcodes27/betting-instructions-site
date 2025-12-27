import { Link } from 'react-router-dom';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';

const WhatsAppGroup = () => {
  // Hardcoded WhatsApp group link - update this with your actual group link
  const groupLink = 'https://chat.whatsapp.com/YOUR_GROUP_LINK';

  return (
    <div className="max-w-3xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-green hover:text-primary-green-dark mb-6 animate-slideInLeft transition-transform duration-300 hover:translate-x-1"
      >
        ← Rudi Nyumbani
      </Link>

      <div className="bg-primary-blue rounded-lg p-6 md:p-8 animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3 animate-fadeIn">
          <FaWhatsapp className="text-green-500 animate-float" />
          Group la WhatsApp
        </h1>

        <div className="space-y-6 text-gray-300">
          <section className="animate-fadeInUp animation-delay-200">
            <p className="text-lg mb-6">
              Jiunge na group letu la WhatsApp ili upate mikeka ya kila siku, msaada, na updates za haraka.
            </p>
          </section>

          <section className="animate-fadeInUp animation-delay-300">
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Faida za Kujiunga
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3 hover:border-primary-green border border-transparent transition-all duration-300">
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Mikeka ya kila siku na utabiri</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Uchambuzi wa kitaalamu na maarifa</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Msaada wa jamii na majadiliano</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Ufikiaji wa mapema kwa mikeka maalum</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Updates za mara kwa mara na arifa</span>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <a
              href={groupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-3 text-xl transform hover:scale-105 hover:shadow-lg hover:shadow-green-600/50 animate-fadeInUp"
            >
              <FaWhatsapp className="text-3xl animate-float" />
              Jiunge na Group la WhatsApp
            </a>
          </section>

          <section className="mt-8 p-4 bg-primary-dark rounded-lg">
            <p className="text-sm text-gray-400 text-center">
              Kwa kujiunga na group letu, unakubali kufuata miongozo ya jamii na kucheza kwa jibu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppGroup;

