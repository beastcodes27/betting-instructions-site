import { Link } from 'react-router-dom';
import { FaFileAlt, FaQuestionCircle, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';

const Home = () => {
  const menuButtons = [
    {
      id: 1,
      title: 'Bonyeza Hapa kupata mwongozo wote wa kujisajili Paripesa ukiingia kwenye group usipitwe na mikeka ya leo',
      path: '/registration-guide',
      icon: FaFileAlt,
      description: 'Mwongozo kamili wa kujisajili na kuungana na group yetu'
    },
    {
      id: 2,
      title: 'Maswali na Majibu ↗',
      path: '/faq',
      icon: FaQuestionCircle,
      description: 'Maelekezo Yote Muhimu kuhusu PARIPESA kama Kuweka Code ya Mkeka, Kuweka Pesa, Kutoa Pesa n.k'
    },
    {
      id: 3,
      title: 'Group la WhatsApp',
      path: '/whatsapp-group',
      icon: FaWhatsapp,
      description: 'Jiunge na group letu la WhatsApp kupata mikeka ya kila siku'
    },
    {
      id: 4,
      title: 'Channel ya Telegram',
      path: '/telegram-channel',
      icon: FaTelegramPlane,
      description: 'Jiunge na channel yetu ya Telegram kupata updates za haraka'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fadeInUp">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
          Karibu Betting Tips Tanzania
        </h1>
        <p className="text-gray-400 text-lg animate-fadeIn animation-delay-200">
          Chanzo chako cha kuaminika cha mikeka na mwongozo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menuButtons.map((button, index) => (
          <Link
            key={button.id}
            to={button.path}
            className="bg-primary-blue hover:bg-opacity-80 border-2 border-transparent hover:border-primary-green rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-green/50 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-5xl mb-4 text-primary-green flex justify-center animate-float">
              {button.icon && (() => {
                const Icon = button.icon;
                return <Icon />;
              })()}
            </div>
            <h2 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
              {button.title}
            </h2>
            <p className="text-gray-400 text-sm">
              {button.description}
            </p>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Home;


