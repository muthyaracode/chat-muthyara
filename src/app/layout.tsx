import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muthyara AI Asisten',
  description:
    'Muthyara AI Asisten, teman ngobrol cerdas dan ramah.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Muthyara AI Asisten',
  },
  icons: {
    icon: '/icons/muthyara-ai.svg',
    apple: '/icons/muthyara-ai.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fff0f6" />
        <meta name="description" content={metadata.description as string} />
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Muthyara AI Asisten" />
        <link rel="apple-touch-icon" href="/icons/muthyara-ai.svg" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-rose-50 text-rose-950 dark:bg-[#211720] dark:text-rose-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
