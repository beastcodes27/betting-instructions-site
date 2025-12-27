import { Link } from 'react-router-dom';
import { FaFileAlt, FaUsers, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const RegistrationGuide = () => {
  // Hardcoded group links
  const groupLinks = {
    whatsapp: 'https://chat.whatsapp.com/YOUR_GROUP_LINK',
    telegram: 'https://t.me/YOUR_CHANNEL_LINK'
  };


  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-green hover:text-primary-green-dark mb-6 animate-slideInLeft transition-transform duration-300 hover:translate-x-1"
      >
        ← Rudi Nyumbani
      </Link>

      <div className="bg-primary-blue rounded-lg p-6 md:p-8 space-y-8 animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3 animate-fadeIn">
          <FaFileAlt className="text-primary-green animate-float" />
          Maelekezo Ya Kujisajili PARIPESA
        </h1>

        {/* Registration Steps */}
        <section className="text-gray-300 animate-fadeInUp animation-delay-200">
          <div className="bg-primary-dark rounded-lg p-6 space-y-4 hover:border-primary-green border border-transparent transition-all duration-300">
            <p className="text-lg text-white font-semibold mb-4">
              Anza kwa kubonyeza link hapa chini
            </p>
            
            <a
              href="https://paripesa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary-green hover:bg-primary-green-dark text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-green/50 animate-fadeInUp mb-6"
            >
              Bofya Hapa Kujisajili Paripesa
            </a>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary-green font-bold text-xl flex-shrink-0">1.</span>
                <div>
                  <p className="text-white font-medium mb-1">Jaza namba ya simu bila kuanza na sifuri</p>
                  <p className="text-gray-400 text-sm">Mfano: <span className="text-primary-green font-mono">767456123</span></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary-green font-bold text-xl flex-shrink-0">2.</span>
                <div>
                  <p className="text-white font-medium mb-1">Weka password yenye mchanganyiko wa herufi kubwa, ndogo na namba</p>
                  <p className="text-gray-400 text-sm">Mfano: <span className="text-primary-green font-mono">Tanzania255</span></p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary-green font-bold text-xl flex-shrink-0">3.</span>
                <div>
                  <p className="text-white font-medium mb-1">Sehemu ya promocode jaza:</p>
                  <p className="text-primary-green font-bold text-xl font-mono bg-primary-blue px-4 py-2 rounded inline-block mt-2">BONGOMEMES</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-primary-green font-bold text-xl flex-shrink-0">4.</span>
                <p className="text-white font-medium">Gusa sehemu imeandikwa <span className="text-primary-green font-bold">"CREATE ACCOUNT"</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Group Section */}
        <section className="text-gray-300 animate-fadeInUp animation-delay-300">
          <h2 className="text-2xl font-bold text-primary-green mb-4 flex items-center gap-2">
            <FaUsers className="text-primary-green animate-float animation-delay-200" />
            Baada ya Kujisajili Jiunge na Group Letu
          </h2>
          <p className="mb-4 text-lg text-white font-medium">
            Tupige pesa pamoja! Jiunge na group letu ili usipitwe na mikeka ya kila siku na msaada kutoka kwa jamii yetu.
          </p>
          <div className="space-y-4">
            {groupLinks.whatsapp && (
              <a
                href={groupLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg hover:shadow-green-600/50 animate-fadeInUp"
              >
                <FaWhatsapp className="text-2xl animate-float" />
                Jiunge na Group la WhatsApp
              </a>
            )}

            {groupLinks.telegram && (
              <a
                href={groupLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/50 animate-fadeInUp animation-delay-100"
              >
                <FaTelegramPlane className="text-2xl animate-float animation-delay-200" />
                Jiunge na Channel ya Telegram
              </a>
            )}

          </div>
        </section>

      </div>
    </div>
  );
};

export default RegistrationGuide;

