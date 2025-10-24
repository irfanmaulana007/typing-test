import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  initializeAnalytics,
  trackPageView,
  trackNavigation,
  trackSessionDuration,
  trackUserEngagement,
} from '../utils/analytics';

export const useAnalytics = () => {
  const location = useLocation();
  const sessionStartTime = useRef<number>(Date.now());
  const lastPage = useRef<string>('');

  // Initialize analytics on mount
  useEffect(() => {
    initializeAnalytics();
    trackPageView('Home', '/');
    trackUserEngagement('app_loaded');
  }, []);

  // Track page changes
  useEffect(() => {
    const currentPath = location.pathname;
    const pageName = getPageName(currentPath);
    
    if (lastPage.current && lastPage.current !== currentPath) {
      trackNavigation(lastPage.current, currentPath);
    }
    
    trackPageView(pageName, currentPath);
    lastPage.current = currentPath;
  }, [location]);

  // Track session duration on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - sessionStartTime.current) / 1000);
      trackSessionDuration(sessionDuration);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return {
    trackUserEngagement,
  };
};

// Helper function to get page name from path
const getPageName = (path: string): string => {
  switch (path) {
    case '/':
      return 'Home';
    case '/about':
      return 'About';
    case '/contact':
      return 'Contact';
    default:
      return 'Unknown Page';
  }
};
