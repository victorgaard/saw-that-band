'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';

function GoogleAnalyticsWrapper() {
  return <GoogleAnalytics strategy="lazyOnload" trackPageViews />;
}

export default GoogleAnalyticsWrapper;
