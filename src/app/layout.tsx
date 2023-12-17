import "~/styles/globals.css";

import { cookies } from "next/headers";
import { ThemeProvider } from "~/components/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";
import { GeistSans } from 'geist/font/sans';
import { ModeToggle } from "~/components/mode-toggle";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";



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
    description: 'Hamza - Web developer',
    url: 'https://oubra.me',
    siteName: 'Hamza Oubrahim',
    images: 'https://cdn.discordapp.com/attachments/891814861305176065/1185977075203584153/og.png?ex=65919239&is=657f1d39&hm=0c380eac8b9a28bac33f2d2f75d29e691718cf094f5817c6b07c5b8498ba96df&',
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
                <Link href="/" className={`link-p`}>about</Link>
                <Link href="/blogs" className={`link-p`} >blogs</Link>
              </div>

              <ModeToggle />

            </div>

            <Separator />
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html >
  );
}
