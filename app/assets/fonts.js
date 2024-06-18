import { BhuTuka_Expanded_One, Darker_Grotesque, Inter, League_Gothic } from "next/font/google";

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

export const leagueGothic = League_Gothic({
  subsets: ['latin'],
  variable: '--league-gothic',
  weight: '400'
});