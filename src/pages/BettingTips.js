import { Link } from 'react-router-dom';
import { FaFutbol } from 'react-icons/fa';

const BettingTips = () => {
  // No database - tips are managed through groups
  const tips = [];

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'won':
        return 'bg-green-600';
      case 'lost':
        return 'bg-red-600';
      default:
        return 'bg-yellow-600';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-primary-green hover:text-primary-green-dark mb-6"
      >
        ← Back to Home
      </Link>

      <div className="bg-primary-blue rounded-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
          <FaFutbol className="text-primary-green" />
          Betting Tips
        </h1>

        {tips.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">
              Mikeka hupatikana kwenye group letu la WhatsApp na channel ya Telegram.
            </p>
            <p className="text-gray-500">
              Jiunge na group letu ili upate mikeka ya kila siku!
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-primary-green font-bold">Match</th>
                  <th className="text-left py-3 px-4 text-primary-green font-bold">League</th>
                  <th className="text-left py-3 px-4 text-primary-green font-bold">Tip</th>
                  <th className="text-left py-3 px-4 text-primary-green font-bold">Odds</th>
                  <th className="text-left py-3 px-4 text-primary-green font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {tips.map((tip) => (
                  <tr 
                    key={tip.id} 
                    className="border-b border-gray-800 hover:bg-primary-dark transition-colors"
                  >
                    <td className="py-4 px-4 text-white font-medium">
                      {tip.matchName || 'N/A'}
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      {tip.league || 'N/A'}
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      {tip.tip || 'N/A'}
                    </td>
                    <td className="py-4 px-4 text-primary-green font-semibold">
                      {tip.odds || 'N/A'}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold ${getStatusColor(tip.status)}`}>
                        {tip.status || 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Mobile Card View */}
        <div className="md:hidden mt-6 space-y-4">
          {tips.map((tip) => (
            <div 
              key={tip.id}
              className="bg-primary-dark rounded-lg p-4 border border-gray-700"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-lg">{tip.matchName || 'N/A'}</h3>
                <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${getStatusColor(tip.status)}`}>
                  {tip.status || 'Pending'}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{tip.league || 'N/A'}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-300 text-sm">Tip: <span className="text-white font-medium">{tip.tip || 'N/A'}</span></p>
                </div>
                <div>
                  <p className="text-primary-green font-bold">Odds: {tip.odds || 'N/A'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BettingTips;


