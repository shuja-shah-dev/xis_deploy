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
            ${googleTagManagerIds.map((id) => `gtag('js', new Date()); gtag('config', '${id}');`).join('\n')}
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
