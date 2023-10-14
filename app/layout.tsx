import "./globals.css";
import { IBM_Plex_Mono, Montserrat } from "next/font/google";
import { Header, Navbar } from "@/components";

const ubuntu = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "700"],
});

const ubuntu_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Marin Badrov - Software Developer",
  description: "Marin is a Full Stack Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${ubuntu_mono.variable}`}>
      <head>
        <link rel="icon" sizes="any" href="/favicon.ico" />
      </head>
      <body
        className={`bg-background text-text font-sans`}
      >
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
