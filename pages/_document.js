import CookiebotScript from '@/components/CookiebotScript';
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const googleTagManagerIds = [
  'G-E1ZE2R48SR',
  'G-75XP77FFDL',
  'G-HV0TRJ6923',
];


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {googleTagManagerIds.map((id) => (
          <Script
            key={id}
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
          />
        ))}
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            ${googleTagManagerIds
              .map((id) => `gtag('js', new Date()); gtag('config', '${id}');`)
              .join("\n")}
          `}
        </Script>
        {/* <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b414e23e-aff2-42f7-bd91-416f2e90fad7"
          data-blockingmode="auto"
          type="text/javascript"
        ></script> */}
        {/* <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="8398585a-8058-4a75-8438-8fbd945e42d7"
          data-blockingmode="auto"
          type="text/javascript"
        ></script> */}
      </Head>
      <body>
        {/* <CookiebotScript /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
