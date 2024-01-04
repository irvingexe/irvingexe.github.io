import 'normalize.css/normalize.css'
import './globals.css'
import { darkerGrotesque, inter, notoSans } from './assets/fonts';
import { LastRouteProvider } from './contexts/LastRouteProvider';
import { UIProvider } from './contexts/UIProvider';
import { ScrollProvider } from './contexts/ScrollProvider';
import Head from 'next/head';

export const metadata = {
  title: 'Irving Mariscales — Portfolio',
  description: 'I am a Front End Developer with a taste for design and interactivity. This is my web portfolio, here I present some of my experiences, feel free to take a look.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Irving Mariscales — Portfolio</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.title} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/thumbnail.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.irving.work" />
        <meta property="twitter:title" content={metadata.title} />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content="/thumbnail.jpg" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      </Head>
      <LastRouteProvider>
        <UIProvider>
          <ScrollProvider>
            <body className={`${inter.className} ${darkerGrotesque.variable} ${notoSans.variable}`}>{children}</body>
          </ScrollProvider>
        </UIProvider>
      </LastRouteProvider>
    </html>
  )
}
