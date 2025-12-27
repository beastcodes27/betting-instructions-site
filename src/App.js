import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RegistrationGuide from './pages/RegistrationGuide';
import FAQ from './pages/FAQ';
import WhatsAppGroup from './pages/WhatsAppGroup';
import TelegramChannel from './pages/TelegramChannel';
import BettingTips from './pages/BettingTips';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/registration-guide"
          element={
            <Layout>
              <RegistrationGuide />
            </Layout>
          }
        />
        <Route
          path="/faq"
          element={
            <Layout>
              <FAQ />
            </Layout>
          }
        />
        <Route
          path="/whatsapp-group"
          element={
            <Layout>
              <WhatsAppGroup />
            </Layout>
          }
        />
        <Route
          path="/telegram-channel"
          element={
            <Layout>
              <TelegramChannel />
            </Layout>
          }
        />
        <Route
          path="/tips"
          element={
            <Layout>
              <BettingTips />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
