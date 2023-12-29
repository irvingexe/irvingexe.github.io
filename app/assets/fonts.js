import { BhuTuka_Expanded_One, Darker_Grotesque, Inter } from "next/font/google";

export const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  variable: '--darker-grotesque'
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--inter'
});

export const notoSans = BhuTuka_Expanded_One({
  subsets: ['latin'],
  variable: '--noto-sans',
  weight: '400'
});