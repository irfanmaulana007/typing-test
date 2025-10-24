import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAnalytics } from './hooks';

// Analytics wrapper component that runs inside Router context
const AppWithAnalytics = () => {
  // Initialize analytics tracking inside Router context
  useAnalytics();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWithAnalytics />
    </Router>
  );
}

export default App;
