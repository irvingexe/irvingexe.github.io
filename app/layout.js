import 'normalize.css/normalize.css'
import './globals.css'
import { darkerGrotesque, inter, notoSans } from './assets/fonts';
import { LastRouteProvider } from './contexts/LastRouteProvider';
import { UIProvider } from './contexts/UIProvider';
import { ScrollProvider } from './contexts/ScrollProvider';

const title = 'Irving Mariscales — Portfolio';
const description = 'I am a Front End Developer with a taste for design and interactivity. This is my web portfolio, here I present some of my experiences, feel free to take a look.';

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: 'https://www.irving.work',
    siteName: 'Irving Mariscales',
    images: [
      {
        url: '/thumbnail.jpg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://www.irving.work',
    title: title,
    description: description,
    image: '/thumbnail.jpg',
  },
  metadataBase: 'https://www.irving.work',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
