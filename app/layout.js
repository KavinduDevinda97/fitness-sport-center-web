import { Bebas_Neue, Be_Vietnam_Pro } from 'next/font/google'
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';



const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const vietnam = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
})


export const metadata = {
  title: "FITNESS SPORTS CENTER",
  description: "Experience the ultimate fitness journey at our state-of-the-art gym. Join us to achieve your health goals with expert trainers, cutting-edge equipment, and a supportive community. Your transformation starts here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${vietnam.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
