import { Link } from 'react-router-dom';
import { trackUserEngagement } from '../utils/analytics';

const Navigation = () => {
  // const location = useLocation();

  // const isActive = (path: string) => {
  //   return location.pathname === path;
  // };

  const handleLogoClick = () => {
    trackUserEngagement('logo_click');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center"
              onClick={handleLogoClick}
            >
              <span className="text-2xl font-bold text-blue-600">
                TypingTest
              </span>
            </Link>
          </div>

          {/* <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/about')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/contact')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              Contact
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
