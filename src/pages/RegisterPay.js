import { Link } from 'react-router-dom';
import { FaFileAlt, FaLock, FaCheck } from 'react-icons/fa';

const RegisterPay = () => {
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
          <FaFileAlt className="text-primary-green" />
          How to Register & Pay with Paripesa
        </h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 1: Create a Pesapal Account
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Visit the Pesapal website (www.pesapal.com)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Click on "Sign Up" or "Register" button</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Enter your phone number (Tanzania number format)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Verify your phone number with the SMS code sent to you</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">5.</span>
                <span>Create a secure password (at least 8 characters)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">6.</span>
                <span>Complete your profile with personal information</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 2: Link Your Payment Method
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Go to your Pesapal dashboard</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Navigate to "Payment Methods" or "Wallet" section</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Add your mobile money number (M-Pesa, Tigo Pesa, Airtel Money)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Verify your mobile money account</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4">
              Step 3: Making Payments
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <span className="text-primary-green mr-2">1.</span>
                <span>Log in to your Pesapal account</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">2.</span>
                <span>Select "Send Money" or "Pay" option</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">3.</span>
                <span>Enter the recipient's details or select from your contacts</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">4.</span>
                <span>Enter the amount you want to pay</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">5.</span>
                <span>Choose your payment method (mobile money)</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">6.</span>
                <span>Confirm the transaction details</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">7.</span>
                <span>Enter your Pesapal PIN to authorize the payment</span>
              </p>
              <p className="flex items-start">
                <span className="text-primary-green mr-2">8.</span>
                <span>You will receive a confirmation SMS</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-green mb-4 flex items-center gap-2">
              <FaLock className="text-primary-green" />
              Security Tips
            </h2>
            <div className="bg-primary-dark rounded-lg p-4 space-y-3">
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Never share your Pesapal PIN with anyone</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Always log out after using your account</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Use a strong, unique password</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Enable two-factor authentication if available</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Only make payments to trusted recipients</span>
              </p>
              <p className="flex items-start">
                <FaCheck className="text-primary-green mr-2 mt-1 flex-shrink-0" />
                <span>Check transaction details before confirming</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RegisterPay;


