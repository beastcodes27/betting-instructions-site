import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaQuestionCircle, FaChevronDown, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Jinsi gani nitaweza kufanya DEPOSIT kama natumia Mobile Application?",
      answer: [
        "Fungua Application halafu Click \"MENU\"",
        "Kwa juu kulia utaona neno \"Deposit\"",
        "Click hapo halafu chagua mtandao uliojisajilia (Kama ni Voda chagua Vodacom, Kama ni Tigo chagua Tigo, kama ni Airtel chagua Airtel etc)",
        "Ingiza kiasi unachotaka kuweka halafu kuna ujumbe utatokea ukikutaka kuingiza namba ya siri, malizia kwa kuingiza namba ya siri ili kukamilisha kuweka pesa"
      ]
    },
    {
      question: "Nawezaje kutumia CODE YA MIKEKA inayotumwa kama natumia Application?",
      answer: [
        "JINSI YA KUWEKA CODE YA MKEKA KWENYE APP",
        "",
        "Fungua App yako",
        "Bonyeza hicho kiduara cha katikati hapo chini kimeandikwa Bet Slip",
        "Then Click \"Download Bet Slip\"",
        "Then paste Code hafu click Upload"
      ]
    },
    {
      question: "Jinsi gani nitatumia CODE YA MIKEKA inayotumwa kwenye magroup kama natumia WEBSITE?",
      answer: [
        "JINSI YA KUWEKA CODE YA MKEKA KAMA UNATUMIA WEBSITE",
        "",
        "Gusa kitufe kimeandikwa \"Betslip\" hapo chini katikati",
        "Hafu utaona neno limeandikwa \"Go to betslip\", bonyeza hapo",
        "Kisha bonyeza vidoti vitatu vipo pembeni kulia mwa neno \" My betslip\"",
        "Hafu utaona neno \"Load Betslip\" bonyeza hapo, weka code ya mkeka wako hafu malizia kwa kubonyeza \"load\""
      ]
    },
    {
      question: "Nawezaje kuwasiliana na HUDUMA KWA WATEJA?",
      answer: [
        "Kwenye App click \"Menu\" then \"Customer Support\" hafu click \"Chat\" hafu elezea hyo changamoto then wakikupa robot click Call Operator pale juu ili uhudumiwe na binadamu",
        "",
        "Unaweza kuandika hata kwa kiswahili mana wana wahudumu wa kiswahili pia"
      ]
    },
    {
      question: "DOCUMENT NUMBER ni nini nataka kutoa Pesa naambiwa nijaze hyo",
      answer: [
        "Sehemu ya document type chagua IDENTITY CARD",
        "Sehemu ya document number weka namba ya NIDA au Namba ya Kitambulisho cha Mpiga Kura"
      ]
    },
    {
      question: "Natoaje Pesa kupitia Application ya Paripesa?",
      answer: [
        "Fungua App hafu Click \"MENU\"",
        "Juu kulia utaona icon ya settings",
        "Bonyeza hapo",
        "Then chagua \"withdraw\"",
        "Then chagua mtandao uliojisajilia kuweza kutoa pesa",
        "Ingiza kiasi unachotoa halafu malizia kutoa pesa"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-green hover:text-primary-green-dark mb-6 animate-slideInLeft transition-transform duration-300 hover:translate-x-1"
      >
        ← Rudi Nyumbani
      </Link>

      <div className="bg-primary-blue rounded-lg p-6 md:p-8 animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3 animate-fadeIn">
          <FaQuestionCircle className="text-primary-green animate-float" />
          Maswali na Majibu
        </h1>

        <p className="text-gray-300 mb-8 text-lg animate-fadeIn animation-delay-200">
          Maelekezo Yote Muhimu kuhusu PARIPESA kama Kuweka Code ya Mkeka, Kuweka Pesa, Kutoa Pesa n.k
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-primary-dark rounded-lg shadow-md overflow-hidden transition-all duration-300 animate-fadeInUp hover:shadow-lg hover:shadow-primary-green/20 border border-gray-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-primary-blue transition-colors duration-200"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaQuestionCircle className="text-white text-sm" />
                  </div>
                  <h2 className="text-sm md:text-base font-bold text-blue-400 flex-1">
                    {faq.question}
                  </h2>
                </div>
                <FaChevronDown 
                  className={`text-gray-400 ml-4 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 pb-4 md:pb-5 pl-16 text-gray-300 text-sm md:text-base">
                  {Array.isArray(faq.answer) ? (
                    <div className="space-y-3">
                      {faq.answer.map((line, lineIndex) => {
                        if (line === '') {
                          return <div key={lineIndex} className="h-2" />;
                        }
                        if (line.toUpperCase() === line && line.length > 10) {
                          return (
                            <h3 key={lineIndex} className="text-primary-green font-bold text-base md:text-lg mb-2 mt-4 first:mt-0">
                              {line}
                            </h3>
                          );
                        }
                        return (
                          <div key={lineIndex} className="flex items-start gap-3">
                            <FaArrowRight className="text-primary-green mt-1 flex-shrink-0" />
                            <span className="flex-1">{line}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="whitespace-pre-line">{faq.answer}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded-lg">
          <p className="text-yellow-200 text-center text-sm">
            Kama una maswali zaidi, wasiliana nasi kupitia WhatsApp au Telegram. Angalia sehemu ya "Contact Us" kwenye footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

