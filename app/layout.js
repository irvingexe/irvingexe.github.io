import 'normalize.css/normalize.css'
import './globals.css'
import { darkerGrotesque, inter, notoSans } from './assets/fonts';
import { LastRouteProvider } from './contexts/LastRouteProvider';

export const metadata = {
  title: 'Irving Mariscales — Portfolio',
  description: 'I am a Front End Developer with a taste for design and interactivity. This is my web portfolio, here I present some of my experiences, feel free to take a look.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LastRouteProvider>
        <body className={`${inter.className} ${darkerGrotesque.variable} ${notoSans.variable}`}>{children}</body>
      </LastRouteProvider>
    </html>
  )
}
