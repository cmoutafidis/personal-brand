import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
    <body className="antialiased">
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}