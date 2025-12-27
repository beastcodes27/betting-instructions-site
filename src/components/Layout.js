import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-primary-dark">
      <header className="bg-primary-blue border-b border-gray-800 animate-slideInLeft">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold text-primary-green hover:text-primary-green-dark transition-colors duration-300 inline-block transform hover:scale-105">
            Betting Tips Tanzania
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 animate-fadeIn">
        {children}
      </main>
      <footer className="bg-primary-blue border-t border-gray-800 mt-12 animate-fadeInUp animation-delay-300">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-primary-green font-bold mb-2">Contact Us</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://wa.me/255746439242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-all duration-300 flex items-center gap-2 transform hover:scale-110 hover:animate-bounce-slow"
                >
                  <FaWhatsapp className="animate-float" />
                  WhatsApp
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="https://t.me/+255617800426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 transform hover:scale-110 hover:animate-bounce-slow"
                >
                  <FaTelegramPlane className="animate-float animation-delay-200" />
                  Telegram
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Bet responsibly. This platform provides betting tips only and does not guarantee winnings.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

