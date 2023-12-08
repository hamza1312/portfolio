import "~/styles/globals.css";

import { cookies } from "next/headers";
import { ThemeProvider } from "~/components/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";
import { GeistSans } from 'geist/font/sans';
import { ModeToggle } from "~/components/mode-toggle";
import Link from "next/link";



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
    description: 'Web developer',
    url: 'https://oubra.vercel.app',
    siteName: 'Hamza Oubrahim',
    locale: 'en_US',
    type: 'website',
  },
  description: "Web developer",
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
      <body className={`${GeistSans.className} dark:text-white antialiased lg:w-[50%] lg:mx-auto h-screen flex flex-col p-6 overflow-y-auto `}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >

            <div className="w-full flex flex-row justify-between items-center pb-4">
              <div className="flex flex-row gap-6">
                <Link href="/" className={`link-primary`}>about</Link>
                <Link href="/blogs" className={`link-primary`} >blogs</Link>
              </div>

              <ModeToggle />

            </div>
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html >
  );
}
