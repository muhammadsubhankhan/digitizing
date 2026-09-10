import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/site';

/**
 * Google Analytics 4.
 *
 * next/script with afterInteractive is the App Router equivalent of dropping
 * the gtag snippet into <head> — Next hoists it and loads it once per session
 * rather than on every client-side navigation. Page views on route changes are
 * tracked by GA4's own enhanced measurement, so no extra router hook is needed.
 */
export default function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
