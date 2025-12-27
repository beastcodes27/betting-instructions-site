import { Link } from 'react-router-dom';
import { FaUsers, FaCheck, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const JoinGroup = () => {
  // Hardcoded group links - update these with your actual links
  const groupLinks = {
    whatsapp: 'https://chat.whatsapp.com/YOUR_GROUP_LINK',
    telegram: 'https://t.me/YOUR_CHANNEL_LINK'
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-green hover:text-primary-green-dark mb-6"
      >
        ← Back to Home
      </Link>

      <div className="bg-primary-blue rounded-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <FaUsers className="text-primary-green" />
          Join Our Group
        </h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <p className="text-lg mb-6">
              Join our community to get daily betting tips, support, and updates. 
              Connect with other members and stay informed about the latest predictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Benefits of Joining
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Daily betting tips and predictions</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Expert analysis and insights</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Community support and discussions</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Early access to special tips</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Regular updates and notifications</span>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            {groupLinks.whatsapp && (
              <a
                href={groupLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp />
                Join WhatsApp Group
              </a>
            )}

            {groupLinks.telegram && (
              <a
                href={groupLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-center transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FaTelegramPlane />
                Join Telegram Group
              </a>
            )}
          </section>

          <section className="mt-8 p-4 bg-primary-dark rounded-lg">
            <p className="text-sm text-gray-400 text-center">
              By joining our group, you agree to follow community guidelines and bet responsibly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JoinGroup;


