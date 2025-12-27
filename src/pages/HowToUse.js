import { Link } from 'react-router-dom';
import { FaBook, FaLightbulb, FaChartBar, FaExclamationTriangle, FaThumbtack } from 'react-icons/fa';

const HowToUse = () => {
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
          <FaBook className="text-primary-green" />
          How to Use Paripesa
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 1: Account Registration
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Visit the Paripesa website or download the mobile app</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Click on "Register" or "Sign Up"</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Enter your personal information (name, email, phone number)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Create a username and secure password</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">5.</span>
                <span>Verify your email and phone number</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">6.</span>
                <span>Complete your profile with any required documents</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 2: Depositing Money
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Log in to your Paripesa account</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Go to the "Deposit" or "Wallet" section</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Select your preferred payment method (Mobile Money, Bank Transfer, etc.)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Enter the amount you want to deposit</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">5.</span>
                <span>Follow the payment instructions provided</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">6.</span>
                <span>Confirm the transaction</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">7.</span>
                <span>Wait for confirmation (usually instant or within a few minutes)</span>
              </p>
            </div>
            <div className="mt-4 p-4 bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg">
              <p className="text-blue-200 text-sm flex items-start gap-2">
                <FaLightbulb className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span><strong>Tip:</strong> Minimum deposit amounts may apply. Check the terms and conditions for details.</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 3: Placing a Bet
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Navigate to the "Sports" or "Betting" section</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Browse available matches and events</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Select a match or event you want to bet on</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Choose your bet type (Match Winner, Over/Under, etc.)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">5.</span>
                <span>Click on the odds to add the selection to your bet slip</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">6.</span>
                <span>Enter your stake amount in the bet slip</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">7.</span>
                <span>Review your bet details (potential winnings, odds)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">8.</span>
                <span>Click "Place Bet" to confirm</span>
              </p>
            </div>
            <div className="mt-4 p-4 bg-green-900 bg-opacity-20 border border-green-700 rounded-lg">
              <p className="text-green-200 text-sm flex items-start gap-2">
                <FaChartBar className="text-green-400 mt-0.5 flex-shrink-0" />
                <span><strong>Example:</strong> If you bet 1,000 TZS on odds of 2.5, your potential winnings would be 2,500 TZS (1,000 × 2.5).</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 4: Withdrawing Winnings
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Go to the "Withdraw" or "Cash Out" section</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Select your withdrawal method (same as deposit method recommended)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Enter the amount you want to withdraw</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Enter your withdrawal details (account number, etc.)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">5.</span>
                <span>Confirm the withdrawal request</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">6.</span>
                <span>Wait for processing (usually 24-48 hours)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">7.</span>
                <span>You will receive a confirmation notification</span>
              </p>
            </div>
            <div className="mt-4 p-4 bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded-lg">
              <p className="text-yellow-200 text-sm flex items-start gap-2">
                <FaExclamationTriangle className="text-yellow-400 mt-0.5 flex-shrink-0" />
                <span><strong>Note:</strong> Withdrawal processing times and minimum amounts vary. Always check the terms and conditions.</span>
              </p>
            </div>
          </section>

          <section className="mt-8 p-6 bg-primary-dark rounded-lg border border-primary-green">
            <h2 className="text-xl font-bold text-primary-green mb-3 flex items-center gap-2">
              <FaThumbtack className="text-primary-green" />
              Important Reminders
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Always bet responsibly and within your means</li>
              <li>• Understand the odds before placing a bet</li>
              <li>• Keep track of your betting activity</li>
              <li>• Set limits for yourself</li>
              <li>• This is for informational purposes only</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;


