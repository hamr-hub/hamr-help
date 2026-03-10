import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import FAQ from './pages/FAQ';
import Troubleshooting from './pages/Troubleshooting';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/getting-started/*" element={<GettingStarted />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faq/*" element={<FAQ />} />
            <Route path="/troubleshooting" element={<Troubleshooting />} />
            <Route path="/troubleshooting/*" element={<Troubleshooting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guides/*" element={<GettingStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
