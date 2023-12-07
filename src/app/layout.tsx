import "~/styles/globals.css";

import { cookies } from "next/headers";
import { ThemeProvider } from "~/components/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";
import { GeistSans } from 'geist/font/sans';



export const metadata = {
  title: "Hamza - Portfolio",
  metadataBase: new URL('https://oubra.vercel.app'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Hamza Oubrahim',
    description: '14 | Web developer',
    url: 'https://oubra.vercel.app',
    siteName: 'Hamza Oubrahim',
    locale: 'en_US',
    type: 'website',
  },
  description: "14 | Web developer",
  twitter: {
    title: 'Hamza Oubrahim',
    card: 'summary_large_image',
  },

  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} dark:text-white`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html >
  );
}
