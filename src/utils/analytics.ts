// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Google Analytics configuration
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID';

// Initialize Google Analytics
export const initializeAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (pageName: string, pagePath?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      page_path: pagePath || window.location.pathname,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track typing test specific events
export const trackTypingTestStart = (testType: string = 'standard') => {
  trackEvent('typing_test_start', {
    test_type: testType,
    timestamp: new Date().toISOString(),
  });
};

export const trackTypingTestComplete = (stats: {
  wpm: number;
  accuracy: number;
  timeSpent: number;
  wordsTyped: number;
  errors: number;
}) => {
  trackEvent('typing_test_complete', {
    wpm: stats.wpm,
    accuracy: stats.accuracy,
    time_spent_seconds: stats.timeSpent,
    words_typed: stats.wordsTyped,
    errors: stats.errors,
    timestamp: new Date().toISOString(),
  });
};

export const trackTypingTestPause = (timeSpent: number) => {
  trackEvent('typing_test_pause', {
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString(),
  });
};

export const trackTypingTestResume = () => {
  trackEvent('typing_test_resume', {
    timestamp: new Date().toISOString(),
  });
};

// Track user engagement
export const trackUserEngagement = (action: string, details?: Record<string, unknown>) => {
  trackEvent('user_engagement', {
    action,
    ...details,
    timestamp: new Date().toISOString(),
  });
};

// Track session duration
export const trackSessionDuration = (duration: number) => {
  trackEvent('session_duration', {
    duration_seconds: duration,
    timestamp: new Date().toISOString(),
  });
};

// Track navigation events
export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', {
    from_page: from,
    to_page: to,
    timestamp: new Date().toISOString(),
  });
};

// Track typing performance metrics
export const trackTypingPerformance = (metrics: {
  averageWpm: number;
  bestWpm: number;
  totalTests: number;
  averageAccuracy: number;
}) => {
  trackEvent('typing_performance', {
    average_wpm: metrics.averageWpm,
    best_wpm: metrics.bestWpm,
    total_tests: metrics.totalTests,
    average_accuracy: metrics.averageAccuracy,
    timestamp: new Date().toISOString(),
  });
};

// Track errors and issues
export const trackError = (errorType: string, errorMessage: string, context?: Record<string, unknown>) => {
  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
    ...context,
    timestamp: new Date().toISOString(),
  });
};

// Track feature usage
export const trackFeatureUsage = (featureName: string, usageDetails?: Record<string, unknown>) => {
  trackEvent('feature_usage', {
    feature_name: featureName,
    ...usageDetails,
    timestamp: new Date().toISOString(),
  });
};
