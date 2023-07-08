import { Montserrat, Inter } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
  });
  
export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});